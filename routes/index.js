
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

/*
 * GET about.
 */

exports.about = function(req, res){
    res.render('about', { title: 'About' });
};

/*
 * GET portfolio.
 */

exports.portfolio = function(req, res){
    res.render('portfolio', { title: 'Portfolio' });
};

/*
 * GET contact.
 */

exports.contact = function(req, res){
    res.render('contact', { title: 'Contact' });
};