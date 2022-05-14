import './System.scss';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import dompurify from 'dompurify';

const defaultCustomer = {
  first: '',
  last: ''
}

export const SystemPage = () => {
  const {customers, email} = useSelector(state => state.user);
  const [customer, setCustomer] = useState(defaultCustomer);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const sanitizer = dompurify.sanitize;

  const handleChange = (e) => {
    setCustomer({...customer, [e.target.name]: e.target.value});
  }

  const handleAddCustomer = async () => {
    setText(customer.first);
    const newCustomers = [...customers];
    newCustomers.push(customer);
    const res = await axios.post("https://localhost:3001/add-customer", {
      email, customerData: newCustomers
    })
    if(res) {
      console.log(res);
      dispatch({type: "UPDATE_CUSTOMERS", payload: {newCustomers}});
    }

  }

  return <div >
    {text ? <div dangerouslySetInnerHTML={{__html: sanitizer(text)}} ></div> : ""}
   <div className='system-page'>
      <h1>System Page</h1>
      <div className="customers-container">
        <div className="all-customers">
        <div className="new-customer">
          <h2>Add New Customer</h2>
          <div className="container">
          <label htmlFor="first">First Name</label>
          <input id="first" onChange={(e) => handleChange(e)} value={customer.first} name="first" type="text" placeholder="First Name" />
          <label htmlFor="last">Last Name</label>
          <input id="last" onChange={(e) => handleChange(e)} value={customer.last} name="last" type="text" placeholder="Last Name" />
          <button onClick={handleAddCustomer} className='btn'>Add Customer</button>
          </div>
        </div>
        <div className="customers">
        <h2>All Customers:</h2>
        {customers.map((customer, index) => (
          <p key={index}>{`${customer.last} ${customer.first}`}</p>
          ))}
          </div>
        </div>


      </div>
    </div>;
    </div>
};
