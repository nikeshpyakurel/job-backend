const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors/index')

const auth = async (req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('Authentication Invalid')
    }
    const token = authHeader.split(' ')[1]
    try{
        const playlod = jwt.verify(token,process.env.JWT_SECRET)
        req.user = {userID:playlod.userID,name:playlod.name}
    }catch(error){
        throw new UnauthenticatedError('Authentication Invalid')
    }
    next()
}


module.exports = auth;