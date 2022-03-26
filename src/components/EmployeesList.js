// import React from 'react'
// import { useContext } from 'react'
// import { EmployeeContext } from '../contexts/EmployeeContext'
// import styles from './Employeer.module.css'

// export default function EmployeesList() {
//     const { employeeList, setEmployeeList } = useContext(EmployeeContext);
//     const { name, setName } = useContext(EmployeeContext);
//     const { email, setEmail } = useContext(EmployeeContext);
//     const { occupation, setOccupation } = useContext(EmployeeContext);

//     return (
//         <div>
//             {employeeList.map((element) => (
//                 <div>
//                     <h1>Employee's name:</h1>
//                     <li key={element.id}>{element.name}</li></div>))}
//         </div>
//     )
// }