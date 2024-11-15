var toDoLists = document.querySelector(".lists")
var toDoList = document.querySelector(".inputItem")

var toDoListItems = []
const addToLocalStorage = (value)=>{
  return  localStorage.setItem("key",JSON.stringify(value))
}
const getToDoListItems = ()=>{
   return JSON.parse(localStorage.getItem("key")) || []
}
console.log(getToDoListItems())


const showToDoList = ()=>{
    toDoListItems= getToDoListItems()
    if(toDoListItems.length!==0){
        var para = document.createElement("p")
        para.innerText = "Previous search"
        toDoLists.appendChild(para)
        toDoListItems.map((item)=>{
          var liElement = document.createElement("li");
          liElement.innerText = item;
          toDoLists.appendChild(liElement);
        })
    }
}

const handleClick= ()=>{
    console.log("click event is trigreed")
    let inputValue = toDoList.value.trim()
    toDoListItems= getToDoListItems()
    
    if(inputValue, !toDoListItems.includes(inputValue)){
        toDoListItems.unshift(inputValue)
        addToLocalStorage(toDoListItems)
        
        let liElement = document.createElement("li")
        liElement.innerText = inputValue
        toDoLists.appendChild(liElement)
        
    }
    toDoList.value=""
}
document.querySelector(".btn").addEventListener("click",()=>{
    handleClick()
})
showToDoList()