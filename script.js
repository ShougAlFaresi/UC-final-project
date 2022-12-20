

var main = function () {
    "use strict";
     var $count= 4;
     var $Cmnt = " no of notes: "
     

   
 
    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
        incrementCount();

    });
document.getElementById("count").innerHTML = $Cmnt + $count;
    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    var incrementCount = function (){
        $count++;
        document.getElementById("count").innerHTML = $Cmnt + $count ;
}

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
            incrementCount();

        }
    });
};

$(document).ready(main);

