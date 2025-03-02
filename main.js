console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent = `I used the getElementById("node1") method to access this`;
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].textContent = `I used the getElementByClassName("node2") method to access this`;
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++) {
    h3[i].textContent = `I used the getElementByTagName("h3") method to access all of these`;
};

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let paragraph = document.createElement("p");
paragraph.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
document.getElementsByClassName("exercise2")[0].appendChild(paragraph);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let link = document.createElement("a");
link.textContent = "I am a <a> tag";
// BONUS: Add a link href to the <a>  
link.href = "https://bit.ly/3dV6cFr";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
let ex2 = document.getElementsByClassName("exercise2")[0];
ex2.insertBefore(link, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let parent = document.getElementById("exercise-container3");
let oldChild = document.getElementById("N1")
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";
parent.replaceChild(newChild, oldChild);
// TODO: Remove the "New Child Node"
parent.removeChild(newChild);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let unorderedList = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element;
// TODO: Append the new list items to the unordered list element
    console.log(li);
    unorderedList.appendChild(li);
});
console.log(unorderedList);
// TODO: Append the unordered list to the `div#container` under exercise 4 
document.getElementsByClassName("exercise4")[0].appendChild(unorderedList);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

let modalState = 0;

function show() {
    let alertDiv = document.createElement("div");
    alertDiv.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user)";
    alertDiv.classList.add("modal");
    document.body.appendChild(alertDiv);
    
    let xclose = document.createElement("button");
    xclose.textContent = "x";
    xclose.id = "xclose";
    alertDiv.appendChild(xclose);
    modalState = 1;
    let btn = document.querySelector("#xclose");
    btn.addEventListener("click", showHide);
    console.log("show");
}

function hide() {
    document.getElementsByClassName("modal")[0].remove();
    modalState = 0;
    console.log("hide");
}

function showHide() {
    if (modalState == 0) {
        show();
    } else {
        hide();
    }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", showHide);


// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality