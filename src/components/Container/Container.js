import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

export const Container = ({name, email, password, handleChange, userDetails}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async () => {
        if(name === "Register") {
            const res = await axios.post("http://localhost:3001/create-user", {
                userDetails
            })
            if(res) {
                const {emailRes, passwordRes} = res.data;
                dispatch({type: "INITIALIZE_USER", payload: {email: emailRes,password: passwordRes} })
                
            }
        } else if(name === "Login") {
            const res = await axios.post("http://localhost:3001/login-user", {
                userDetails
            })
            if(res) {
                const emailRes = res.data.email;
                await dispatch({type: "INITIALIZE_USER", payload: {email: emailRes} });
                navigate('/system', { replace: true });
            }
        }
    }

    return (
        <div className="container">
        <h1>{name} Page</h1>
        <label htmlFor="user">Email</label>
        <input id="email" onChange={(e) => handleChange(e)} value={email} name="email" type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input id="password" onChange={(e) => handleChange(e)} value={password} name="password" type="password" placeholder="Password" />
        <button onClick={handleClick} className='btn'>{name}</button>
        </div>
    )
}