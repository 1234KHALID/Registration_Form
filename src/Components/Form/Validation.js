const ValidationData = (values) => {
    let errors = {};
    if (!values.fname) {
        errors.fname = "fname is required."
    }
    if (!values.lname) {
        errors.lname = "lname is required."
    }
    if (!values.email) {
        errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid."
    }
    if (!values.password) {
        errors.password = "Password is required."
    } else if (values.password.length <= 8) {
        errors.password = "Password must be more than eight character and least one Number ,(1,2,3...9),Special simbel (@,#,$,%),as well as One Uppercase and lowercase chracter ";
    }
    if (!values.cpassword) {
        errors.cpassword = "Password is required."
    } else if (values.cpassword.length <= 8) {
        errors.cpassword = "Password must be more than eight character and least one Number ,(1,2,3...9),Special simbel (@,#,$,%),as well as One Uppercase and lowercase chracter ";
    }
    return errors;
}

export default ValidationData;
