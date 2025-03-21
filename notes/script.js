const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes=document.querySelector(".input-box");

function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorge(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

createbtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.jpg";
    notescontainer.appendChild(inputBox).appendChild(img);
})

notescontainer.addEventListener("click", function(e){
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorge();
    }
    else if(e.target.tagName == "p"){
        notes = document.querySelector(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorge();
            }
        })
    }
})