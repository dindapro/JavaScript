

const inputPass = prompt("Enter Your Password");
if (inputPass.length > 6 ) {

    if (inputPass.indexOf(' ') === -1){
        console.log("Valid Password")
    } else {
        console.log("Invalid Password")
    }
} else {
    console.log("Password to SHORT")
}

