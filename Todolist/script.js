// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("Click!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");
var deletebtns = document.getElementsByClassName("delete");
var items = document.getElementsByTagName("li");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deletebtns.length; i++){
	deletebtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function lineThrough(event){
	var a=event.target;
	
	if(count==0)
	{
		
	    a.classList.add("done");
	}
	else
	{
		a.classList.toggle("done");
	}
	count++;


}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);


    ul.appendChild(li);
    input.value="";
    

}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);