document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addItem);

    function addItem() {
        var inputField = document.getElementById("todoInput");
        var inputValue = inputField.value.trim();
        if (inputValue === "") {
            alert("Please enter a task!");
            return;
        }
        var newItem = document.createElement("li");
        newItem.innerHTML = inputValue + " <button class='deleteButton'>Delete</button>";
        document.getElementById("todoList").appendChild(newItem);
        inputField.value = "";
        bindDeleteButtons();
    }

    function bindDeleteButtons() {
        var deleteButtons = document.querySelectorAll(".deleteButton");
        deleteButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                this.parentElement.remove();
            });
        });
    }
});