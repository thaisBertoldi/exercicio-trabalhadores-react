// import { useContext, useEffect } from 'react'
// import { EmployeeContext } from '../contexts/EmployeeContext'
// import styles from './Employeer.module.css'

// export default function EmployeeList() {
//     const { employeeList } = useContext(EmployeeContext);

//     function updateEmployee(id) {
//         return employeeList.filter((e) => e.id !== id)
//     }

//     return (
//         <>
//             {employeeList.map((element) =>
//                 <div key={element.idEmployee} className={styles.employeeListContainer}>
//                     <li className={styles.employeeList}>
//                         <p>Employee's name: {element.name}</p>
//                         <p>Employee's email: {element.email}</p>
//                         <p>Employee's occupation: {element.occupation}</p>
//                         <div>
//                             <button onClick={() => updateEmployee(employeeList.id)}>Update</button>
//                             <button>Delete</button>
//                         </div>
//                     </li>
//                 </div>)
//             }
//         </>
//     )
// }
