const btn = document.querySelector(".btn-login");
const form = document.querySelector("form");
const body = document.querySelector("body");
const ocultarBtn = document.getElementById("ocultar-btn");

btn.addEventListener("click", (event) =>{
    event.preventDefault();
    const fields = [... document.querySelectorAll(".input-block input")];
    fields.forEach(field =>{
        if(field.value === "") form.classList.add("validate-error")
    })

    const formError = document.querySelector(".validate-error");
    if(formError){
        formError.addEventListener("animationend", (event) =>{
            if(event.animationName === "nono"){
                form.classList.remove("validate-error");
            }
        })
    } else{
        form.classList.add("form-hide");
    }

})

form.addEventListener("animationstart", (event) =>{
    if(event.animationName === "down") body.style.overflow = "hidden";
})

form.addEventListener("animationend", (event) =>{
    if(event.animationName === "down"){
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }
})

/* Squares*/
const ulSquares = document.querySelector("ul.squares");

for(let i = 0; i < 11; i++){
    const li = document.createElement("li");
    const random = (min,max) => Math.round(Math.random() * (max - min) + min);
    const size = random(10, 120);
    const position = random(1, 99);
    const delay = random(0.1, 5);
    const duration = random(12, 20);

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`
    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulSquares.appendChild(li);
}


// Hide Button
ocultarBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    let password = document.getElementById("login-password");
    if(password.type === "text"){
        password.type = "password";
        ocultarBtn.innerHTML = "Mostrar";
    } else{
        password.type = "text";
        ocultarBtn.innerHTML = "Ocultar";
    }
})
