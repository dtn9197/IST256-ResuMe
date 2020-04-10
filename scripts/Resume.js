
var counter = 0;

//event handler for add skill button
$("#addSkill").click(addSkills);

$(".editButton").click(editText);





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
a function that turns p elements into text areas that can be edited

//store each text content of the paragraphs in a list
//create # number of textarea element based on the list
//add the text content to each textarea element in order
//replace the paragraph elements with the new textarea elements
*/
function editText() {
var textContentList = [];
var textAreaList = [];
var paragraphList = $(".editable");

//transfer text and dimensions of each paragrapht to textContentList and attributesList
paragraphList.each(function(index, paragraph) {
    textContentList.push($(paragraph).text());
});
//create the text areas
for (var i = 0; i < textContentList.length; i++) {
  textAreaList.push($("<textarea></textarea>"));
}

//transfer textContentList to textAreaList
$(textAreaList).each(function(index, textArea) {
  $(textArea).text(textContentList[index]);
});


//replace dom elements
paragraphList.each(function(index, paragraph) {
  $(paragraph).replaceWith(textAreaList[index]);
});

}








function createTextArea() {
  var textAreaList = [];
  var paragraphList = $(".skillParagraph");
  textAreaList.push($("<textarea> text area 1 </textarea>"));
  textAreaList.push($("<textarea> text area 2 </textarea>"));
  textAreaList.push($("<textarea> text area 3 </textarea>"));
  textAreaList.push($("<textarea> text area 4 </textarea>"));

  console.log(textAreaList);

  paragraphList.each(function(index, paragraph) {
    $(paragraph).replaceWith(textAreaList[index]);
  });


}



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
