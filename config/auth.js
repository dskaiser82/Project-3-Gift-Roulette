try{
	require('dotenv').config();
} catch(ex){
	handleErr(ex);
}

module.exports = {
  'facebook': {
    'clientID': process.env.FACEBOOK_CLIENT_ID,
    'clientSecret': process.env.FACEBOOK_CLIENT_SECRET,
    'callbackURL': 'http://localhost:3000/auth/facebook/callback',
    'profileFields': ['emails', 'displayName']
  }
}

// https://evening-depths-97156.herokuapp.com/auth/facebook/callback
// http://localhost:3000/auth/facebook/callback
