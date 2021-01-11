function testFinished() {
    disableDropdownsAndComments();
    showIconRightOrWrongOpen();
    showTestQuestions();
    separatingLine2.scrollIntoView({block: "center", behavior: "smooth"});
}

function showTestQuestions() {
    exam1.style.display = "block";
    button1.style.display = "block";
}