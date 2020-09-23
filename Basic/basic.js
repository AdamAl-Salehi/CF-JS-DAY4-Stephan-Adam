/*function test(){
	var select = document.getElementById('select').value;
	console.log(select);
}

document.getElementBId("submit").addEventListener("click", test, false);*/




function buttonPress(){
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var age = document.getElementById("age").value;
	var select = document.getElementById("select").value;
	document.getElementById("firNam").innerHTML = firstName;
	document.getElementById("lasNam").innerHTML = lastName;
	document.getElementById("ag").innerHTML = age;
	document.getElementById("slct").innerHTML = select;

	if(firstName.length>5){
		document.getElementById("firNam").style.color = "green";
	} else {
		document.getElementById("firNam").style.color = "red";
	}

	if(select == "IT"){
		document.getElementById("container").style.backgroundColor = "purple";
	} else if (select == "Hospitality"){
		document.getElementById("container").style.backgroundColor = "yellow";
	} else {
		document.getElementById("container").style.backgroundColor = "blue";
	}
}

document.getElementById("submit").addEventListener("click", buttonPress, false);