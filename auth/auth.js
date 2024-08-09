const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null)
      return res.status(401).json({error:"Null token"});
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) 
        return res.status(403).json({error:"Error authenticating"});
      req.user = user;
      next();
    });
  }

module.exports = {
    authenticate
}