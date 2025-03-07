import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])

  const showPassword = () => {
    passwordRef.current.type = "text"
    console.log(ref.current.src)
    if (ref.current.src.includes("/eye-cross.png")) {
      ref.current.src = "/eye.png"
      passwordRef.current.type = "password"
    }
    else {
      passwordRef.current.type = "text"
      ref.current.src = "/eye-cross.png"
    }
  }
  // const showPassword = () => {
  //   setShow(!show);
  //   ref.current.src = show ? "/eye.png" : "/eye-cross.png";
  // };

  // const savePassword = () => {
  //   setPasswordArray([...passwordArray, form])
  //   localStorage.setItem("passwords", JSON.stringify(...passwordArray, form))
  //   console.log(passwordArray)
  // }

  const savePassword = () => {
    const updatedArray = [...passwordArray, form];
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    console.log(updatedArray);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>

      <div className="mycontainer">
        <h1 className='text-4xl font-bold text-center'>
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center '>Your Own Password Manager</p>
        <div className=" flex flex-col p-4 text-black gap-8 items-center">

          <input value={form.site} onChange={handleChange} placeholder='Enter website URL' type="text" name='site' className="rounded-full border border-green-500 w-full p-4 py-1" />

          <div className="flex w-full justify-between gap-8">

            <input value={form.username} onChange={handleChange} placeholder='Enter Username' name='username' type="text" className="rounded-full border border-green-500 w-full p-4 py-1" />

            <div className="relative">

              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' name='password' type="password" className="rounded-full border border-green-500 w-full p-4 py-1" />
              <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                <img ref={ref} className='p-1 fill-black' width={26} src="/eye.png" alt="eye" />
              </span>
            </div>
          </div>

          <button onClick={savePassword} className='flex  justify-center items-center gap-2 bg-green-600 hover:bg-green-500 rounded-full px-4 py-2 w-fit border border-green-700 '>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover">
            </lord-icon>Add Password</button>
        </div>
        <div className="passwords">
          <h2 className='font-semibold text-xl py-4 text-center'> Your Passwords</h2>
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className=' bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='flex justify-center items-center py-2 border border-white text-center '>
                    <a href={item.site} target='_blank' rel="noopener noreferrer">{item.site}</a>
                    <div className='cursor-pointer size-7'><img src="/copy.png" alt="" /></div>
                  </td>
                  <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                  <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager