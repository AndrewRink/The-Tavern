const router = require('express').Router()
const db= require('../models')

//SHOW ALL EMPLOYEES
router2.get('/', (req: any, res: { send: (arg0: any) => void; render: (arg0: string) => void }) => {
    db.Employee.find()
        .then((employees: any) => {
            res.send(employees)
        })
        .catch((err: any) => {
            console.log(err)
            res.render('error404')
          })
})

//CREATE NEW EMPLOYEE
router.post('/', async (req: { body: any }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): void; new(): any } } }) => {
    try {
        const newEmployeeData  = req.body;
        const newEmployee = await db.Employee.create(newEmployeeData)
        res.status(201).json(newEmployee)
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
    })




//get by id
router.get('/:id', async (req: { params: { id: any } }, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: any }): void; new(): any } } }) => {
  try {
    const data = await db.Employee.findById(req.params.id);
    res.json(data)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
});

//PUT: Update Employee
router.put('/:id', async(req: { body: { name: any; job_title: any; years_of_experience: any; portrait: any; weekly_salary: any }; params: { id: any } },res: { status: (arg0: number) => void; json: (arg0: any) => void; send: (arg0: { error: string }) => void })=>{
  
  //const employee = req.body
    try {
    const {name, job_title, years_of_experience, portrait, weekly_salary } = req.body;
    const updatedEmployee = await db.employees.update(
        { name, job_title, years_of_experience, portrait, weekly_salary },
        {
            where: { id: req.params.id },
            returning: true, // include the updated item in the response
            plain: true, // return only the updated item, not a wrapper object
          }
    );
    if (updatedEmployee[0] === 0) {
        res.status(404)
    } else 
    res.json(updatedEmployee[1])
    }   
        catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
}
}) 
  
// Delete employee
router.delete('/:id', async (req: { params: { id: any } },res: { send: (arg0: string) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: any }): void; new(): any } } })=> {
    try {
        const id = req.params.id;
        const data = await db.Employee.findByIdAndDelete(id)
        res.send(`Employee with ${data.name} has been deleted...`)
        }
    catch (error) {
        res.status(400).json({ message: error.message})
        }
    })
          
      


module.exports = router