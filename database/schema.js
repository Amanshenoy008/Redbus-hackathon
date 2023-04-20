const mongoose = require('mongoose')


const motion = new mongoose.Schema({
  tilt:{
    required: true,
    type: Number
  },
  shake:{
    required: true,
    type:Number
  },
  rotation:{
    required: true,
    type: Number
  }
})

const envi = new mongoose.Schema({
    temp:{
        required:true,
        type:Number
    }
    ,
    humidity:{
        required:true,
        type: Number
    }

})


module.exports= {motion , envi}