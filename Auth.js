const passport=require('passport');
const Person=require('./models/person')
const LocalStrategy=require('passport-local').Strategy
passport.use(new LocalStrategy(async function(USERNAME,PASSWORD,done){
    try{
    //   console.log("username and password",USERNAME,PASSWORD);
  const user=await Person.findOne({username:USERNAME})
//   console.log("user",user);
  if(!user){
    return done(null,false,{message:'Invalid Username'});
  }
  const isMatchPassword=await user.comparePassword(PASSWORD);
  if(isMatchPassword){
    return done(null,user);
  }
  else{
    return done(null,false,{message:'Invalid Password'});
  }
    }catch(err){
  return done(err);
    }
  }));
  module.exports=passport;