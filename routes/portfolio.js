/*
 * GET portfolio.
 */

exports.index = function(req, res){
    res.render('portfolio', { title: 'Portfolio' });
};