/*
 * GET index.
 */

exports.index = function(req, res){
    res.render('portfolio', { title: 'Portfolio' });
};

/*
 * GET projects.
 */

exports.getProjects = function(req, res){
    res.render('');
};