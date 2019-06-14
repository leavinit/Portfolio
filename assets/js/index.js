

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
        newLink = "<li><div class='projectLink'><a href=" + links[i][0] + ">"+links[i][1]+"</a></li></div>";
        console.log(newLink);
        
        $("#projectLinks").append(newLink);
        
    }
});
