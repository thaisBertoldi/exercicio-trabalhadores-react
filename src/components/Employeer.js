import { useContext, useEffect } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import EmployeeList from './EmployeeList';
import styles from './Employeer.module.css'
let idEmployee = 0;

export default function Employeer() {
    const { employeeList, setEmployeeList, name, setName, email, setEmail, occupation, setOccupation } = useContext(EmployeeContext);
    function AddEmployee(e) {
        e.preventDefault();
        if (!name || !email || !occupation || !name.match(/[a-z]/gi) || !email.match(/[\w.]+@\w+\.\w+\.?\w*/gi) || !(occupation.match(/[a-z]/gi))) {
            return alert('Some input is incorrect')
        } else {
            ++idEmployee
            setEmployeeList([...employeeList, { idEmployee, name, email, occupation }])
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

    function updateEmployee(id) {
        let inputName = document.getElementById('input-name')
        inputName.value = name

        let inputEmail = document.getElementById('input-email')
        inputEmail.value = email

        let inputOccup = document.getElementById('input-occup')
        inputOccup.value = occupation;

        let buttonSubmit = document.getElementById('button-submit')
        buttonSubmit.value = 'Update Employee'
    }

    return (
        <div>
            <div>
                <h1>EMPLOYEES</h1>
                <form id='form' onSubmit={AddEmployee} className={styles.employeerContainer}>
                    <input type='text' id='input-name' className={styles.employeerInput} placeholder="Enter the employee's name" onChange={(e) => setName(e.target.value)}></input>
                    <input type='email' id='input-email' className={styles.employeerInput} placeholder="Enter the employee's email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='text' id='input-occup' className={styles.employeerInput} placeholder="Enter the employee's occupation" onChange={(e) => setOccupation(e.target.value)}></input>
                    <input type='submit' id='button-submit' onClick={() => resetInput()} value='Add employee' />
                </form>
            </div>
            <div>
                {employeeList.map((element) =>
                    <div key={element.idEmployee} className={styles.employeeListContainer}>
                        <li className={styles.employeeList}>
                            <p>Employee's name: {element.name}</p>
                            <p>Employee's email: {element.email}</p>
                            <p>Employee's occupation: {element.occupation}</p>
                            <div>
                                <button onClick={() => updateEmployee(element.idEmployee)}>Update</button>
                                <button onClick={() => deleteEmployee(element.idEmployee)}>Delete</button>
                            </div>
                        </li>
                    </div>)
                }
            </div >
        </div >
    )
}
