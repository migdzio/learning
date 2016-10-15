/*
var firstName = document.forms["formValidation"]["firstName"].value;
var lastName = document.forms["formValidation"]["lastName"].value;
var emailVal = document.forms["formValidation"]["email"].value;
var lastName = document.forms["formValidation"]["phoneNumber"].value;

var arr = ["firstName", "lastName", "email", "phoneNumber"];

for(var i = 0; i <= arr.length; i++){
	document.forms["formValidation"][i].value;
}

var onlyLettersAndSpaces = /^[a-zZ-a]{1}[a-ząćśńółęźżĄĘŹŻĆ \.]{0,30}/i;

// Metoda pierwsza - ja jej nie lubię
if (lastName.match(onlyLettersAndSpaces) !== null){

}

// Druga metoda
var testSurname = onlyLettersAndSpaces.test(lastName);

if (testSurname){  // (testSurname) === (testSurname === true)  a   (!testSurname)  ===   (testSurname === false)

}

*/

// Po kliknięciu w "Wyslij" funkcja ma sorawdzić wszystkie pola formularza, jesli się któreś nie zgadza to ramka danego inputa
// musi zostac pogrubiona na czerwono. Jesli wszystko jest OK to wyskakuje alert - "Walidacja przebiegła pomyślnie"
// stronka do regexów - https://regex101.com/ .
// Pokombinuj z przeładowaniem strony po submit

function validate() {
	var wrongEmail = document.forms["formValidation"]["email"].style.border = "1px solid #FF0C02" ;
	var lastName = document.forms["formValidation"]["lastName"].value;
	var emailVal = document.forms["formValidation"]["email"].value;
	var onlyLettersAndSpaces = /^[a-zZ-a]{1}[a-ząćśńółęźżĄĘŹŻĆ \.]{0,30}/i;
	var testSurname = onlyLettersAndSpaces.test(lastName);
	var testEmail = function(){
		if (emailVal !== ""){
			return true
		}else if (emailVal === ""){
			return false
		}
	}

	if(testSurname){
		alert("walidacja przebiegła pomyślnie!!")
	}else if (!testSurname) {
		document.forms["formValidation"]["lastName"].style.border = "1px solid #FF0C02" ;
	}

	(testEmail) ? console.log("ok") : wrongEmail;    // Skrócony if else "?" oznacza co się dzieje gdy warunek w if jest spełniony a ":" oznacza "else".
	/* if (testEmail){
		console.log("ok");
	} else {
		wrongEmail;
	}

	*/
}

// jQuery

function validateJQuery() {

}

/*
 napisz więcej inputów,
 umieść checkbox
 umieść input 'select' - dla kosztów wysylki
 Zrobić walidację w JS lub jquery; zrobić ją za pomocą forów lub while
 *Dodaj recaptche i zwalidują ją i zaimplementuj w PHP
 */