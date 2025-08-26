import React from "react";
import { motion } from "framer-motion"
import axios from "axios"
import { useState } from "react";
import { toast } from "react-hot-toast";

const AddEmployeeForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [nic, setNic] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/employee/addemployee", { firstName, lastName, email, phone, gender, nic }, { withCredentials: true, headers: { "Content-Type": "application/json" },})

      toast.success(response.data.message)

      setFirstName('')
      setLastName('')
      setEmail("")
      setPhone("")
      setGender("")
      setNic("")

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

      <h2 className="text-2xl text-amber-800 font-bold mb-6 animate-pulse">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/*First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            // required
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lasttName"
            // required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            // required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            //required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700">Nic</label>
          <input
            type="number"
            name="nic"
            //required
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            type="text"
            name="role"
            //required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 w-full p-2.5 border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>


        {/* <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            required
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Add Employee
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddEmployeeForm;
