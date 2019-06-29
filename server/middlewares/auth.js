const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    if(req.headers['authorization'])
    {
        const token=req.headers['authorization'].split(' ')[1];
        jwt.verify(token,process.env.SECRET,(err,decoded)=>{
            if(err)
                {
                    next(Err('Failed to authenticate token'));
                }
            else
                {
                    req.decoded=decoded;
                    next();
                }
        });
    }else{
        next(Err('No token provided'));
    }
};