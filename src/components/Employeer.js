import { useContext, useEffect } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import styles from './Employeer.module.css'
let listEmployees = [];

export default function Employeer() {
    const { employeeList, setEmployeeList } = useContext(EmployeeContext);
    const { name, setName } = useContext(EmployeeContext);
    const { email, setEmail } = useContext(EmployeeContext);
    const { occupation, setOccupation } = useContext(EmployeeContext);
    let idEmployee = 0;

    function AddEmployee(e) {
        e.preventDefault();
        if (!name || !email || !occupation) {
            return alert('Some input is incorrect')
        } else {
            ++idEmployee;
            listEmployees.push({ id: idEmployee, name: name, email: email, occupation: occupation })
            setEmployeeList(listEmployees)
            console.log(employeeList)
            return alert('Registered Successfully')
        }
    }

    return (
        <div>
            <div>
                <h1>EMPLOYEES</h1>
                <form onSubmit={AddEmployee} className={styles.employeerContainer}>
                    <input type='text' className={styles.employeerInput} placeholder="Enter the employee's name" onChange={(e) => setName(e.target.value)}></input>
                    <input type='email' className={styles.employeerInput} placeholder="Enter the employee's email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='text' className={styles.employeerInput} placeholder="Enter the employee's occupation" onChange={(e) => setOccupation(e.target.value)}></input>
                    <input type='submit' value='Add employee' />
                </form>
            </div>
            <div>
                {/* {!employeeList.length < 0
                    ? <p>Teste</p>
                    : employeeList.map((element, index) =>
                        <div>
                            <h1>Employee's name:</h1>
                            <li key={index}>{element.name}</li>
                        </div>)
                } */}
            </div >
        </div >

    )
}
