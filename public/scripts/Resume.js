
var counter = 0;
var textContentList = [];
var textAreaList = [];
var textBoxList = [];


$("#addSkill").click(addSkills);
$(".editButton").click(editText);
$(".cancelButton").click(cancelEdit);


/*
  display a skilltab sequentially based on a counter,
 there are four additional skill tabs to be added.
*/
function addSkills() {
  counter++;
  if(counter <= 4) {
    var skillID = "#skill" + counter + "Tab";
    $(skillID).css({
      visibility: "visible",
      display: "block"
    });
  } else counter = 0;
}

/*
a function that replaces textboxes with textareas that can be edited

//store the text content  of each individual textboxes in a list
//create corresponding # number of textarea elements based on the list
//add the individual textcontent to each new textarea
//replace all the textboxes with the new textareas
*/
function editText() {
  $(".cancelButton").show();
  $(".editButton").attr("disabled","true");

  //store all textboxes on the page in textBoxList
  textBoxList = $(".editable");

  //transfer text content of each textbox to a list called textContentList
  textBoxList.each(function(index, textBox) {
      textContentList.push($(textBox).text());
  });

  //create the text areas and store in a list called textAreaList
  for (var i = 0; i < textContentList.length; i++) {
    textAreaList.push($("<textarea></textarea>"));
  }

  //transfer every text content in the textContentList to each textArea
  $(textAreaList).each(function(index, textArea) {
    $(textArea).text(textContentList[index]);
  });

  //replace the textboxes with the new textareas
  textBoxList.each(function(index, textBox) {
    if($(textBoxList[index]).is("p")) {
      $(textAreaList[index]).css("width", "100%");
      $(textAreaList[index]).css("height", "300px");
    }
    $(textBox).replaceWith(textAreaList[index]);
  });

}
/*
replace the textareas with the original textboxes
*/
function cancelEdit() {
  $(".editButton").removeAttr("disabled");
  $("textarea").each(function(index, textArea) {
    $(textArea).replaceWith(textBoxList[index]);
  });
}



//test function, proof-of-concept only
// function createTextArea() {
//   var textAreaList = [];
//   var textBoxList = $(".skillParagraph");
//   textAreaList.push($("<textarea> text area 1 </textarea>"));
//   textAreaList.push($("<textarea> text area 2 </textarea>"));
//   textAreaList.push($("<textarea> text area 3 </textarea>"));
//   textAreaList.push($("<textarea> text area 4 </textarea>"));

//   console.log(textAreaList);

//   textBoxList.each(function(index, paragraph) {
//     $(paragraph).replaceWith(textAreaList[index]);
//   });

// }



/* The below functions allow users to remove a skill. */

function removeSkill1(){
  document.getElementById("skill1Tab").style.visibility = "hidden";
  document.getElementById("skill1Tab").style.display = "none";
  document.getElementById("skill1TabContent").style.visibility = "hidden";
}

function removeSkill2(){
  document.getElementById("skill2Tab").style.visibility = "hidden";
  document.getElementById("skill2Tab").style.display = "none";
  document.getElementById("skill2TabContent").style.visibility = "hidden";
}

function removeSkill3(){
  document.getElementById("skill3Tab").style.visibility = "hidden";
  document.getElementById("skill3Tab").style.display = "none";
  document.getElementById("skill3TabContent").style.visibility = "hidden";
}

function removeSkill4(){
  document.getElementById("skill4Tab").style.visibility = "hidden";
  document.getElementById("skill4Tab").style.display = "none";
  document.getElementById("skill4TabContent").style.visibility = "hidden";
}

/* The below functions allow new skills to be added and be visible even after a user has clicked the
"remove skill" buttons. */

function showSkillTab1(){
  document.getElementById("skill1TabContent").style.visibility = "visible";
}

function showSkillTab2(){
  document.getElementById("skill2TabContent").style.visibility = "visible";
}

function showSkillTab3(){
  document.getElementById("skill3TabContent").style.visibility = "visible";
}

function showSkillTab4(){
  document.getElementById("skill4TabContent").style.visibility = "visible";
}
