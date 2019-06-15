

//document is ready :)
$(function() {
    
    var links =
    [
        ["https://leavinit.github.io/GIFYouAKnuckleSammy", "Giphy.com API demo"],
        ["https://leavinit.github.io/WordGuessGame", "Word Guess Game"],
        ["https://leavinit.github.io/unit-4-game", "StarWars Game"],
        ["https://leavinit.github.io/TriviaGame", "Trivia Game"],
        ["https://github.com/leavinit/bamazon", "Bamazon CLI Database Interface demo"],
        ["https://github.com/leavinit/burger#burger-app-", "Burger App"],
    ]
    for (var i=0; i< links.length; i++){
        console.log(links[i][0]);
        console.log(links[i][1]);
        newLink = 
        "<a href=" + links[i][0] + "><li class='projectLink list-group-item'><div class='projectLinkDiv'>"+links[i][1]+"</div></li></a>";
        console.log(newLink);
        
        $("#projectLinks").append(newLink);
        
    }
    $("#projectLinks li")
    .hover(
        function(){
            // $(this).css("background","blue").css("color","white");
            $(this).toggleClass("text-light bg-dark");
        },
        function(){
            $(this).toggleClass("text-light bg-dark");
            // $(this).css("background","white").css("color","blue");
        });
});
