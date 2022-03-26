import React, { useState } from 'react'
import { createContext } from 'react'

export const EmployeeContext = createContext();

function EmployeeProvider({ children }) {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState(''); 
  const [employeeList, setEmployeeList] = useState([])
  
  return (
    <EmployeeContext.Provider value={{ name, setName, email, setEmail, occupation, setOccupation, employeeList, setEmployeeList}}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
