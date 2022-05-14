import axios from "axios"
import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import BasicModal from "../Modal/Modal";


export const Container = ({name, email, password, handleChange, userDetails}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [textToSend, SetTextToSend] = useState("");

        const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      const handleClose = () => {
          setIsOpen(false);
      }

    const handleClick = async (e) => {
        if(validateEmail(email)) {
            if(name === "Register") {
                const res = await axios.post("https://localhost:3001/create-user", {
                    userDetails
                })
                if(res.data === "You Reached the top of the attempts") {
                    SetTextToSend("You Reached the top of the attempts");
                    setIsOpen(true);
                }
                else if(res.data === "Password is Not Valid") {
                    SetTextToSend("Password is Not Valid");
                    setIsOpen(true);
                }
                else if (res.data === "Password in dictionary") {
                    SetTextToSend("Password in dictionary");
                    setIsOpen(true);
                }
                else if(res) {
                    console.log(res);
                    const {email,customers} = res.data;
                    const customersRes = JSON.parse(customers);
                    dispatch({type: "INITIALIZE_USER", payload: {email: email, customers: customersRes} })
                    SetTextToSend("User Created")
                    setIsOpen(true);
                }
            } else if(name === "Login") {
                const res = await axios.post("https://localhost:3001/login-user", {
                userDetails
            });
                if(res && typeof(res.data) === "string") {
                    SetTextToSend("Not Authenticated")
                    setIsOpen(true);
                    
                } else if(res) {
                    const {email, customers} = res.data;
                    localStorage.setItem("token", res.data.token);
                    dispatch({type:"INITIALIZE_USER", payload: {email, customers}});
                    navigate('/system', { replace: true });
                }
        }
    } else {
        SetTextToSend("Email Is Not Valid");
        setIsOpen(true);
    }
}
    
    return (
        <div className="container">
        {isOpen ? <BasicModal text={textToSend} handleClose={handleClose} /> : ''}
        <h1>{name} Page</h1>
        <label htmlFor="user">Email</label>
        <input id="email" onChange={(e) => handleChange(e)} value={email} name="email" type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input id="password" onChange={(e) => handleChange(e)} value={password} name="password" type="password" placeholder="Password" />
        <button onClick={handleClick} className='btn'>{name}</button>
        </div>
    )
}