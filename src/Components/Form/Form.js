import React, { useEffect, useState } from 'react';
import './form.css';
import Validation from './Validation';
const Form = ({ submitform }) => {
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: ""

    });

    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitform(true);
        }

    }, [errors]);
    const changeHandler = (event) => {
        setValues({
            ...values, [event.target.name]: event.target.value,
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);
    }
    return (
        <div className='set-form'>
            <h1>Sign Up Form</h1>
            <p>Please fill in this form to create an account! </p>
            <hr />
            <form className='form'>
                <div className='set-name'>
                    <input type="text" placeholder='First Name' name='fname' value={values.fname} onChange={changeHandler} style={{ width: "46%", marginRight: "27px" }} required />
                    {errors.fname && <p className='error' style={{ color: "red" }}>{errors.email}</p>}
                    <input type="text" placeholder='Last Name' name='lname' value={values.lname} onChange={changeHandler} style={{ width: "46%" }} required />
                    {errors.lname && <p className='error' style={{ color: "red" }}>{errors.email}</p>}
                </div>
                <div>
                    <input type="email" placeholder=' Email' name='email' value={values.email} onChange={changeHandler} required />
                    {errors.email && <p className='error' style={{ color: "red" }}>{errors.email}</p>}
                </div>
                <div>
                    <input type="password" placeholder='Password' name='password' value={values.password} onChange={changeHandler} />
                    {errors.password && <p className='error' style={{ color: "red" }}>{errors.password}</p>}
                </div>
                <div>
                    <input type="password" placeholder='Confirm Password' name='cpassword' value={values.cpassword} onChange={changeHandler} />
                    {errors.cpassword && <p className='error' style={{ color: "red" }}>{errors.cpassword}</p>}
                </div>
                <div>
                    <input type="checkbox" name="checkbox" style={{ width: "6%" }} required />
                    <p className='para' >I accept the <span>Terms of Use</span> & <span>Privacy Policy</span></p>
                </div>
                <div>
                    <button onClick={submitHandler}>Sign Up</button>
                </div>
                {/* <p>Already Account {" "} Please logIn</p> */}
            </form>
        </div>
    );
}

export default Form;