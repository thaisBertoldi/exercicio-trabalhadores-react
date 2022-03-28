import { createContext, useState } from 'react'

export const EmployeeContext = createContext();

let idEmployee = 1;
let idUpdate = 0;
let booleanButtonUpdate = false;

function EmployeeProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState('');
  const [employeeList, setEmployeeList] = useState([])

  function AddEmployee(e) {
    e.preventDefault();
    if (!name.match(/[a-z]/gi) || !email.match(/[\w.]+@\w+\.\w+\.?\w*/gi) || !(occupation.match(/[a-z]/gi))) {
      return alert('Some input is incorrect')
    } else {
      setEmployeeList([...employeeList, { idEmployee, name, email, occupation }])
      resetInput()
      idEmployee++
      return alert('Registered Successfully')
    }
  }

  function deleteEmployee(idEmployee) {
    setEmployeeList(employeeList.filter(emp => emp.idEmployee !== idEmployee))
    return alert('Deleted.')
  }

  function resetInput() {
    document.getElementById('form').reset();
  }

  function getId(idEmployee) {
    return idUpdate = idEmployee;
  }

  function updateEmployee(idEmployee, name, email, occupation) {
    let inputName = document.getElementById('input-name')
    inputName.value = name

    let inputEmail = document.getElementById('input-email')
    inputEmail.value = email

    let inputOccup = document.getElementById('input-occup')
    inputOccup.value = occupation;

    booleanButtonUpdate = true;
    getId(idEmployee);
    setEmployeeList(employeeList.filter(emp => emp.idEmployee !== idEmployee))
  }

  function addEmployeeUpdate(e) {
    e.preventDefault();
    if (!name.match(/[a-z]/gi) || !email.match(/[\w.]+@\w+\.\w+\.?\w*/gi) || !(occupation.match(/[a-z]/gi))) {
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
