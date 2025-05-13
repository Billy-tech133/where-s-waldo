import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from 'react-router-dom'

const loginSchema = yup.object({
    identifier: yup
      .string()
      .required("Username or Email is required")
      .test(
        "is-username-or-email",
        "Must be a valid email or username",
        (value) =>
          !!value &&
          (yup.string().email().isValidSync(value) ||
           yup.string().min(3).matches(/^[a-zA-Z0-9_]+$/).isValidSync(value))
      ),
    password: yup.string().min(6, 'password must be atleast 6 characters')
})

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(loginSchema)})

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div  className='flex flex-col items-center justify-center w-[100%] h-[100vh]'>
      <form className="flex flex-col space-y-6 w-[80%] max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <input className=" rounded-xl p-3 shadow-lg shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400" type="text" placeholder='username or email' {...register('identifier')} />
        {errors.identifier && <p className='text-red-400 text-sm'>{errors.identifier.message}</p>}
      <input className=" rounded-xl p-3 shadow-lg shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400" type="password" name='password' placeholder='password' {...register('password')} />
        {errors.password && <p className='text-red-400 text-sm'>{errors.password.message}</p>}
        <input type="submit" className='bg-blue-500 text-white p-4 rounded-md hover:bg-blue-300 cursor-pointer'  />
      </form>
      <div className='flex items-center space-x-24 mt-6'>
        <p >Not yet a member? </p>
        <Link to='/register' className='bg-blue-500 text-white p-4 rounded-md hover:bg-blue-300 cursor-pointer' >Register</Link>
      </div>
    </div>
  )
}

export default Login
