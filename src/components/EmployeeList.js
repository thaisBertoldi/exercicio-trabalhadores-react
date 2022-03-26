import { useContext, useEffect } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'

export default function EmployeeList() {
    const { employeeList, setEmployeeList } = useContext(EmployeeContext);
    return (
        <>
            {employeeList.map((element) =>
                <div>
                    <li key={element.id}>Employee's name: {element.name}</li>
                    <li>Employee's email: {element.email}</li>
                    <li>Employee's occupation: {element.occupation}</li>
                </div>)
            }
        </>
    )
}
