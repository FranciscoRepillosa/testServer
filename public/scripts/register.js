let SelectedInputs = {};

let selectInputsById = (inputsId, selector) => {
    inputsId.forEach(input => {
        console.log(input);
        SelectedInputs[`${input}`] = document.getElementById(input);
    });
}

selectInputsById(["email", "password", "repeatPassword, passwordB, repeatPasswordB"]);



document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    let {email, password, ...Other} = SelectedInputs;
    
 if (repeatPassword.value === password.value && passwordB.value === repeatPasswordB.value ) {
    console.log(CryptoJS.SHA256(email).toString())
     fetch("http://localhost:4444/user", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
        },
         body: JSON.stringify({
             email: CryptoJS.SHA256(email).toString(),
             password: CryptoJS.SHA256(password).toString()
         })
     })
     .then(res =>res.json())
     .then(data => {
         if (data.status === "success") {
            fetch("http://localhost:4321/user", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: CryptoJS.SHA256(email).toString(),
                    password: CryptoJS.SHA256(passwordB).toString()
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
         }
     });
 } else {
     alert("passwords should match")
 }
})

