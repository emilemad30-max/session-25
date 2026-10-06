let register=document.getElementById("register")
if(register){
register.addEventListener("submit",function(e){
    e.preventDefault()

    let fullName=document.getElementById("namee")
    let email=document.getElementById("emaill")
    let password=document.getElementById("passwordd")
    
    localStorage.setItem("namee",fullName.value)
    localStorage.setItem("emaill",email.value)
    localStorage.setItem("passwordd",password.value)
    
    // console.log(localStorage.getItem("name"));
    // console.log(localStorage.getItem("email"));
    // console.log(localStorage.getItem("password"));
    alert("Logged in successfully.")
    window.location.href = 'index2.html'
})
}
// _______________________________________________________________
let Login=document.getElementById("Login")
if(Login){
Login.addEventListener("submit",function(e){
    e.preventDefault()

    let email2=document.getElementById("email2")
    let password2=document.getElementById("password2")
    
    // let input1=localStorage.setItem("email2")
    // let input2=localStorage.setItem("password2")
    
    let savedemail=localStorage.getItem("emaill")
    let savedpassword=localStorage.getItem("passwordd")

    if (email2.value===savedemail && password2.value===savedpassword) {
        alert("Logged in successfully.")
        window.location.href = 'index3.html'
    } else {
        alert("The data is incorrect.")
    }
})
}