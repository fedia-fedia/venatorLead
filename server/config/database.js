const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fediagharbi02:9GS8JWKXnqWez5Mu@cluster0.whgggkj.mongodb.net/VenatorLead')
  .then(
    () => {
        console.log('connected');
    }
  )
  .catch(
    (err)=>{
        console.log(err);
    }
  )

module.exports = mongoose;