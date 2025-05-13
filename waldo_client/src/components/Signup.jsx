import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Link } from 'react-router-dom'

const schema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('lastname is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('invalid email').required('email is required'),
    password: Yup.string().min(6, 'password must be atleast 6 characters')
})

const Signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data) => {
        console.log(data)
    }


  return ( 
    <div className='flex flex-col items-center justify-center w-[100%] h-[100vh]'>
      <form className="flex flex-col space-y-6 w-[80%] max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <input className=" rounded-xl p-3 shadow-lg shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400" type="text" name="firstname" placeholder='firstname' {...register('firstname')}/>
        {errors.firstname && <p className='text-red-400 text-sm'>{errors.firstname.message}</p>}
        <input className=" rounded-xl p-3 shadow-lg shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400" type="text" name="lastname" placeholder='lastname' {...register('lastname')}/>
        {errors.lastname && <p className='text-red-400 text-sm'>{errors.lastname.message}</p>}
        <input className=" rounded-xl p-3 shadow-lg shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400" type="text" name='username' placeholder='username' {...register('username')}/>
        {errors.username && <p className='text-red-400 text-sm'>{errors.username.message}</p>}
        <input className=" rounded-xl p-3 shadow-lg shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400" type="email" name='email' placeholder='email' {...register('email')} />
        {errors.email && <p className='text-red-400 text-sm'>{errors.email.message}</p>}
        <input className=" rounded-xl p-3 shadow-lg shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400" type="password" name='password' placeholder='password' {...register('password')} />
        {errors.password && <p className='text-red-400 text-sm'>{errors.password.message}</p>}
        <input type="submit" className='bg-blue-500 text-white p-4 rounded-md hover:bg-blue-300 cursor-pointer'  />
      </form>
      <div className='flex items-center space-x-24 mt-6'>
        <p >Already registered? </p>
        <Link to='/login' className='bg-blue-500 text-white p-4 rounded-md hover:bg-blue-300 cursor-pointer' >Login</Link>
      </div>
    </div>
  )
}

export default Signup
