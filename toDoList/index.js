const inputValue = document.querySelector(".inputListValue");
const listElement = document.querySelector(".listValues");
inputValue.focus()

var toDoListItems = [];
const getLocalStorage = ()=>{
    return JSON.parse(window.localStorage.getItem("key"))
}
const addToLocalStorage = (value)=>{
    return window.localStorage.setItem("key",JSON.stringify(value));
}

const handleClick = ()=>{
    console.log(inputValue.value)
    toDoListItems= getLocalStorage()
    if(inputValue.value && !toDoListItems.includes(inputValue.value) ){
        toDoListItems.push(inputValue.value);
        addToLocalStorage(toDoListItems);
        const liElement = document.createElement("li");
        liElement.innerText = inputValue.value.toUpperCase();
        
        listElement.appendChild(liElement);
        inputValue.value ="";
        alert("item added")
        inputValue.focus();
    }else{
        alert(`input field is  empty or item already existed`)
        inputValue.value=""
        inputValue.focus()
    }
}
document.querySelector(".btn").addEventListener("click",()=>{
    handleClick()
})