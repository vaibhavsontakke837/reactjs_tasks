import { useState } from "react"
import {IoMdRose} from "react-icons/io"
import "./signUp.css"

const SignUp = () => {


    const [lemail, setEmail] = useState()
    const [lpassword, setPassword] = useState()
    const [color,setColor]=useState()


    localStorage.setItem("email","sontakkevaibhav837@gmail.com")
    localStorage.setItem("password","12345678")


    const submitForm = (event) => {
        event.preventDefault();

        const email = localStorage.getItem("email")
        const password = localStorage.getItem("password")

        console.log(lpassword.length)

        if (lemail === email) {
            if (lpassword === password) {
                alert("Your email id and password is correct")
            } else {
                alert("Please enter correct password")
            }
        } else {
            alert("Please enter correct email")
        }

        

    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
        const color = lpassword.length < 3 ?  "red" : lpassword.length < 6 ? "orange" : "green"
        setColor(color)
    }
    return (
        <div className="signin_container">
            <div className="signUpLeft">
                <IoMdRose className="logo"/>
                <h1>NSOC DASHBOARD</h1>
                <p>Cyber World Class</p>
            </div>
            <form onSubmit={submitForm} className="form">
                <div>
                    <label>Your Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="password" style={{border:`2px solid ${color}`}} onChange={passwordChange} placeholder="Enter Your Password" />
                </div>
                   
                 <div className="checkBox">
                    <input type="checkbox" className="checkBox" /><span>Remember Me</span>
                 </div>
                <button type="submit">SIGN IN</button>  
            </form>
        </div>
    )
}
export default SignUp;