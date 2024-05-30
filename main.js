
const signUpUserName = document.querySelector("#signUpUserName")
const signUpPass = document.querySelector("#signUpPass")
const signUpEmail = document.querySelector("#signUpEmail")
const signUpbtn = document.querySelector("#signUpbtn")
const hidden = document.querySelector(".hidden")

//---------------------------------------------
const url = "https://665736c59f970b3b36c866df.mockapi.io/singup"


//------------sign up----------

signUpbtn.addEventListener('click', () => {
    if (signUpUserName.value.length < 5) {
        hidden.classList.remove("hidden")
        hidden.innerText = " UserName must be more than 5 character"
    } else if (signUpPass.value.length < 8) {
        hidden.classList.remove("hidden")
        hidden.innerText = " Password must be more than 8 number"
    } else if (signUpEmail.value == "") {
        hidden.classList.remove("hidden")
        hidden.innerText = " Email must not be empty"
    } else {
        signUp()

    }
})

async function signUp() {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            userName: signUpUserName.value,
            password: signUpPass.value,
            email: signUpEmail.value,

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data = await res.json()
    console.log(data);
}

