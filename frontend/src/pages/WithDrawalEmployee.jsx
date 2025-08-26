import axios from 'axios';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


const WithDrawalEmployee = () => {
  const [employee, setEmployee] = useState([])
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/withdrawal/getwithdrawal")
        setEmployee(data.employee)
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING EMPLOYEE", error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/withdrawal/searchwithdrawal', {
          params: { firstName, email, phone }
        });
        setEmployee(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 300); // Wait 300ms after user stops typing

    return () => clearTimeout(delayDebounce);
   }, [firstName, email, phone])

  const handleRestore = async(id) => {
    try {
      if (window.confirm("Are you sure you want to Restore Employee")) {
        const response = await axios.post(`http://localhost:4000/withdrawal/restore/${id}`);
        setEmployee(employee.filter(emp => emp._id !== id));
        toast.success(response.data.message)
      }
      else {
        console.log('Deletion cancelled.')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      <div className="overflow-x-auto p-4 w-4xl m-auto bg-white border border-slate-300">
        <h2 className='font-extrabold text-2xl text-pink-500 w-full'>Withdrawal Employee</h2>
        <h1 className='mt-7 text-2xl font-bold'>Search Employee</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-10 '>
          <input type="text"
            className='border placeholder:pl-2 p-1 rounded-sm'
            placeholder='Search by name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input type="email"
            className='border placeholder:pl-2 p-1 rounded-sm'
            placeholder='Search by Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="number"
            className='border placeholder:pl-2 p-1 rounded-sm'
            placeholder='Search by Phone No'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className=' bg-pink-500 text-white rounded-sm w-[80px] cursor-pointer' >Search</button>
        </div>
        <table className="min-w-full border border-gray-200 text-sm text-left mt-4">
          <thead className="bg-gray-100 text-gray-700">
            <tr className='bg-pink-500 text-white'>
              <th className="px-4 py-2 border ">ID</th>
              <th className="px-4 py-2 border ">Name</th>
              <th className="px-4 py-2 border ">Email</th>
              <th className="px-4 py-2 border ">Gender</th>
              <th className="px-4 py-2 border ">Phone No</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((user, index) => (
              <tr className="hover:bg-gray-50 transition-all duration-200" key={index}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{user.firstName} {user.lastName}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.gender}</td>
                <td className="px-4 py-2 border">{user.phone}</td>
                <td className="px-4 py-2 border flex items-center gap-2">
                  <button className='p-1.5 rounded-sm bg-pink-500 text-white flex items-center gap-1 cursor-pointer'>
                    <MdDelete size={18} />
                  </button>
                  <Link  className='p-1.5 rounded-sm bg-green-700 text-white m-1 flex items-center gap-1'>
                    <MdOutlineSettingsBackupRestore size={18} onClick={() => handleRestore(user._id)}/>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default WithDrawalEmployee
