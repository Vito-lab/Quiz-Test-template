// get the number of checked questions and compare to expected number
function assess() {
    var mark = document.getElementsByTagName('input');
    var filledQuestion = 0;
    for (var i=0; i<mark.length; i++) {
        if (mark[i].name=="option1" && mark[i].checked==true) {
            filledQuestion = filledQuestion + 1
        }
        else if (mark[i].name=="option2" && mark[i].checked==true) {
            filledQuestion = filledQuestion + 1
        }
        else if (mark[i].name=="option3" && mark[i].checked==true) {
            filledQuestion = filledQuestion + 1
        }
        else if (mark[i].name=="option4" && mark[i].checked==true) {
            filledQuestion = filledQuestion + 1
            break;
        }
    }
    if (filledQuestion == 4) {
        countScore();
        showIconIfChecked();
        markAnswerRightOrWrong();
        showIconRightOrWrongTest();
        showOpenQuestionsAndCloseTestQuestions();
        closeAllDropdownsAndDeleteComments();
        showResult();
        disableInputButtons();
    }
    else (alert("All questions must be checked"))
    
    
    // count grade by looking at correct and incorrect answers
    function countScore() {
        var score=0;
        var option1=document.exam1.option1.value;
        var option2=document.exam1.option2.value;
        var option3=document.exam1.option3.value;
        var option4=document.exam1.option4.value;
        
        // this radio looks at value, but can look also look at id
        if (option1=="right") {
            score++
        }
        
        if (option2=="right") {
            score++
        }
        
        if (option3=="right") {
            score++
        }
        
        if (option4=="right") {
            score++
        }
        
        // checkbox looks at id
        if (option5_R1.checked===true) {score += 0.5}
        if (option5_R2.checked===true) {score += 0.5}
        if (option5_W1.checked===true) {score -= 0.5}
        if (option5_W2.checked===true) {score -= 0.5}
        
        // no negative score
        if (score <= 0) {score = 0}
        // exam1.style.display="none";
        result.textContent=`${score + "/5"}`;
    }
    
    function showOpenQuestionsAndCloseTestQuestions() {
        separatingLine2.style.display = "block";
        exam2.style.display = "block";
        button2.style.display ="block";
        exam1.style.display = "none";
        button1.style.display = "none";
    }
    function showResult() {
        result.style.display = 'inline-block';
        result.scrollIntoView({block: "center", behavior: "smooth"});
    }
}
