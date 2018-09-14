// Element Create Function
const createElement = (element) => {
    return document.createElement(element);
}

let i;
const todoList = [],
MainList = document.getElementsByClassName("todoList")[0];

// Append Start
    const listing = createElement("ul");
    MainList.appendChild(listing);
    emptyListMsg = createElement("p");
    emptyListMsg.innerHTML = "No Todo Item";
    emptyListMsg.setAttribute("class", "alartMsg");
// Append End

// Add New Item Start
    function addList(){
        const inputTodo = document.getElementsByClassName("typeTodo")[0],
        typeDis = document.getElementsByClassName("typeDis")[0],
        newItem = {
            id: todoList.length,
            task: inputTodo.value,
            taskDetail: typeDis.value
        };
        todoList.push(newItem);
        render();
        inputTodo.value = "";
        typeDis.value = "";
        console.log(todoList)
    };
// Add New Item End

// Map Function Start
    const render = () => {
        listing.innerHTML = "";
        if(todoList == ""){
            listing.insertBefore(emptyListMsg, listing.firstChild).innerHTML;    
        }else{
            emptyListMsg.remove()
        }
        todoList.map((items, index) => {
            let taskItem = createElement("li");
            let taskTitle = createElement("h2");
            let taskDetail = createElement("p");
            listing.appendChild(taskItem);
            taskItem.insertBefore(taskDetail, taskItem.firstChild).innerHTML = items.taskDetail;
            taskItem.insertBefore(taskTitle, taskItem.firstChild).innerHTML = items.task;
        })
    };
    render();
// Map Function End

// let link = createElement("a");
// link.setAttribute("href", "#id="+items.id);

// link.addEventListener("click", clickPoint, false);

// if(items.status){
// 	taskpoint.classList.add("complete")
// }

// True and False Start
	// const updateTodoList = (id) => {
	// 	todoList.map((item) => {
	// 		if(item.id == id){
	// 			//return item.status = true;
	// 			if(item.status)
	// 				return item.status = false
	// 			else
	// 				return item.status = true
	// 		}
	// 	})
	// 	render()
	// }
// True and False Start

// Click Point TimeOut Start
	// const clickPoint = () => {
	// 	setTimeout(function(){
	// 		const hash = window.location.hash.replace("#id=", "");
	// 		updateTodoList(hash);
	// 	}, 1);
	// }
// Click Point TimeOut Start

// window.todoList = todoList;