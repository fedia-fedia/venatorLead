const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')


const User = require('../models/user')
const PasswordReset = require('../models/passwordreset')

//transporter
const transporter = nodemailer.createTransport({
    host: '0.0.0.0',
    port: 1025
})

/*const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fediagharbi02@gmail.com', // Your Gmail address
        pass: 'vrjf kmok qewl qikv'   // Your Gmail password or application-specific password
    }
});*/

//Register
router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      companyname: req.body.companyname
  })

  res.send(await user.save())
})

//Login
router.post('/login', async (req, res) => {
  const user = await User.findOne({email: req.body.email})

  if (!user) {
      return res.status(404).send({
          message: 'user not found'
      })
  }

  if (!await bcrypt.compare(req.body.password, user.password)) {
      return res.status(400).send({
          message: 'invalid credentials'
      })
  }

  const token = jwt.sign({_id: user._id}, "secret")

  //The token will be store in http only coockie (jwt is the name of the coockie and the value is token)
  res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day
  })

  res.send({
      message: 'success'
  })

})

//Authenticated User
router.get('/user', async (req, res) => {
  try {
      const cookie = req.cookies['jwt']

      const claims = jwt.verify(cookie, 'secret')

      if (!claims) {
          return res.status(401).send({
              message: 'unauthenticated'
          })
      }

      const user = await User.findOne({_id: claims._id})

      const {password, ...data} = await user.toJSON()

      res.send(data)
  } catch (e) {
      return res.status(401).send({
          message: 'unauthenticated'
      })
  }
})

//Logout
router.post('/logout', (req, res) => {
  res.cookie('jwt', '', {maxAge: 0})

  res.send({
      message: 'success'
  })
})

//PaswordForget
router.post('/forget', async(req, res) => {
    const email = req.body.email;
    const token = Math.random().toString(20).substr(2,12); //create a random string with this token

    const passwordReset = new PasswordReset({
        email ,
        token 
    })

    await passwordReset.save();

    const url = `http://localhost:4200/reset/${token}`;

    await transporter.sendMail({
        from: 'admin@gmail.com',
        to: email,
        subject: 'Reset your password !',
        html: `Click <a href="${url}"> here </a> to reset your password !`
    })

    res.send({
        message: 'Check your email !'
    })
})


//PasswordReset
router.post('/reset', async(req,res) => {
    if(req.body.password !== req.body.password_confirm) {
        return res.status(400).send({
            message: 'Passwords do not match !'
        })
    }

    const passwordReset= await PasswordReset.findOne({token: req.body.token});

    const {email} = await passwordReset.toJSON();

    const user = await User.findOne( {email} );

    if (!user) {
        return res.status(404).send({
            message: 'User Not Found!'
        })
    }

    const salt = await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(req.body.password, salt);
    user.save();

    res.status(200).send({
        message: 'success'
    })


})

module.exports = router;