const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
var notes = document.querySelector(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}
showNotes();


createBtn.addEventListener("click", function(){
    var inputBox = document.createElement("p");
    var img = document.createElement("img")
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "https://cdn4.iconfinder.com/data/icons/office-business-1/512/basket-64.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})