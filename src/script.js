//$(document).ready(function () {
    /*$(".answer").hide()

   /* $(".question").click(function(){
        $(".answer").toggle();
   });



});*/






//const faq = document.querySelector('question')

//faq.addEventListener('click')

let questionClick = document.getElementsByClassName("question");
let displayAnswer = document.getElementsByClassName("answer");
let arrowChange = document.getElementsByClassName("arrow-icon");

showHideContent();

function showHideContent() {
     for (let i = 0; i < questionClick.length; i++) {
          questionClick[i].addEventListener("click", function() {
               if (displayAnswer[i].style.display === "block") {
                    displayAnswer[i].style.display = "none";
                    removeClass(i);
                    return;
               }
               for (let j = 0; j < displayAnswer.length; j++) {
                    displayAnswer[j].style.display = "none";
                    removeClass(j);
               }
               if (displayAnswer[i].style.display === "none") {
                    addClass(i);
                    displayAnswer[i].style.display = "block";
               }
          })
     }
}