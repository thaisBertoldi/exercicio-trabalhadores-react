import { createContext, useState } from 'react'

export const EmployeeContext = createContext();

function EmployeeProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState('');
  const [employeeList, setEmployeeList] = useState([])
  let idEmployee = 0;
  let idUpdate = 0;
  let booleanButtonUpdate = false;

  function AddEmployee(e) {
    e.preventDefault();
    if (!name || !email || !occupation
      || !name.match(/[a-z]/gi) || !email.match(/[\w.]+@\w+\.\w+\.?\w*/gi) || !(occupation.match(/[a-z]/gi))) {
      return alert('Some input is incorrect')
    } else {
      ++idEmployee
      setEmployeeList([...employeeList, { idEmployee, name, email, occupation }])
      resetInput()
      return alert('Registered Successfully')
    }
  }
  function deleteEmployee(id) {
    setEmployeeList(employeeList.filter(emp => emp.idEmployee !== id))
    return alert('Deleted.')
  }

  function resetInput() {
    document.getElementById('form').reset();
  }

  function getId(id) {
    return idUpdate = id;
  }

  function updateEmployee(id, name, email, occupation) {
    let inputName = document.getElementById('input-name')
    inputName.value = name

    let inputEmail = document.getElementById('input-email')
    inputEmail.value = email

    let inputOccup = document.getElementById('input-occup')
    inputOccup.value = occupation;

    booleanButtonUpdate = true;
    getId(id);
    setEmployeeList(employeeList.filter(emp => emp.idEmployee !== id))
  }

  function addEmployeeUpdate(e) {
    e.preventDefault();
    if (!name || !email || !occupation
      || !name.match(/[a-z]/gi) || !email.match(/[\w.]+@\w+\.\w+\.?\w*/gi) || !(occupation.match(/[a-z]/gi))) {
      return alert('Some input is incorrect')
    } else {
      setEmployeeList([...employeeList, { idEmployee: idUpdate, name, email, occupation }])
      resetInput()
      booleanButtonUpdate = false;
      return alert('Update Successfully')
    }
  }

  return (
    <EmployeeContext.Provider value={{
      name, setName, email, setEmail, occupation, setOccupation, employeeList, setEmployeeList,
      AddEmployee, deleteEmployee, updateEmployee, idEmployee, booleanButtonUpdate, 
      addEmployeeUpdate
    }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
