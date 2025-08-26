import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/user/getuser")
      setUsers(data.users)
    }
    fetchData()
 },[])
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      <div className="overflow-x-auto p-4 w-4xl m-auto bg-white border border-slate-300">
        <h2 className='font-extrabold text-2xl text-blue-500 w-full'>User Table</h2>
        <table className="min-w-full border border-gray-200 text-sm text-left mt-4">
          <thead className="bg-gray-100 text-gray-700">
            <tr className='bg-blue-500 text-white'>
              <th className="px-4 py-2 border ">ID</th>
              <th className="px-4 py-2 border ">Name</th>
              <th className="px-4 py-2 border ">Email</th>
              <th className="px-4 py-2 border ">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr className="hover:bg-gray-50 transition-all duration-200" key={index}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{user.fullName}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">****************</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Users
