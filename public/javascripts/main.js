$(document).ready(function(){
    var currentPage = $('#home');
    var prevPage = $('#home');

    $(".nav-link").click(function(){
        var page = $(this)

        prevPage = currentPage
        prevPage.css({"color" : "#4d4d4d"});
        prevPage.css({"cursor" : "pointer"});

        currentPage = page;
        currentPage.css({"color" : "darkblue"});
        currentPage.css({"cursor" : "auto"});

        history.pushState({id: page.attr("id")}, '', page.attr("id"));

        console.log(page.attr("id"));

        console.log(prevPage.attr("id"));
    })
});


