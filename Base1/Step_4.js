var person = prompt("Please enter your name");
var surname = prompt("Please enter your surname");
var city = prompt("Where do you live?");


if (person == null || person == "") {
    alert("User cancelled the prompt.");
} else {
    alert("Hello " + person + " " + surname + " from " + city + "!");
}

