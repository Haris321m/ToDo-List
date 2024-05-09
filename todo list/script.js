function Add(){

    var input = document.getElementById("input").value;

    var li = document.createElement("li");

    li.textContent = input;

    document.getElementById("list").appendChild(li);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteButton);

    
    document.getElementById("input").value = "";

}



