/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        
        var q1Answer = home(q1Result);
        var q2Answer = breakfast(q2Result);
        var q3Answer = superpower(q3Result);
        
        $(".congratulations").show();
        
    });

});

function home(answer) {
    if(answer === "tidy"){
        return 0;
    }
    else if(answer === "messy"){
        return 2;
    }
    else {
        return 0;
    }
    
}

function breakfast(answer) {
    if(answer === "pancakes"){
        return 1;
    }
    else if(answer === "waffles"){
        return 3;
    }
    else if(answer ==="french toast"){
        return 5;
    }
    else {
        return 0;
    }
    return result;
}

function superpower(answer) {
    var result = 4;
    return result;
}