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
