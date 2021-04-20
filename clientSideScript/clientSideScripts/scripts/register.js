let SelectedInputs = {};

let selectInputsById = (inputsId, selector) => {
    inputsId.forEach(input => {
        console.log(input);
        SelectedInputs[`${input}`] = document.getElementById(input);
    });
}

selectInputsById(["username", "password", "repeatPassword, passwordB, repeatPasswordB"]);



document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    let {username, password, ...Other} = SelectedInputs;

    console.log(repeatPasswordB.value, passwordB.value);
    
 if (repeatPassword.value === password.value && passwordB.value === repeatPasswordB.value ) {
     fetch("http://localhost:4321/fakeServer", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
        },
         body: JSON.stringify({
             username: md5(username.value),
             password: md5(password.value)
         })
     })
     .then(res =>res.json())
     .then(data => {
         if (data.status === "enabled") {
            fetch("http://localhost:4321/user", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: md5(username.value),
                    password: md5(passwordB.value)
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
         }
     });
 } else {
     alert("passwords should macth")
 }
    

    //verify is the input values are valid
    //encryp user inputs
    //send those inputs to the external server
    //and the portal cautivo
    //then store in our own db
})

//how to create a variable dinamicly