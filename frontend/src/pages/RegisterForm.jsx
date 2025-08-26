import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate("")


  const handleSubmit = async(e) => {
    e.preventDefault()
 try {
   const response = await axios.post("http://localhost:4000/user/register", { fullName, email, password }, { withCredentials: true, headers: { "Content-Type": "application/json" } })
   toast.success(response.data.message);

   navigate("/")

 } catch (error) {
  toast.error(error.response.data.message)
 }



  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            // required
            value={fullName}
            onChange={(e) =>setFullName(e.target.value)}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            // required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            // required
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>

            <div className='flex justify-between mt-6 text-sm m-2'>
                  <p>Already an account?</p>
                  <Link to="/">
                    <span className='underline text-blue-600'>login</span>
                  </Link>
                </div>
      </form>
    </div>
  )
}

export default RegisterForm
