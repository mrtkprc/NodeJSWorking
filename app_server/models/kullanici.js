var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        ad:String,
        soyad:String,
        username:{type:String,required:true,unique:true},
        password:{type:String,required:true}
    },
    {collection:'users'}
);

var user = mongoose.model('user',UserSchema);
module.exports = user;