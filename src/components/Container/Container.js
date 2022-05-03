import axios from "axios"

export const Container = ({name, user, password, setUserDetails, userDetails}) => {
    
    const handleChange = (e) => {
        setUserDetails({...userDetails, [e.target.id]: e.target.value})
    }

    const handleClick = async () => {
        if(name === "Register") {
            const res = await axios.post("/create-user", {
                userDetails
            })
            if(res) {
                console.log(res);
            }
        }
    }

    return (
        <div className="container">
        <h1>{name} Page</h1>
        <label htmlFor="user">Email</label>
        <input id="email" onChange={(e) => handleChange(e)} value={user} name="email" type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input id="password" onChange={(e) => handleChange(e)} value={password} name="password" type="password" placeholder="Password" />
        <button onClick={handleClick} className='btn'>{name}</button>
        </div>
    )
}