const authorizedRoles = (...allowedRoles) =>{
   return (req,res,next) =>{
    if(!allowedRoles.incluedes(req.user.role)){
        return res.status(403).json({message: "Acess denied"})
    }
   }

}


module.exports = authorizedRoles;