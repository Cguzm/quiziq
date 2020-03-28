exports.getLandingPage = (req, res, next) => {
  res.status(200).render('landingPage', {
    title: 'Landing Page'
  });
};

exports.getSignUpPage = (req, res, next) => {
  res.status(200).render('signup', {
    title: 'Create your account'
  });
};

exports.getLoginPage = (req, res, next) => {
  res.status(200).render('login', {
    title: 'Login to your account'
  });
};

exports.getPlayGame = async (req, res, next) => {
  res.status(200).render('play', {
    title: 'Play game'
  });
};
