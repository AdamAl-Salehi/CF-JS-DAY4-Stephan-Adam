/*function test(){
	var select = document.getElementById('select').value;
	console.log(select);
}

document.getElementBId("submit").addEventListener("click", test, false);*/




function buttonPress(){
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var age = document.getElementById("age").value;
	console.log("works");
	document.getElementById("firNam").innerHTML = firstName;
	document.getElementById("lasNam").innerHTML = lastName;
	document.getElementById("ag").innerHTML = age;

	if(firstName.length>5){
		document.getElementById("firNam").style.color = "green";
	} else {
		document.getElementById("firNam").style.color = "red";
	}
}

document.getElementById("submit").addEventListener("click", buttonPress, false);