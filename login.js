const logInUserName = document.querySelector("#logInUserName")
const logInPass = document.querySelector("#logInPass")
const logInbtn = document.querySelector("#logInbtn")
const url = "https://665736c59f970b3b36c866df.mockapi.io/singup"
const hidden = document.querySelector(".hidden")

logInbtn.addEventListener("click", () => {
    logIn()
})

async function logIn() {
    const res = await fetch(url)
    const data = await res.json()
    data.forEach(e => {
        console.log(e);
        if (e.userName == logInUserName.value && e.password == logInPass.value) {
            hidden.classList.remove("hidden")
        }
    });
}