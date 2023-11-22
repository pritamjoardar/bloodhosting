const express =require("express");
// const User = require("../model/userScheme");
const UserRegister =require("../model/RegScheme");
const {Authenticate,AuthorizeRoles} = require("../middleware/authenticate");
const router = express.Router();

// router.get('/',(req,res)=>{
//     res.status(200).send("Hello");
// })


//for registration
router.post('/register',async(req,res)=>{
    const {name,gmail,mobile,blood,pin,password,cpassword} =req.body;
   if(!name || ! gmail || !mobile || !blood || !pin || !password || !cpassword){
    return res.status(422).json({message:"Filled properly"});
   };
   try {
    const userExist = await UserRegister.findOne({gmail:gmail});
    if(userExist){
        return res.status(422).json({message:'User already exist'})
    }else if(password!=cpassword){
        return res.status(422).json({message:'password are not matching'})      
    }
    else {
        const user = new UserRegister({name,gmail,mobile,blood,pin,password});
        await user.save();
        res.status(201).json({message:"User Register Successfully"})
    }
   } catch (error) {
    console.log(error);
   }
 });

//for login
router.post("/login", async (req, res) => {
    try {
      const { gmail, password } = req.body;
      if (!gmail || !password) {
        return res.status(400).json({ message: "Please enter the proper data" });
      }
      const userlogin = await UserRegister.findOne({ gmail });
      if (userlogin && userlogin.password === password) {
        const token = await userlogin.generateAuthToken();
         res.cookie("blood", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
          res.status(201).json({ message: "User login successfully" }); 
        
      } else {
        res.status(400).json({ message: "Invalid Credenttial" });
      }
    } catch (error) {
      console.log(error);
    }
  });

//for logout
router.get("/logout", (req, res) => {
    res.clearCookie("blood", { path: "/" });
    return res.status(200).send("User Logout");
  });


//contact us
router.post("/contact", Authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ message: "plz filled the contact form" });
    }
    const userContact = await UserRegister.findOne({ _id: req.userId });
    if (userContact) {
      const userMessage = await userContact.addMesage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "Message has been send" });
    }
  } catch (error) {
    console.log(error);
  }
});
//getdata
router.get("/getUser", Authenticate, async(req, res) => {
  await res.send(req.rootuser);
});
//userVerify
router.get("/userVerify",Authenticate,async(req,res)=>{
  return res.status(201).json({message:"User Verify"})
})

//for search
router.post("/search",Authenticate,async(req,res)=>{
  const {pin,blood} = req.body;
  const role = "user";
  const mark = "doner";
  if(blood && !pin){
    const Data =await UserRegister.find({blood,role,mark},{"password":0,"cpassword":0,"date":0,"messages":0,"tokens":0,"_id":0});
    if(Data.length===0){
      return res.status(404).json({Success:false});
      }
    return res.status(202).json(Data);
  }else if(!blood && pin){
    const Data =await UserRegister.find({pin,role,mark},{"password":0,"cpassword":0,"date":0,"messages":0,"tokens":0,"_id":0});
    if(Data.length===0){
      return res.status(404).json({Success:false});
      }
    return res.status(202).json(Data);
  }else{
  const Data =await UserRegister.find({pin,blood,role,mark},{"password":0,"cpassword":0,"date":0,"messages":0,"tokens":0,"_id":0});
  if(Data.length===0){
    return res.status(404).json({Success:false});
    }
  return res.status(202).json(Data);
  }
 
  
})

//for update
router.put("/me/update/:id",async(req,res)=>{
  const id = req.params.id ; 
  const Data = await UserRegister.findByIdAndUpdate(id);
  const {name,gmail,mobile,blood,pin,password,mark} =req.body;
 
  if(!name || ! gmail || !mobile || !blood || !pin || !password){
    return res.status(422).json({message:"Filled properly"});
   }
   try {
    if(!Data){
      return res.status(404).json({message:"User not found"})
    }else{
      const Data = await UserRegister.findByIdAndUpdate(id,{name,gmail,mobile,blood,pin,password,mark});
      await Data.save();
      const User = await UserRegister.findById(id);
      return res.status(201).json({message:"User update Successfully",User});
    }
  
  } catch (error) {
    console.log(error);
  }
})

//for admin 
router.get('/admin',Authenticate,AuthorizeRoles("admin"),async(req,res)=>{
   return res.status(200).json({message:`Welcome Admin`});
})
//all data
router.get("/alldata",async(req,res)=>{
  const role = "user";
  const data = await UserRegister.find({role},{"password":0,"role":0});
  await res.send({data})
})

//for delete
router.delete("/deleteuser/:id",async(req,res)=>{
  const {id} = req.params;
  const Data = await UserRegister.findByIdAndDelete(id);
  return res.status(202).json({Data,message:"Delete Data successfully"});
})
module.exports = router;
