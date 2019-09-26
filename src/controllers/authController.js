

// 200  Returns the User object in JSON with a given token
// 
exports.getUser = function(req, res, next) {
  res.send ('Auth Not Implemented');
}

// Checks email and password
// 200  Returns a valid token if credentials valid
// 400  Invalid Credentials (password, or email)
// 500 Otherwise
// Tokens are made up of: payload, config.JWT_SECRET
exports.getToken = function(req, res, next) {
  res.send ('Auth Not Implemented');
}