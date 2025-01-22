export const Formvalidation = (email,password) => {
    const emailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email)
    const passwordvalid  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!emailValid) return "Email is not valid";
    if(!passwordvalid) return "Password is not valid";

    return null;
}