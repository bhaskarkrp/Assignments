var jwt = require("jsonwebtoken");

const getUserByToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return reject(err);
      }
      return resolve(user);
    });
  });
};

const authCheck = async (req, res, next) => {
  //   next();
  // 1. read the req header
  const headers = req.headers;
  // 2. get the access token from header
  const accessToken = headers.accesstoken;
  //   console.log(accessToken);
  // 3. if access token is not present in the header, then return 400
  if (!(accessToken && accessToken.startsWith("Bearer"))) {
    // console.log("not");
    return res
      .status(400)
      .json({ message: "User does not have access to post the product" });
  }
  //   5. get the user info from token
  const token = accessToken.split(" ")[1];
  let user;
  try {
    // 4. if token exists, then allow user to go
    user = await getUserByToken(token);
    req.user = user;
  } catch (error) {
    return res
      .status(400)
      .json({ message: " Auth token is not valid or not provided" });
  }
  return next();
};

module.exports = authCheck;
