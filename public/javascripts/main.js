$(document).ready(function(){

    //Creating an array that will store the breadcrumb of the user
    var pageArray = [];

    //Adding the first value to the page array of where the user landed on the site
    pageArray.push($("#" + $("head title").text().toLowerCase()));
    var startOfArray = pageArray.length - 1;

    var History = window.History;

    //Checking to see if the users browser supports html5 histroy
    if(!History.enabled){
        alert("This site works better on a browser that supports HTML5. Please upgrade to get the best content.");
    }


    //Adding the first landed page to the web browsers history
    History.pushState({}, pageArray[startOfArray].attr('id'), pageArray[startOfArray].attr('href'));

    $(".nav-link").click(function(event){
        //Preventing the links from firing making the user leave the page.
        event.preventDefault();

        //Checking to see if the clicked link is the currently displayed one preventing from it loading a page that is already loaded
        if($(this).attr('id') == pageArray[startOfArray].attr('id'))
            return false;

        //Changing the CSS of the current navigation text to default
        pageArray[startOfArray].css({"color" : "#4d4d4d"});
        pageArray[startOfArray].css({"cursor" : "pointer"});

        //Adding the new clicked page to the array
        pageArray.push($(this));
        startOfArray = startOfArray + 1

        //Changing the CSS of the clicked navigation to being clicked
        pageArray[startOfArray].css({"color" : "darkblue"});
        pageArray[startOfArray].css({"cursor" : "auto"});

        //Getting the html of the page that is selected then storing the page in the web browsers history
        $.get("http://tuqiri.net" + pageArray[startOfArray].attr('href'), function(data) {
            $(".navChange").html($(data).find(".navChange").html());
        });
        history.pushState({}, pageArray[startOfArray].attr('id'), pageArray[startOfArray].attr('href'));

    });

    History.Adapter.bind(window,'statechange',function() {
        var State = History.getState();

        $.get(State.url, function(data) {
            $(".navChange").html($(data).find(".navChange").html());
        });

        pageArray.shift();
        startOfArray = startOfArray - 1;
    });

});


