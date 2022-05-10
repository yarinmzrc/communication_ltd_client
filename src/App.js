import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRoutes from "./routes";
axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);

  useEffect(()=> {
    dispatch({type: "SET_LOADING"});
    const token = localStorage.getItem("token");
    if(token) {
      getUser(token);
    } else {
      dispatch({type: "STOP_LOADING"});
    }
  },[])

  const getUser = async (token) => {
    const res = await axios.get("http://localhost:3001/get-user", {
      headers: {
        'Authorization': token
      }
    })
      const {email, customers} = res.data;
      dispatch({type: "INITIALIZE_USER", payload: {email: email, customers: customers} });
    
  }
 
  return (
    <div className="App">
      {loading ? 'Loading...' : <AppRoutes />}
    </div>
  );
}

export default App;