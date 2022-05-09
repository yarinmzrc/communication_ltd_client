import './System.scss';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const defaultCustomer = {
  first: '',
  last: ''
}

export const SystemPage = () => {
  const {customers, email} = useSelector(state => state.user);
  const [customersToDisplay, setCustomersToDisplay] = useState(customers);
  const [customer, setCustomer] = useState(defaultCustomer);
  const dispatch = useDispatch();

  useEffect(() => {
    setCustomersToDisplay(customers);
  },[customers])

  const handleChange = (e) => {
    setCustomer({...customer, [e.target.name]: e.target.value});
  }

  const handleAddCustomer = async () => {
    const newCustomers = [...customers];
    newCustomers.push(customer);
    const res = await axios.post("http://localhost:3001/add-customer", {
      email, customerData: newCustomers
    })
    if(res) {
      console.log(res);
      dispatch({type: "UPDATE_CUSTOMERS", payload: {newCustomers}});
    }

  }

  return <div className='system-page'>
      <h1>System Page</h1>
      <div className="customers-container">
        <div className="all-customers">
        <div className="customers">
        <h2>All Customers:</h2>
        {customersToDisplay.map((customer, index) => (
          <p key={index}>{`${customer.last} ${customer.first}`}</p>
          ))}
          </div>
        </div>
        <div className="new-customer">
          <h2>Add New Customer</h2>
          <label htmlFor="first">First Name</label>
          <input id="first" onChange={(e) => handleChange(e)} value={customer.first} name="first" type="text" placeholder="First Name" />
          <label htmlFor="last">Last Name</label>
          <input id="last" onChange={(e) => handleChange(e)} value={customer.last} name="last" type="text" placeholder="Last Name" />
          <button onClick={handleAddCustomer} className='btn'>Add Customer</button>
        </div>

      </div>
    </div>;
};
