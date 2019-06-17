

//document is ready :)
$(function() {
    
    //links for portfolio page (should get moved to a data file and loaded seperately)
    var links =
    [
        ["https://leavinit.github.io/GIFYouAKnuckleSammy", "Giphy.com API demo","./assets/images/GIFYouAKnuckleSammy.png"],
        ["https://leavinit.github.io/WordGuessGame", "Word Guess Game","./assets/images/WordGuessGame.png"],
        ["https://leavinit.github.io/unit-4-game", "StarWars Game","./assets/images/StarWarsRPG.png"],
        ["https://leavinit.github.io/TriviaGame", "Trivia Game","./assets/images/TriviaGame.png"],
        ["https://github.com/leavinit/bamazon", "Bamazon CLI Database Interface demo",
        "<iframe class='image-fluid img-thumbnail' src='https://drive.google.com/file/d/1FcI4E_1oB2x9iTKMIUmAWhG1dSYJI1AO/preview' style='width:100%;height:auto;'></iframe>"],
        ["https://github.com/leavinit/burger#burger-app-", "Burger App"],
    ]
    for (var i=0; i< links.length; i++){
        console.log(links[i][0]);
        console.log(links[i][1]);
        newLink = 
        "<a href=" + links[i][0] + "><li class='projectLink list-group-item'><div id='link"+i +"' class='projectLinkDiv'>"+links[i][1]+"</div></li></a>";
        console.log(newLink);
        $("#projectLinks").append(newLink);

        //check file extension/or if its just embedded code
        if(links[i][2] && links[i][2].split('.').pop() == "png"){
            imgLink = "<img  class='image-fluid img-thumbnail exImage' src="+(links[i][2])+" alt='screenshot'>";
            console.log(imgLink);
            // newLink =$(newLink);
            $("#link"+i).after(imgLink);
        //embedded code
        }else{
            if(links[i][2]){
                $("#link"+i).after(links[i][2]);
            }
            
        } //else do nothing (no entry in array)
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




//Sticky header code (from w3schools)
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("nav1");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.marginTop = "0em";
    header.style.zIndex = "1000";   
  } else {
    header.classList.remove("sticky");
    // header.style.paddingTop = ".75em";
  }
}
