const jwt = require("jsonwebtoken");
const User = require("../model/RegScheme.js");
exports.Authenticate =async(req,res,next)=>{
    try {
            const token = req.cookies.blood;
            // console.log(token);
            const verifyToken = jwt.verify(token,process.env.KEY);
            const rootuser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
            if(!rootuser){
                throw new Error('User Not Found');
            }
                req.token = token;
                req.name = rootuser.name;
                req.rootuser = rootuser;
                req.userId = rootuser._id;
                // console.log(`user id id :${req.userId}`);
                next();
            
    } catch (error) {
        res.status(401).send("Unaythorized: No token provided");
        console.log(error);
        if(error==='JsonWebTokenError'){
        }
    }
};

exports.AuthorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.rootuser.role)) {
            return next(
                res.status(403).json({message:`Role: ${req.rootuser.role} is not allowed to access this resouce `})
            );
          }
      next();
    };
  };

