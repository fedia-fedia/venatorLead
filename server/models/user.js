/*const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    trim: true,
    required: [true, 'name required']
  },
  email: { 
    type: String, 
    required: [true, 'email required'], 
    unique: true,
    lowercase: true
  },
  password: {
     type: String, 
     required: [true, 'password required']
     //minlength: [6, 'Too short password']
  },
  /*passwordChangedAt: Date,
  passwordResetCode: String,
  passwordResetExpires: Date,
  passwordResetVerified: Boolean,
  companyname: { 
    type: String, 
    trim: true,
    required: [true, 'companyname required']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

},
{ timestamps: true }
);

/*userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    // Hashing user password
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('user', userSchema);*/


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  companyname: { 
    type: String, 
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('user', userSchema);

