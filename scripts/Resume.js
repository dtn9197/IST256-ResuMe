
var counter = 0;

//event handler for add skill button
$("#addSkill").click(addSkills);

/*
  display a skilltab sequentially based on a counter,
 there are four additional skill tabs to be added.
*/
function addSkills() {
  counter++;
  if(counter <= 4) {
    var skillID = "#skill" + counter + "Tab";
    $(skillID).css("visibility", "visible");
    $(skillID).css("display", "block");
  } else counter = 0;
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
