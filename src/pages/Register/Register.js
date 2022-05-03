import { useState } from 'react'
import { Container } from '../../components/Container/Container'
import './Register.scss'

const defaultDetails = {
    email: '',
    password: ''
}

export const RegisterPage = () => {
    const [userDetails, setUserDetails] = useState(defaultDetails);

    const handleChange = (e) => {
        setUserDetails({...userDetails, [e.target.id]: e.target.value})
    }

    return (
        <div className='page'>
            <Container userDetails={userDetails} handleChange={handleChange} email={userDetails.email} password={userDetails.password} name="Register" />
        </div>
)
}