
export const checkValidata = (email,password,name) => {

 console.log("validate function called");
const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
console.log(name);


if(name!=null)
{const isNameValid=/^[a-zA-Z ]{2,30}$/.test(name);
    if(!isNameValid)
    return "UserName not Valid";}
if(!isEmailValid) return "Email Id is not valid";

if(!isPasswordValid) return "Password is not valid";

return null;
}

