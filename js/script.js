function createNewForm(){

	$(".createNewForm").hide();
	$(".createForm").show();
	$(".generate").show();
}

function generateForm(){

	$(".generate").hide();
	$(".createForm").hide();
	var formID = $(".formID").val();
	var formActionURL = $(".formActionURL").val();
	var parsedHTML = "<br><br><h2>Untitled Form</h2>add elements using buttons from top<br><br><br><form class='untitledForm' id=#"+formID+" action="+formActionURL+"></form>";
	$(".formCanvas").html(parsedHTML);
	$(".formCanvas").show();
	$(".formControls").show();
}

function insertLabel(){

	var x = prompt("Please enter label name");
	var tempHTML = "<label>"+x+"</label><br><br>";
	$(".untitledForm").append(tempHTML);
}

function insertTextField(){

	var x = prompt("Please enter text field name");
	var tempHTML = "<input type='text' name="+x+"><br><br>";
	$(".untitledForm").append(tempHTML);
}

function insertPasswordField(){

	var x = prompt("Please enter password field name");
	var tempHTML = "<input type='password' name="+x+"><br><br>";
	$(".untitledForm").append(tempHTML);
}

function insertSelectOptions(){

	var x = prompt("Please enter select options field name");
	var y = prompt("Please enter number of options");
	var i=0;
	var filler="";
	var data = new Array();
	for(i=0;i<y;i++){

		data[i] = prompt("Please enter option value");

	}
	for(i=0;i<y;i++){

		filler += "<option value="+data[i]+">"+data[i]+"</option>";

	}

	var tempHTML = "<select>"+filler+"</select><br><br>";
	$(".untitledForm").append(tempHTML);
}
function insertRadioButton(){

	var x = prompt("Please enter radio button field name");
	var y = prompt("Please enter number of radio button options");
	var i = 0;
	var tempHTML="";
	var data = new Array();
	for(i=0;i<y;i++){

		data[i] = prompt("Please enter radio button option value");

	}
	for(i=0;i<y;i++){

		tempHTML += "<input type='radio' name="+x+" value="+data[i]+" >"+data[i]+" <br><br/>";

	}
	$(".untitledForm").append(tempHTML);
}
function insertFileField(){

	var x = prompt("Please enter file field name");
	var tempHTML = "<input type='file' name="+x+"><br><br>";
	$(".untitledForm").append(tempHTML);
}
function insertButton(){

	var x = prompt("Please enter button name");
	var tempHTML = "<input type='button' name="+x+" value="+x+"><br><br>";
	$(".untitledForm").append(tempHTML);
}
function insertNumberField(){

	var x = prompt("Please enter number field name");
	var tempHTML = "<input type='number' name="+x+" ><br><br>";
	$(".untitledForm").append(tempHTML);
}
function insertTextArea(){

	var x = prompt("Please enter text area field name");
	var tempHTML = "<textarea name="+x+" ></textarea><br><br>";
	$(".untitledForm").append(tempHTML);
}
function insertOutput(){

	var x = prompt("Please enter output field name");
	var y = prompt("Please first number");
	var z = prompt("Please second number");
	var tempHTML = "<output name="+x+" ></output><br><br>";
	$(".untitledForm").append(tempHTML);
}
function insertDataList(){

	var x = prompt("Please enter data list name");
	var y = prompt("Please enter number of datalist items");
	var i = 0;
	var filler="";
	var data = new Array();
	for(i=0;i<y;i++){

		data[i] = prompt("Please enter datalist item value");

	}
	for(i=0;i<y;i++){

		filler += "<option value="+data[i]+">";

	}

	var tempHTML = "<input list="+x+"><datalist id="+x+">"+filler+"</datalist><br><br>";
	$(".untitledForm").append(tempHTML);

}