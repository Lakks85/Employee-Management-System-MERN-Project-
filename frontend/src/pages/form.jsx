import  { useState } from 'react'

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  // Move to next step
  const nextStep = () => setStep((prev) => prev + 1);

  // Move to previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data:", formData);
    alert("Form Submitted!");
  };
  return (
    <div className=''>
      <h2>Step {step} of 3</h2>

      <form onSubmit={handleSubmit} className='mt-10 p-3 bg-white md:w-4xl m-auto sm:w-2xl'>
        {step === 1 && (
          <div>
            <h1 className='text-2xl mt-5 font-bold mb-10'>Employee Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className=' flex flex-col'>
              <label className='ml-2 mb-2'>Name:</label>
              <input
                className='border ml-2 p-2 rounded-[5px]'
                type="text"
                name="name"

                onChange={handleChange}
                required
              />
       </div>
            <div className=' flex flex-col'>
              <label className='ml-2 mb-2'>Father Name:</label>
              <input
                className='border ml-2 p-2 rounded-[5px]'
                type="text"
                name="name"

                onChange={handleChange}
                required
              />
            </div>
            <div className=' flex flex-col'>
              <label className='ml-2 mb-2'>Email:</label>
              <input
                className='border ml-2 p-2 rounded-[5px]'
                type="email"


                onChange={handleChange}
                required
              />
            </div>
            <div className=' flex flex-col'>
              <label className='ml-2 mb-2'>Phone:</label>
              <input
                className='border ml-2 p-2 rounded-[5px]'
                type="text"


                onChange={handleChange}
                required
              />
              </div>
              <div className=' flex flex-col'>
                <label className='ml-2 mb-2'>Date of Birth:</label>
                <input
                  className='border ml-2 p-2 rounded-[5px]'
                  type="date"


                  onChange={handleChange}
                  required
                />
              </div>
            <div className=' flex flex-col'>
              <label className='ml-2 mb-2'>CNIC:</label>
              <input
                className='border ml-2 p-2 rounded-[5px]'
                type="text"


                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className='mt-10 flex justify-end'>
              <button type="button" className='bg-green-500 text-white p-3 w-30 rounded-sm cursor-pointer tracking-widest' onClick={nextStep}>Continue</button>
            </div>

          </div>
        )}
           {/* Second step */}
        {step === 2 && (
          <div>
            <h1 className='font-bold text-2xl mb-10'>Family Detail</h1>
            <div className=' grid md:grid-cols-2 gap-5'>
              <div className=' flex flex-col'>
                <label className='ml-2 mb-2'>Family member:</label>
                <input
                  className='border ml-2 p-2 rounded-[5px]'
                  type="text"
                  name="name"

                  onChange={handleChange}
                  required
                />
              </div>
              <div className=' flex flex-col'>
                <label className='ml-2 mb-2'>Contact No:</label>
                <input
                  className='border ml-2 p-2 rounded-[5px]'
                  type="text"
                  name="name"

                  onChange={handleChange}
                  required
                />
              </div>
              <div className=' flex flex-col'>
                <label className='ml-2 mb-2'>Spouse Name:</label>
                <input
                  className='border ml-2 p-2 rounded-[5px]'
                  type="email"


                  onChange={handleChange}
                  required
                />
              </div>
              <div className=' flex flex-col'>
                <label className='ml-2 mb-2'>Spouse CNIC:</label>
                <input
                  className='border ml-2 p-2 rounded-[5px]'
                  type="text"


                  onChange={handleChange}
                  required
                />
              </div>
              <div className=' flex flex-col'>
                <label className='ml-2 mb-2'>Spouse Email:</label>
                <input
                  className='border ml-2 p-2 rounded-[5px]'
                  type="email"

                  onChange={handleChange}
                  required
                />
              </div>
              <div className=' flex flex-col'>
                <label className='ml-2 mb-2'>Spouse Contact:</label>
                <input
                  className='border ml-2 p-2 rounded-[5px]'
                  type="text"

                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='mt-10 flex justify-between'>
              <button type="button" onClick={prevStep} className='bg-blue-500 text-white p-3 w-30 rounded-sm cursor-pointer'>Back</button>
              <button type="button" onClick={nextStep} className='bg-green-500 text-white p-3 w-30 rounded-sm cursor-pointer'>Next</button>
            </div>

          </div>
        )}


        {step === 3 && (
          <>
            <h3>Review Your Details</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address}</p>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit">Submit</button>
          </>
        )}
      </form>

    </div>
  )
}

export default Form
