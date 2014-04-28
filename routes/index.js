
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
 * GET projects.
 */

exports.projects = function(req, res){
    res.render('projects', { title: 'Projects' });
};

/*
 * GET contact.
 */

exports.contact = function(req, res){
    res.render('contact', { title: 'Contact' });
};