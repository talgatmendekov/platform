import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import { Input } from '../components/UI/Input'
import { ReactComponent as VisibilityOnIcon } from '../assets/icons/visibilityOn.svg'
import { ReactComponent as VisibilityOffIcon } from '../assets/icons/visibilityOff.svg'
import { signup } from '../store/authSlice'

export const SignUp = () => {
   const dispatch = useDispatch()

   const [visibility, setVisibility] = useState(false)

   const togglePasswordHandler = () => {
      setVisibility((prevVisibility) => !prevVisibility)
   }

   const submitHandler = (formValue) => {
      dispatch(signup(formValue))
   }
   const validationSchema = yup.object({
      username: yup.string().required('Nick обязателен'),
      firstName: yup.string().required('Имя обязательно'),
      lastName: yup.string().required('Фамилия обязательна'),
      email: yup
         .string('Введите почту')
         .email('Введите корректную почту')
         .required('Почта обязательна'),
      password: yup
         .string()
         .min(8, 'Пароль должен состоять минимум из 8 слов')
         .required('Пароль обязателн'),
   })

   const formik = useFormik({
      initialValues: {
         username: '',
         firstName: '',
         lastName: '',
         email: '',
         password: '',
      },
      validationSchema,
      onSubmit: submitHandler,
   })

   const errorMessage = () => {
      const errorValidation =
         (formik.touched.email && formik.errors.email) ||
         (formik.touched.password && formik.errors.password)

      return errorValidation
   }

   return (
      <Container>
         <h1>Регистрация нового пользователя</h1>
         <Form onSubmit={formik.handleSubmit}>
            <Div>
               <label htmlFor="username">Введите nickname</label>
               <Input
                  type="text"
                  id="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                     formik.touched.username && Boolean(formik.errors.username)
                  }
               />
            </Div>
            <Divv>
               <label htmlFor="firstName">Имя</label>
               <Input
                  type="text"
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                     formik.touched.firstName &&
                     Boolean(formik.errors.firstName)
                  }
               />
               <label htmlFor="lastName">Фамилия</label>
               <Input
                  type="text"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                     formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
               />
            </Divv>
            <Div>
               <label htmlFor="email">Введите почту</label>
               <Input
                  type="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
               />
            </Div>
            <Div>
               <label htmlFor="password">Введите пароль</label>
               <Input
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                     formik.touched.password && Boolean(formik.errors.password)
                  }
                  type={visibility ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <button onClick={togglePasswordHandler}>
                           {visibility ? (
                              <VisibilityOnIcon />
                           ) : (
                              <VisibilityOffIcon />
                           )}
                        </button>
                     ),
                  }}
               />
            </Div>
            <Div>
               <label htmlFor="promo">Ваш промокод?</label>

               <Input type="number" />
            </Div>
            <p className="errorMsg">{errorMessage()}</p>
            <Button className="btn" onClick={submitHandler} type="submit">
               Зарегистрироваться
            </Button>
         </Form>
      </Container>
   )
}

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   padding: 85px 127px;
   display: flex;
   flex-direction: column;
   align-items: center;
   h1 {
      font-weight: 900;
      font-size: 32px;
      color: #ffffff;
      padding-bottom: 63px;
   }
`

const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   align-items: center;
   label {
      font-size: 16px;
      color: #ffffff;
      font-weight: 500;
   }
   .errorMsg {
      color: red;
   }
   .btn {
      margin: 86px 0;
      width: 320px;
      height: 45px;
      background: linear-gradient(89.97deg, #5748ff 19.47%, #873eff 66.79%);
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 700;
   }
   button {
      border: none;
      cursor: pointer;
      background-color: inherit;
      padding: 0;
   }
`
const Div = styled.div`
   display: flex;
   gap: 2rem;
`
const Divv = styled.div`
   display: flex;
   margin-left: 27%;
   gap: 2rem;
`
