import React, { useEffect } from 'react'
import { useContext } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import styles from './Employeer.module.css'
import EmployeesList from './EmployeesList';

export default function Employeer() {
    const { employeeList, setEmployeeList } = useContext(EmployeeContext);
    const { name, setName } = useContext(EmployeeContext);
    const { email, setEmail } = useContext(EmployeeContext);
    const { occupation, setOccupation } = useContext(EmployeeContext);
    let idEmployee = 0;
    function AddEmployee(e) {
        e.preventDefault();
        if (!name || !email || !occupation) {
            return alert('Some input is not correct')
        } else {
            ++idEmployee;
            employeeList.push({ id: idEmployee, name: name, email: email, occupation: occupation })
            console.log(employeeList)
            return alert('Registered Successfully')
        }
    }

    // function showList() {
    //     return (
    //     <>
    //     {employeeList.length > 0 ?
    //         <div>
    //             {employeeList.map((element) =>
    //                 <div>
    //                     <h1>Employee's name:</h1>
    //                     <li key={element.id}>{element.name}</li>
    //                 </div>)}
    //         </div >
    //         : <p>Teste</p>
    //     }
    //     </>
    //     )
    // }

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
            </div>
        </div >

    )
}
