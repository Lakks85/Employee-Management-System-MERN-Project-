
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import axios from 'axios';
import { PiHandWithdrawFill } from "react-icons/pi";
import toast from 'react-hot-toast';


const EmployeeList = () => {
  const [users, setUsers] = useState([])
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/employee/getemployees")
      setUsers(data.users)
    }

    fetchData()
  }, [])

  const deleteUser = async (userId) => {
    try {
      if (window.confirm("Are you sure you want to delete Employee?")) {
        const response = await axios.delete(`http://localhost:4000/employee/employeedelete/${userId}`)
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId))
        toast.success(response.data.message)
      }

      else {
        console.log('Deletion cancelled')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }


  const withdrawStudent = async (id) => {
    try {
      if (window.confirm("Are you sure you want to Withdrawal Employee")) {
        const response = await axios.post(`http://localhost:4000/employee/withdrawal/${id}`);
        setUsers(users.filter(user => user._id !== id));
        toast.success(response.data.message)
      }
      else {
        console.log('Deletion cancelled.')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get('http://localhost:4000/employee/search', {
          params: { firstName, email, phone }
        });
        setUsers(res.data);

      } catch (error) {
        console.error(error);
      }
    }
    const delayDebounce = setTimeout(() => {
      fetchEmployee();
    }, 300); // Wait 300ms after user stops typing

    return () => clearTimeout(delayDebounce);
},[firstName,email, phone])

  return (
    <div>
      <div className="overflow-x-auto p-4 w-5xl m-auto bg-white ">
        <Link to="/dashboard" className='p-2 rounded-sm bg-green-700 text-white'> back</Link>
          <h1 className='mt-7 text-2xl font-bold'>Search Employee</h1>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-2 mt-10 '>
          <input type="text"
           className='border placeholder:pl-2 p-1 rounded-sm'
            placeholder='Search by name'
             value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
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
          <button className=' bg-green-500 text-white rounded-sm w-[80px] cursor-pointer' >Search</button>
        </div>

          <table className="min-w-full border border-gray-200 text-sm text-left mt-4">
            <thead className="bg-gray-100 text-gray-700">
              <tr className='bg-amber-500 text-white'>
                <th className="px-4 py-2 border ">S.No</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return <tr className="hover:bg-gray-50 transition-all duration-200" key={index} >
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{user.firstName} {user.lastName}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border">{user.phone}</td>
                  <td className="px-4 py-2 border flex items-center gap-2">
                    <button className='p-1.5 rounded-sm bg-red-700 text-white flex items-center gap-1 cursor-pointer'>
                      <MdDelete size={20} onClick={() => deleteUser(user._id)} />
                    </button>
                    <Link to={`/edit/` + user._id} className='p-1.5 rounded-sm bg-green-700 text-white m-1 flex items-center gap-1'>
                      <FaUserEdit size={20} />
                    </Link>

                    <button className='p-1.5 rounded-sm bg-blue-700 text-white flex items-center gap-1 cursor-pointer'>
                      <PiHandWithdrawFill size={20} onClick={() => withdrawStudent(user._id)} />
                    </button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>

      </div>
    </div>
  );
}

export default EmployeeList
