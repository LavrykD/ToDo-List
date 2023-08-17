const formItem = document.querySelector(".todo-form");
const toDoMain = document.querySelector(".todo-main");

formItem.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = formItem.elements.todoItem;
    if (todoText.value) {
        addToDoItem(todoText.value);
    } else {
        showCustomAlert("Please write TODO before adding");
    }

    todoText.value = "";
})

function addToDoItem(text) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");

    const checkboxItem = document.createElement("div");
    checkboxItem.setAttribute("name", "checkbox");
    checkboxItem.classList.add("checkbox");

    const itemText = document.createElement("p");
    itemText.setAttribute("name", "itemText");
    itemText.classList.add("item-text");
    itemText.innerText = text

    const trash = document.createElement("i");
    trash.setAttribute("name", "trash");
    trash.classList.add("fa-solid", "fa-trash", "hidden");

    listItem.append(checkboxItem, itemText, trash);

    toDoMain.append(listItem);
}

toDoMain.addEventListener("click", (e) => {
    if (e.target.classList.contains("list-item")) {
        const checkbox = e.target.children.checkbox;
        const itemText = e.target.children.itemText;
        const trash = e.target.children.trash;

        checkbox.classList.toggle("checked");
        itemText.classList.toggle("crossed");
        trash.classList.toggle("hidden");
    } else {
        const checkbox = e.target.parentElement.children.checkbox;
        const itemText = e.target.parentElement.children.itemText;
        const trash = e.target.parentElement.children.trash;

        checkbox.classList.toggle("checked");
        itemText.classList.toggle("crossed");
        trash.classList.toggle("hidden");
    }

    if (e.target.classList.contains("fa-trash")) {
        if (confirm("Do you really want to delete this record?")) {
            e.target.parentElement.parentElement
                .removeChild(e.target.parentElement);
        }
    }
})

function showCustomAlert(message) {
    const alertElement = document.querySelector("#custom-alert");
    const messageElement = document.querySelector("#custom-alert-message");

    messageElement.textContent = message;
    alertElement.style.display = "flex";

    const okayButton = document.querySelector("#custom-alert-okay");
    okayButton.addEventListener("click", () => {
        alertElement.style.display = "none";
    });
}
