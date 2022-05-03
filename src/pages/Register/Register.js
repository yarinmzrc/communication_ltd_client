import { useState } from 'react'
import { Container } from '../../components/Container/Container'
import './Register.scss'

const defaultDetails = {
    email: '',
    password: ''
}

export const RegisterPage = () => {
    const [userDetails, setUserDetails] = useState(defaultDetails);

    return (
        <div className='page'>
            <Container userDetails={userDetails} setUserDetails={setUserDetails} email={userDetails.email} password={userDetails.password} name="Register" />
        </div>
)
}