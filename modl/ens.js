const mongoose = require('mongoose');
mongoose.options.toJSON = { transform : function(doc, ret, options) { 
    delete ret._id;
     delete ret.__v; return ret;
},
 virtuals: true }

const lost = mongoose.Schema({
    
    name : String,
    country : String ,
    typeOf : String ,
    Value : String ,
    createdOn: {
        type: Date,
        default: Date.now,
      },
})
module.exports= mongoose.model('LOST',lost)