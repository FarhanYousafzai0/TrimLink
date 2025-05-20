import User from "../Models/UserMode"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'




// Generate Token:

 const generateToken = async(id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"15d"})
}






// Register Controller:
export const RegisterUser = async(req,res)=>{

const {name,email,password,gender} = req.body

if(!name || email || password || gender){
    res.status(400).json({message:"Please fill all the fields!"})
}

const existingName =  User.findOne({name});
const existingEmail = User.findOne({email});


if(existingName){
    res.status(400).json({message:"Username already exist!"})
}

if(existingEmail){
    res.status(400).json({message:"Email already exist"});
}


 const hashPassowrd = await bcrypt.hash(password,10);

 const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


const newUser = new User({
name,
password : hashPassowrd,
email,
avator:gender === male ? boyProfilePic : girlProfilePic,
gender,

})

res.status(200).json({

id:newUser._id,
name:newUser.name,
email:newUser.email,
avator:newUser.avatar,
gender:newUser.gender,
token:generateToken(newUser._Id)

});


}



// Login User:



export const LoginUser= async(req,res)=>{


    const {name,passowrd}= req.body

    if(!name || !passowrd){
        res.status(401).json({message:"Please fill both fields!"})
    }


    const foundUser = await User.findOne({name});

    if(!foundUser){
        res.status(401).json({message:"User not found"});
    }
const comparePassoword = await bcrypt.compare(passowrd ,foundUser.passowrd)

 if(!comparePassoword){
    res.status(401).json({message:"Passoword is invalid"})
 }


  res.status(200).json({

    id:foundUser._id,
name:foundUser.name,
email:foundUser.email,
avator:foundUser.avatar,
gender:foundUser.gender,
token:generateToken(foundUser._Id)
  })

}

// 