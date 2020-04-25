

var counter = 0;
var textContentList = [];
var textAreaList = [];
var textBoxList = [];
var modalCard = $("#templateCard").clone();

$(document).ready(function() {
    $("#addSkill").click(addSkills);
    $(".editButton").click(editText);
    $(".cancelButton").click(cancelEdit);
    $("#homepageSaveButton").click(sendData);

    //posible login
    $("#signUpSubmit").click(signUpValidation);
    // $("#loginSubmit").click(loginValidation);

    $(".modalAddButton").click(function() {
      $(".modalItemContainer").toggle();
    });
    $(".cancelModalButton").click(function() {
      $(".modalItemContainer").toggle();
    });

    $(".addModalItemButton").click(addItem);
    $("#educationSaveButton").click(sendDataEducation);

    $("#testButtonPost").click(testButtonPost);
    $("#testButtonGet").click(testButtonGet);
    $("#skillsSaveButton").click(sendDataSkills);
    $("#extrasSaveButton").click(sendDataExtras);


});

function domTest() {
  var textBoxes = $("textarea");
  $(textBoxes).each(function(index, textbox) {
    console.log(textbox);
  });
}




/* 
  resume-related scripts BEGIN
 */

/*
  this method takes a user input and add an item into the accordion
*/
function addItem(event) {
  var inputFieldData = event.target.previousElementSibling.value;
  if(inputFieldData !=="") {
    // newElement = $(".accordion:first").clone();
    var modalAccordion = $(event.target).parent().siblings(".modal-body").find(".accordion:first");
    // var newElement = modalAccordion.children(".card:first").clone();
    var newElement = modalCard.clone();
    var buttonElement = newElement.find("button:first");
    buttonElement.html(inputFieldData);
    var deleteButton = newElement.find("button.deleteItemButton");
    deleteButton.click(deleteItem);
    $(modalAccordion).append(newElement);
  } else {
    window.alert("field cannot be empty");
  }

  $(".addResponsibilityButton").click(function() {
    $(".addResponsibilityContainer").toggle();
  });
  $(".cancelResponsibilityButton").click(function() {
    $(".addResponsibilityContainer").toggle();
  });

  $(".addBulletPointButton").click(addBulletPoint);

}

function addBulletPoint(event) {
  var description = $(event.target).siblings("input").val();
  var newBulletPoint = $("<li></li>");
  newBulletPoint.html(description);
  //add eventlistener

  var list = $(event.target).parent().siblings("ul");
  list.append(newBulletPoint);

}

function deleteItem(event) {
  // console.log("clicked");
  // var deleteButton = event.target;
  // $(deleteButton).parentsUntil(".modal-body").remove();

  var deleteButton = event.target;
  console.log($(deleteButton).parentsUntil(".accordion").length);
  $(deleteButton).parentsUntil(".accordion").remove();
}

/*
resume related scripts END
*/



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
  $(".saveButton").show();
  $(".editButton").attr("disabled","true");
  

  //store all textboxes on the page in textBoxList
   textBoxList = $(".editable");
  
  
   //create the text areas and store in a list called textAreaList
   for (var i = 0; i < textBoxList.length; i++) {
    textAreaList.push($("<textarea></textarea>"));
  }

  //transfer text content of each textbox to a list called textContentList
  textBoxList.each(function(index, textBox) {
      textContentList.push($(textBox).text());
  });

for (var i = 0; i < textBoxList.length;i++) {
  $(textAreaList[i]).attr("id", $(textBoxList[i]).attr("id"));
  $(textAreaList[i]).text($(textBoxList[i]).text());
}


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
  $(".cancelButton").hide();
  $(".saveButton").hide();
}

/*
create an array
store all textboxes as dom
//call ajax post request
  //attach text inside ajax body to server


*/
function sendData() {
    var textBoxes = $("textarea");
    var aboutMeContent = $(textBoxes[0]).val();
    //need a way to access by textbox val by id
    //jquery filter
    $.ajax({
      type: "post",
      url: "http://localhost:3000/homepage",
      //headers property will be accessible in the route
      headers: {
          "Some-header": "Some-header-value"
      },
      data: {
          aboutMeContent: aboutMeContent
      },
      success: function(data) {
          // console.log(data);
          // saveContent(data);
          location.reload();
      }
  });

}

function sendDataSkills() {
  var textBoxes = $("textarea");
  // $(textBoxes).each(function(index, textBox) {
  //   var textBoxId = $(textBox).attr("id");
  //   $(textBox).text($(textBoxes).filter(textBoxId).text());
  // });
  
  var dataArray = [
    {
      skill: $(textBoxes).filter("#skill1Tab").val(),
      skillDescription: $(textBoxes).filter("#skill1Description").val()
    },
    {
      skill: $(textBoxes).filter("#skill2Tab").val(),
      skillDescription: $(textBoxes).filter("#skill2Description").val()
    },
    {
      skill: $(textBoxes).filter("#skill3Tab").val(),
      skillDescription: $(textBoxes).filter("#skill3Description").val()
    },
    {
      skill: $(textBoxes).filter("#skill4Tab").val(),
      skillDescription: $(textBoxes).filter("#skill4Description").val()
    },
    {
      skill: $(textBoxes).filter("#skill5Tab").val(),
      skillDescription: $(textBoxes).filter("#skill5Description").val()
    },
    {
      skill: $(textBoxes).filter("#skill6Tab").val(),
      skillDescription: $(textBoxes).filter("#skill6Description").val()
    },
    {
      skill: $(textBoxes).filter("#skill7Tab").val(),
      skillDescription: $(textBoxes).filter("#skill7Description").val()
    },
    {
      skill: $(textBoxes).filter("#skill8Tab").val(),
      skillDescription: $(textBoxes).filter("#skill8Description").val()
    }
];

console.log(dataArray);
$.ajax({
  type: "post",
  //use relative
  url: "/skills",
  //headers property will be accessible in the route
  // contentType: 'application/json',
  data: {
    skillsData: JSON.stringify(dataArray)
  },
  success: function(data) {
      console.log(data);
      // saveContent(data);
      location.reload();
  }
});
}

function sendDataExtras() {
  console.log("send extras function run");
  var textBoxes = $(".editable");
  console.log(textBoxes);
  console.log(textBoxes);
  console.log(textBoxes);
  console.log(textBoxes);
  console.log("hi");
}



function sendDataEducation() {
  var textBoxes = $("textarea");
  var dataObject = {
    schoolTitle: $(textBoxes).filter("#schoolTitle").val(),
    aboutSchool: $(textBoxes).filter("#aboutSchool").val(),
    major: $(textBoxes).filter("#major").val(),
    minor: $(textBoxes).filter("#minor").val(),
    undergraduate: $(textBoxes).filter("#undergraduate").val(),
    graduate: $(textBoxes).filter("#graduate").val(),
  }
  console.log(dataObject);

  
  
  $.ajax({
    type: "post",
    //use relative
    url: "/education",
    //headers property will be accessible in the route
    // contentType: 'application/json',
    data: {
      educationData: JSON.stringify(dataObject)
    },
    // data: dataObject,
    // processData: false,
    success: function(data) {
        console.log(data);
        //turn content aback into text box and save
        // saveContent(data);
        location.reload();
    }
});

}


/*
  //store all textboxes in array as dom nodes
  //for each dom node
    //store text content based on id
*/
function saveContent(pageData) {
  textBoxList.each(function(index, textBox) {
    $(textBox).text(pageData[textBox.id]);
    console.log($(textBox).text());
  });
  $("textarea").each(function(index, textArea) {
    $(textArea).replaceWith(textBoxList[index]);
  });

  $(".saveButton").hide();
  $(".editButton").removeAttr("disabled");
  $(".cancelButton").hide();

}

function testButtonPost() {
  console.log("testButtonPost ran")
  $.ajax({
    type: "post",
    url: "http://localhost:3000/ejs",
    //headers property will be accessible in the route
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        // saveContent(data);
        // location.reload();
    }
});
  
}
function testButtonGet() {
  console.log("testButtonGet ran")
  $.ajax({
    type: "get",
    url: "http://localhost:3000/ejs",
    //headers property will be accessible in the route
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        // saveContent(data);
        // location.reload();
    }
});
  
}



/* The below functions allow users to remove a skill. */

// function removeSkill1(){
//   document.getElementById("skill1Tab").style.visibility = "hidden";
//   document.getElementById("skill1Tab").style.display = "none";
//   document.getElementById("skill1TabContent").style.visibility = "hidden";
// }

// function removeSkill2(){
//   document.getElementById("skill2Tab").style.visibility = "hidden";
//   document.getElementById("skill2Tab").style.display = "none";
//   document.getElementById("skill2TabContent").style.visibility = "hidden";
// }

// function removeSkill3(){
//   document.getElementById("skill3Tab").style.visibility = "hidden";
//   document.getElementById("skill3Tab").style.display = "none";
//   document.getElementById("skill3TabContent").style.visibility = "hidden";
// }

// function removeSkill4(){
//   document.getElementById("skill4Tab").style.visibility = "hidden";
//   document.getElementById("skill4Tab").style.display = "none";
//   document.getElementById("skill4TabContent").style.visibility = "hidden";
// }

/* The below functions allow new skills to be added and be visible even after a user has clicked the
"remove skill" buttons. */

// function showSkillTab1(){
//   document.getElementById("skill1TabContent").style.visibility = "visible";
// }

// function showSkillTab2(){
//   document.getElementById("skill2TabContent").style.visibility = "visible";
// }

// function showSkillTab3(){
//   document.getElementById("skill3TabContent").style.visibility = "visible";
// }

// function showSkillTab4(){
//   document.getElementById("skill4TabContent").style.visibility = "visible";
// }

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})


//possible login

function signUpValidation(){
  // e.preventDefault();
  var userId = $("#signUpButton").val();
  console.log("userName is " + userId);
  $.ajax({
    type:"post",
    url: "http://localhost:3000/createAccount",
    data: {
      userName: userId
    },
    success: function(data) {
      console.log(data);
    },
    error: function(data) {
      // console.log("an error ocurred:" + data.error);

    }

  });
}

// function loginValidation() {
//   // e.preventDefault();
//   var userId = $("#loginButton").val();
//   console.log("userName is " + userId);
//   $.ajax({
//     type:"post",
//     url: "http://localhost:3000/createAccount",
//     data: {
//       userName: userId
//     }
//     // success: function(data) {
//     //   console.log(data);
//     //     //another get ajax here??
//     //     // var urlString = "http://localhost:3000/" + userId +"/homepage";
//     //     // console.log(urlString);
//     //     // $.ajax({
//     //     //   type:"get",
//     //     //   url: urlString,
//     //     //   success: function(data) {
//     //     //     $("html").html(data);
//     //     //   }
//     //     // });
  
//     // },
//     // error: function(data) {
//     //   console.log("an error ocurred:" + data.error);

//     // }

//   });

// }
