import { useContext } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import styles from './Employeer.module.css'

export default function Employeer() {
    const { setName, setEmail, setOccupation, employeeList,
        AddEmployee, deleteEmployee, booleanButtonUpdate, 
        updateEmployee, addEmployeeUpdate } = useContext(EmployeeContext);

    return (
        <div>
            <div>
                <h1>EMPLOYEES</h1>
                <form id='form' className={styles.employeerContainer}>
                    <input type='text' id='input-name' className={styles.employeerInput}
                        placeholder="Enter the employee's name" onChange={(e) => setName(e.target.value)}></input>
                    <input type='email' id='input-email' className={styles.employeerInput}
                        placeholder="Enter the employee's email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='text' id='input-occup' className={styles.employeerInput}
                        placeholder="Enter the employee's occupation" onChange={(e) => setOccupation(e.target.value)}></input>
                    <button type='submit' onClick={AddEmployee} className={styles.employeeButtons}>Add employee</button>
                    {booleanButtonUpdate && <button onClick={addEmployeeUpdate} className={styles.employeeButtons}>Update employee</button>}
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
                                <button className={styles.employeeButtons} onClick={() =>
                                    updateEmployee(element.idEmployee, element.name, element.email, element.occupation)}>Update</button>
                                <button className={styles.employeeButtons} onClick={() =>
                                    deleteEmployee(element.idEmployee)}>Delete</button>
                            </div>
                        </li>
                    </div>)
                }
            </div >
        </div >
    )
}