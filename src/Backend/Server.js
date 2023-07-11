var express = require ('express')

var cors = require('cors')
var app = express()

var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

const employees = []

app.post('/employee',function(req,res){
    employees.push(req.body)
    res.send({status:true})


})

app.get('/employees',function(req,res){
   
    res.send({employees})

    
})

app.delete('/employee/:id', function(req, res) {
    const employeeId = req.params.id;
  
    // Find the index of the employee in the array or perform any necessary deletion logic
    const employeeIndex = employees.findIndex((employee) => employee.id === employeeId);
  
    if (employeeIndex !== -1) {
      employees.splice(employeeIndex, 1);
      res.status(200).json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  });

  app.listen(1000)
  