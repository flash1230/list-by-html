var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function MarkasDone(){
	this.parentElement.classList.toggle("done");
}
function Removeelement(){
	this.parentElement.remove();
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	let doneButton=document.createElement("button");
	let deleteButton=document.createElement("button");
	doneButton.appendChild(document.createTextNode("Completed"));
	doneButton.classList.add("buttonp");
	deleteButton.appendChild(document.createTextNode("Remove"));
	deleteButton.classList.add("buttonp");
	li.appendChild(doneButton);
	li.appendChild(deleteButton);
	doneButton.addEventListener("click", MarkasDone);
	deleteButton.addEventListener("click", Removeelement);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
