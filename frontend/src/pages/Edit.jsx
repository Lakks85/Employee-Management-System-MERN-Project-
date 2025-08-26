import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import toast from 'react-hot-toast'


const Edit = () => {

  const navigate = useNavigate()

  const employees = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nic: "",
    gender: ""
  }
  const {id} = useParams()
  const [employee, setEmployee] = useState(employees)




  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({...employee, [name]: value })

  }
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:4000/employee/getOneEmployee/${id}`)
      setEmployee(data.employee)
    }

    fetchData()
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:4000/employee/updateemployee/${id}`,employee)
      toast.success(response.data.message)
      navigate('/employeelist')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <motion.div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      <h2 className="text-2xl text-green-800 font-bold mb-6 animate-pulse">Update Employee</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleUpdate}>
        <div>
          <label className="block text-sm font-medium text-gray-700" id='firstName'>First Name</label>
          <input
            type="text"
            name='firstName'
            value={employee.firstName}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
          value={employee.lastName}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
             name="email"
            value={employee.email}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700">Nic</label>
          <input
            type="number"
             name="nic"
            value={employee.nic}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            type="text"
            name="gender"
            value={employee.gender}
            onChange={handleChange}
            className="mt-1 w-full p-2.5 border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition cursor-pointer"
          >
            Update User
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default Edit
