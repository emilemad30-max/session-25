let input= document.getElementById("in")
let add = document.getElementById("Add")
let ol = document.getElementById("list")
// let UP = document.createElement("button")
add.addEventListener("click",function(){
    let text= input.value
if(text !==""){
    let task = document.createElement('li')
    task.textContent = text

    ol.appendChild(task)
    input.value = ""

    let UP = document.createElement("button")
    UP.textContent="Update"
    UP.addEventListener("click",function(){
    let pro= prompt("Enter Update:",task.textContent)    
    if(pro !==null){
    task.textContent= pro
    }
    })  
    // task.style.width="380px"
    task.style.background="cornflowerblue"
    task.style.color="black"
    task.style.paddingBottom="20px"
    UP.style.marginLeft="20px"

    let remo = document.createElement("button")
    remo.textContent="remove"
    remo.addEventListener("click",function(){
    task.remove()
    }) 
    task.appendChild(UP)
    task.appendChild(remo)
}
})
