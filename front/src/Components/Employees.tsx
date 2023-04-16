import React, { useEffect, useState, } from "react"
import { Button, ButtonGroup, Modal, Card } from 'react-bootstrap'
import '../App.css';
import NewEmployeeForm from './NewEmployeeForm'
import NewEditForm from "./NewEditForm";




function Employees() {

    //State and function for changing state on new (post) Form
    const [formShow, setFormShow] = useState<any>(false);
    const [editFormShow, setEditFormShow] = useState<any>(false);
    const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
    const handleClose = () => setFormShow(false);
    const handleShow = () => setFormShow(true);
    const handleEditShow = () => setEditFormShow(true);
    //const handleEditClose = () => setEditFormShow(false);

    //setting state for employee data
    const [employeesData, setEmployeesData] = useState<any>([])
    const [newEmployee, setNewEmployee] = useState<any>({
        name: '',
        job_title: '',
        years_of_experience: '',
        portrait: '',
        weekly_salary: ''
    })

    //fetching data from backend
    useEffect(() => {
        fetch('http://localhost:8080/employees')
            .then(
                response => {
                    return response.json()
                }).then(data => {
                    setEmployeesData(data)
                })
    }
        , []);

    const handleAdd = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        fetch("http://localhost:8080/employees", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmployee)
        })
        .then((response) => response.json())
        .then((data) => {
            setEmployeesData([...employeesData, data]);
            setNewEmployee({
                name: '',
                job_title: '',
                years_of_experience: '',
                portrait: '',
                weekly_salary: ''
            });
            setFormShow(false); 
        })
        .catch((error) => console.error(error));
    }    

    function deleteEmployee(employee_id: number) {
        fetch(`http://localhost:8080/employees/${employee_id}`, { method: 'DELETE' })
            .then(
                response => {
                    return (
                        window.location.reload()
                    )

                })
    }

    const handleEdit = (employee_id: number, updatedEmployee: any) => {
        fetch(`http://localhost:8080/employees/${employee_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(updatedEmployee),
        })
          .then(() => {
            const updatedEmployee: any = employeesData.map((employee: { _id: any; }) => {
              if (employee._id === employee_id) {
                return { ...employee, ...updatedEmployee };
              }
              return employee;
            });
            setEmployeesData(updatedEmployee);
            setEditFormShow(false);
            setSelectedEmployee(null);
          })
          .catch((error) => console.error(error));
      };  

    let employeeList = employeesData.map((employee: { portrait: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; job_title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; years_of_experience: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; weekly_salary: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; _id: any; }, index: React.Key | null | undefined) => {
        return (
            <Card className='employee-card' key={index} style={{ width: '18rem' }}>
                <Card.Img className='employee-portrait' variant="top" src={employee.portrait} alt={employee.portrait} />
                <Card.Body>
                    <Card.Title>{employee.name}</Card.Title>
                    <Card.Text>
                        Job Title: {employee.job_title}
                    </Card.Text>
                    <Card.Text>
                        Years of experience: {employee.years_of_experience}
                    </Card.Text>
                    <Card.Text>
                        Weekly Salary: {employee.weekly_salary}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                    <ButtonGroup>
                        <Button onClick={() => {
                            setSelectedEmployee(employee._id)
                            handleEditShow();
                        }} variant="success">Edit</Button>
                        <Button onClick={() => deleteEmployee(employee._id)} variant="danger">Delete</Button>
                    </ButtonGroup>
                </Card.Footer>
            </Card>
        )
    })

    //page render
    return (
        <main>
            <h1 className="componentText">Employee List</h1>
            <Button variant="warning" className='newFormButton' onClick={handleShow}>
                Add New Employee
            </Button>
            <Modal show={formShow} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Employee Information</Modal.Title>
                </Modal.Header>
                <Modal.Body><NewEmployeeForm key="employee._id" handleAdd={handleAdd} newEmployee={newEmployee}
                    setNewEmployee={setNewEmployee}  />
                </Modal.Body>
            </Modal>

            <Modal show={editFormShow} onHide={() => {
                
            }}>
                <Modal.Header>
                    <Modal.Title>Edit </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedEmployee && (
                        <NewEditForm
                            handleEdit={handleEdit} employees={{
                                name: undefined,
                                job_title: undefined,
                                years_of_experience: undefined,
                                portrait: undefined,
                                weekly_salary: undefined,
                                _id: undefined
                            }}                        />
                    )}
                </Modal.Body>
                    </Modal>
            <div className='row'>
                {employeeList}
            </div>

        </main>
    )
}

export default Employees