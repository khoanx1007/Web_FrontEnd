var fullName 		= document.getElementById('fullName');
var email  			= document.getElementById('Mail');
var phoneBumber 	= document.getElementById('Phone');
var password 		= document.getElementById('Pass');
var confirmPassword = document.getElementById('passConf');
var login			 = document.getElementById('Reg');

fullName.addEventListener('blur', checkNameBlur);
fullName.addEventListener('focus', checkNameForcus);

email.addEventListener('blur', checkMailBlur);
email.addEventListener('focus', checkMailForcus);

phoneBumber.addEventListener('blur', checkPhoneBlur);
phoneBumber.addEventListener('focus', checkPhoneForcus);

password.addEventListener('blur', checkPassBlur);
password.addEventListener('focus', checkPassForcus);

confirmPassword.addEventListener('blur', checkConfirmPassBlur);
confirmPassword.addEventListener('focus', checkConfirmPassForcus);
function showError(key,mess){
	document.getElementById(key+'_error').innerHTML=mess;
}
function checkNameBlur() {
	if(fullName.value.length < 8) {
		fullName.style.border="1px solid red";
		document.getElementsByTagName('i')[0].style.display="block";

		document.getElementsByTagName('p')[0].style.display="block";
		return false;
	}else {
		document.getElementById('fullName').style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[0].style.display="none";
		document.getElementsByTagName('p')[0].style.display="none";
		return true;
	}
}

function checkNameForcus() {
	fullName.style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[0].style.display="none";
	document.getElementsByTagName('p')[0].style.display="none";
}

function checkMailBlur() {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(email.value == "" || !filter.test(email.value)) {
		document.getElementById('Mail').style.border="1px solid red";
		document.getElementsByTagName('i')[1].style.display="block";
		document.getElementsByTagName('p')[1].style.display="block";
		return false;
		}
	else {
		document.getElementById('Mail').style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[1].style.display="none";
		document.getElementsByTagName('p')[1].style.display="none";
		return true;
	}
}


function checkMailForcus() {
	document.getElementById('Mail').style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[1].style.display="none";
	document.getElementsByTagName('p')[1].style.display="none";
}

function checkPhoneBlur() {
	var filter = /[0-9]/;

	if(phoneBumber.value == "" || !filter.test(phoneBumber.value)) {
		phoneBumber.style.border="1px solid red";
		document.getElementsByTagName('i')[2].style.display="block";
		document.getElementsByTagName('p')[2].style.display="block";
		return false;
	}else {
		phoneBumber.style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[2].style.display="none";
		return true;
	}
}

function checkPhoneForcus() {
	document.getElementById('Phone').style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[2].style.display="none";
	document.getElementsByTagName('p')[2].style.display="none";
}

function checkPassBlur() {
	if(password.value == '' || password.value.length < 6) {
		password.style.border="1px solid red";
		document.getElementsByTagName('i')[3].style.display="block";
		document.getElementsByTagName('p')[3].style.display="block";
		return false;

	}else {
		password.style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[3].style.display="none";
		return true;
	}
}

function checkPassForcus() {
	document.getElementById('Pass').style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[3].style.display="none";
	document.getElementsByTagName('p')[3].style.display="none";
}

function checkConfirmPassBlur() {
	if(confirmPassword.value != password.value) {
		confirmPassword.style.border="1px solid red";
		document.getElementsByTagName('i')[4].style.display="block";
		document.getElementsByTagName('p')[4].style.display="block";
		return false;
	}else {
		confirmPassword.style.border="1px solid #dde3ec";
		document.getElementsByTagName('i')[4].style.display="none";
		return true;
	}
}

function checkConfirmPassForcus() {
	document.getElementById('passConf').style.border="1px solid #dde3ec";
	document.getElementsByTagName('i')[4].style.display="none";
	document.querySelectorAll('.box_row p')[4].style.display="none";
}
function success(){
	if(checkNameBlur()&&checkMailBlur()&&checkPhoneBlur()&&checkPassBlur()&&checkConfirmPassBlur())
		alert("Success");
	else
	{
		document.getElementsByTagName('i')[1].style.display="block";
		document.getElementsByTagName('p')[1].style.display="block";
		document.getElementsByTagName('i')[2].style.display="block";
		document.getElementsByTagName('p')[2].style.display="block";
		document.getElementsByTagName('i')[3].style.display="block";
		document.getElementsByTagName('p')[3].style.display="block";
		document.getElementsByTagName('i')[4].style.display="block";
		document.getElementsByTagName('p')[4].style.display="block";
	}	
}
