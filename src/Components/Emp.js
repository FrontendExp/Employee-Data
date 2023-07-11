import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Emp() {
    const [getemp, setGetemp] = useState([])
    const [empdata, setEmpdata] = useState({
        name: '',
        mobilenumber: '',
        email: '',
        jobrole: '',
        experience: ''
    });

    useEffect(() => {
        axios.get('http://localhost:1000/employees')
            .then((res) => {
                setGetemp(res.data.employees)
            })
            .catch((err) => console.log(err))
    }, [getemp])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpdata((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        axios
            .post('http://localhost:1000/employee', empdata)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };


    const handleDelete = (employeeId) => {
        axios
          .delete(`http://localhost:1000/employee/${employeeId}`)
          .then((res) => {
            console.log(res);
            // Handle success or perform any necessary actions
          })
          .catch((error) => {
            console.log(error);
            // Handle error if any
          });
      };
      

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={empdata.name}
                    name="name"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    value={empdata.email}
                    name="email"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Mobile Number"
                    value={empdata.mobilenumber}
                    name="mobilenumber"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Job Role"
                    value={empdata.jobrole}
                    name="jobrole"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Experience"
                    value={empdata.experience}
                    name="experience"
                    onChange={handleChange}
                />
            </form>
            <button onClick={handleSubmit} className="btn btn-danger btn-lg">
                Submit
            </button>

            <div className='d-flex justify-content-center  '>
                <table>
                    <thead>
                        <tr>
                            <th>empname</th>
                            <th>empemail</th>
                            <th>empemail</th>
                            <th>empjob</th>
                            <th>empexp</th>


                        </tr>
                    </thead>
                    <tbody>

                        {getemp.length > 0 && getemp.map((employee, index) => (

                            <tr key={index}>

                                <th scope='row'>{index +1}</th>

                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.mobilenumber}</td>
                                <td>{employee.jobrole}</td>
                                <td>{employee.experience}</td>

                                <button onClick={handleDelete}
                                className='btn btn-danger btn-sm'>X</button>


                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Emp;
