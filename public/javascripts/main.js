$(document).ready(function(){
    var mainCanvas = document.getElementById('loading-canvas');
    var p1 = 0;

    var circle = new ProgressCircle({
        canvas: mainCanvas,
        minRadius: 1,
        arcWidth: 400
    });


    circle.addEntry({
        fillColor: 'rgba(0, 50, 255, 1)',
        progressListener: function() {return p1;}
    }).start(1);

    var checkinterval = setInterval(function() {
        $("#loading-container p").html(Math.round(p1 * 100) + "%");
        if(p1 > 1){
            clearInterval(checkinterval);
            $('#canvas-container').hide('slide', {direction: 'right'}, 500, function(){

            });
        }
        else{
            p1 += 0.0025
        }
    }, 1);
});


