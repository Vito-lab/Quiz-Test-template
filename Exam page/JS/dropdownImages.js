function list1Option0Images() {
    //remove list1 images
    hiddenDropdownImage1.style.display = "none";
    
    // remove other previously opened images from view
    hiddenDropdownImage2List2.style.display = "none";
    hiddenDropdownImage3List3.style.display = "none";
    hiddenDropdownImage4List4.style.display = "none";
    hiddenDropdownImage5List5.style.display = "none";
    hiddenDropdownImage6List6.style.display = "none";
    hiddenDropdownImage7List7.style.display = "none";
    hiddenDropdownImage8List8.style.display = "none";
}

function list1OptionAImages() {
    hiddenDropdownImage1.style.display = "block";

    // remove other previously opened images from view
    hiddenDropdownImage7List7.style.display = "none";
    hiddenDropdownImage8List8.style.display = "none";
}

function list1OptionBImages() {
    hiddenDropdownImage1.style.display = "block";

    // remove other previously opened images from view
    hiddenDropdownImage2List2.style.display = "none";
    hiddenDropdownImage3List3.style.display = "none";
    hiddenDropdownImage4List4.style.display = "none";
    hiddenDropdownImage5List5.style.display = "none";
    hiddenDropdownImage6List6.style.display = "none";
    hiddenDropdownImage8List8.style.display = "none";
}

function list1OptionCImages() {
    hiddenDropdownImage1.style.display = "block";
    
    // remove other previously opened images from view
    hiddenDropdownImage2List2.style.display = "none";
    hiddenDropdownImage3List3.style.display = "none";
    hiddenDropdownImage4List4.style.display = "none";
    hiddenDropdownImage5List5.style.display = "none";
    hiddenDropdownImage6List6.style.display = "none";
    hiddenDropdownImage7List7.style.display = "none";
}




// fill the same text from the input text to other input text inside image
function fillIntoImage() {
    var name = document.getElementById("textField").value;
    document.getElementById("boxIntoImage").value = name;
}

// get char length and fit the text in input text box inside image
function charFit() {
    var charScore = document.getElementById("textField").value.length;
    if (charScore > 20 && charScore <= 24) {
        boxIntoImage.style.fontFamily = "Calibri";
        boxIntoImage.style.fontWeight = "bold";
        boxIntoImage.style.fontSize = "20px";
        boxIntoImage.style.letterSpacing = "-0.5px";
    }
    else if (charScore > 24 && charScore <= 26) {
        boxIntoImage.style.fontFamily = "impact";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "20px";
        boxIntoImage.style.letterSpacing = "-0.2px";
    }
    else if (charScore > 26 && charScore <= 29) {
        boxIntoImage.style.fontFamily = "impact";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "19px";
        boxIntoImage.style.letterSpacing = "-0.5px";
    }
    else if (charScore > 29 && charScore <= 32) {
        boxIntoImage.style.fontFamily = "impact";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "18px";
        boxIntoImage.style.letterSpacing = "-0.5px";
    }
    else if (charScore > 32 && charScore <= 35) {
        boxIntoImage.style.fontFamily = "Haettenschweiler";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "20px";
        boxIntoImage.style.letterSpacing = "-0.1px";
    }
    else if (charScore > 35 && charScore <= 38) {
        boxIntoImage.style.fontFamily = "Haettenschweiler";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "20px";
        boxIntoImage.style.letterSpacing = "-0.6px";
    }
    else if (charScore > 38 && charScore <= 40) {
        boxIntoImage.style.fontFamily = "Haettenschweiler";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "19px";
        boxIntoImage.style.letterSpacing = "-0.7px";
    }
    else if (charScore > 40 && charScore <= 43) {
        boxIntoImage.style.fontFamily = "Haettenschweiler";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "19px";
        boxIntoImage.style.letterSpacing = "-1px";
    }
    else if (charScore > 43 && charScore <= 45) {
        boxIntoImage.style.fontFamily = "Haettenschweiler";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "19px";
        boxIntoImage.style.letterSpacing = "-1.2px";
    }
    else if (charScore > 45 && charScore <= 47) {
        boxIntoImage.style.fontFamily = "Haettenschweiler";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "18px";
        boxIntoImage.style.letterSpacing = "-1.1px";
    }
    else if (charScore > 47 && charScore <= 49) {
        boxIntoImage.style.fontFamily = "Haettenschweiler";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "18px";
        boxIntoImage.style.letterSpacing = "-1.3px";
    }
    else if (charScore > 49) {
        boxIntoImage.style.fontFamily = "Haettenschweiler";
        boxIntoImage.style.fontWeight = "500";
        boxIntoImage.style.fontSize = "16.5px";
        boxIntoImage.style.letterSpacing = "-1px";
    }
    else {
        boxIntoImage.style.fontFamily = "Calibri";
        boxIntoImage.style.fontWeight = "bold";
        boxIntoImage.style.fontSize = "20px";
        boxIntoImage.style.letterSpacing = "0px";
    }
}

function closeAllDropdownsAndDeleteComments() {
    textField.value = "";
    list1_1.selectedIndex = [0];
    list2_1.selectedIndex = [0];
    list2_2.selectedIndex = [0];
    list2_3.selectedIndex = [0];
    list2_4.selectedIndex = [0];
    list2_5.selectedIndex = [0];
    list2_6.selectedIndex = [0];
    list2_7.selectedIndex = [0];
    textFieldComment.value = "";

    list1Option0Images();
    list1Option0();
}

function closeAllList2Dropdowns() {
    
    list2_1.selectedIndex = [0];
    list2_2.selectedIndex = [0];
    list2_3.selectedIndex = [0];
    list2_4.selectedIndex = [0];
    list2_5.selectedIndex = [0];
    list2_6.selectedIndex = [0];
    list2_7.selectedIndex = [0];
}

// close only dropdowns when you press List1 option A
function closeList2Dropdowns_A() {
    
    list2_6.selectedIndex = [0];
    list2_7.selectedIndex = [0];
}

// close only dropdowns when you press List1 option B
function closeList2Dropdowns_B() {
    
    list2_1.selectedIndex = [0];
    list2_2.selectedIndex = [0];
    list2_3.selectedIndex = [0];
    list2_4.selectedIndex = [0];
    list2_5.selectedIndex = [0];
    list2_7.selectedIndex = [0];
}

// close only dropdowns when you press List1 option C
function closeList2Dropdowns_C() {
    
    list2_1.selectedIndex = [0];
    list2_2.selectedIndex = [0];
    list2_3.selectedIndex = [0];
    list2_4.selectedIndex = [0];
    list2_5.selectedIndex = [0];
    list2_6.selectedIndex = [0];
}