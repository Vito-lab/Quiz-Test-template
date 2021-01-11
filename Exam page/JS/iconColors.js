// show green / red / orange icon depending on Test answer
function showIconRightOrWrongTest() {
    showIconRightOrWrongQ1();
    showIconRightOrWrongQ2();
    showIconRightOrWrongQ3();
    showIconRightOrWrongQ4();
    showIconRightOrWrongQ5();
}

function showIconRightOrWrongQ1() {
    if (option1_R1.checked === true) {
        answerColorInIconQ1.style.backgroundColor ="green";
    }
    else {
        answerColorInIconQ1.style.backgroundColor ="red";
    }
}

function showIconRightOrWrongQ2() {
    if (option2_R1.checked === true) {
        answerColorInIconQ2.style.backgroundColor ="green";
    }
    else {
        answerColorInIconQ2.style.backgroundColor ="red";
    }
}

function showIconRightOrWrongQ3() {
    if (option3_R1.checked === true) {
        answerColorInIconQ3.style.backgroundColor ="green";
    }
    else {
        answerColorInIconQ3.style.backgroundColor ="red";
    }
}

function showIconRightOrWrongQ4() {
    if (option4_R1.checked === true) {
        answerColorInIconQ4.style.backgroundColor ="green";
    }
    else {
        answerColorInIconQ4.style.backgroundColor ="red";
    }
}

function showIconRightOrWrongQ5() {
    if (option5_R1.checked && option5_R2.checked == true && option5_W1.checked == false && option5_W2.checked == false) {
        answerColorInIconQ5.style.backgroundColor ="green";
    }
    else if (option5_R1.checked == false && option5_R2.checked == false) {
        answerColorInIconQ5.style.backgroundColor ="red";
    }
    else if (option5_R1.checked == false || option5_R2.checked == false) {
        answerColorInIconQ5.style.backgroundColor ="orange";
    }
}




// show black icon if Open answer is filled
function showIconRightOrWrongOpen() {
    showIconRightOrWrongQ6();
}

function showIconRightOrWrongQ6() {
    if (answerCheckingInColorQ6.style.display === "block") {
        answerColorInIconQ6.style.backgroundColor = "black";
    }
}




// show icon if checked when answer is checked / selected / filled
function showIconIfChecked() {
    showIconIfCheckedQ1();
    showIconIfCheckedQ2();
    showIconIfCheckedQ3();
    showIconIfCheckedQ4();
    showIconIfCheckedQ5();
}




function showIconIfCheckedQ1() {
    var mark = document.getElementsByTagName('input');
    for (var i=0; i<mark.length; i++) {
        if (mark[i].name=="option1" && mark[i].checked==true) {
            answerCheckingInColorQ1.style.display = "block";
        }
    }
}

function showIconIfCheckedQ2() {
    var mark = document.getElementsByTagName('input');
    for (var i=0; i<mark.length; i++) {
        if (mark[i].name=="option2" && mark[i].checked==true) {
            answerCheckingInColorQ2.style.display = "block";
        }
    }
}

function showIconIfCheckedQ3() {
    var mark = document.getElementsByTagName('input');
    for (var i=0; i<mark.length; i++) {
        if (mark[i].name=="option3" && mark[i].checked==true) {
            answerCheckingInColorQ3.style.display = "block";
        }
    }
}

function showIconIfCheckedQ4() {
    var mark = document.getElementsByTagName('input');
    for (var i=0; i<mark.length; i++) {
        if (mark[i].name=="option4" && mark[i].checked==true) {
            answerCheckingInColorQ4.style.display = "block";
        }
    }
}

function showIconIfCheckedQ5() {
    var mark = document.getElementsByTagName('input');
    for (var i=0; i<mark.length; i++) {
        if (mark[i].name=="option5" && mark[i].checked==true) {
            answerCheckingInColorQ5.style.display = "block";
            break;
        }
        else {
            answerCheckingInColorQ5.style.display = "none";
        }
    }
}

function showIconIfCheckedQ6() {
    if (textField.value !== "") {
        answerCheckingInColorQ6.style.display = "block";
    }
    else if (list1_1.selectedIndex > 0) {
        answerCheckingInColorQ6.style.display = "block";
    }
    else if (textFieldComment.value !== "") {
        answerCheckingInColorQ6.style.display = "block";
    }
    else {
        answerCheckingInColorQ6.style.display = "none";
    }
}