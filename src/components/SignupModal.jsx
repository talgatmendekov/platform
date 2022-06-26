/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'
import { signup } from '../store/authSlice'
import Button from './UI/Button'
import { Input } from './UI/Input'
import { ReactComponent as VisibilityOnIcon } from '../assets/icons/visibilityOn.svg'
import { ReactComponent as VisibilityOffIcon } from '../assets/icons/visibilityOff.svg'

const BackDrop = (props) => {
   // eslint-disable-next-line jsx-a11y/no-static-element-interactions
   return <div onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
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
         <Modal>
            <div onClick={props.onConfirm}>
               <i className="ri-close-line" />
            </div>
            <FormContainer>
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
                           formik.touched.username &&
                           Boolean(formik.errors.username)
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
                           formik.touched.lastName &&
                           Boolean(formik.errors.lastName)
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
                        error={
                           formik.touched.email && Boolean(formik.errors.email)
                        }
                     />
                  </Div>
                  <Div>
                     <label htmlFor="password">Введите пароль</label>
                     <Input
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                           formik.touched.password &&
                           Boolean(formik.errors.password)
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
            </FormContainer>
         </Modal>
      </Container>
   )
}

export const SignupModal = (props) => {
   return (
      <>
         {ReactDOM.createPortal(
            <BackDrop onConfirm={props.onConfirm} />,
            document.getElementById('backdrop-root')
         )}
         {ReactDOM.createPortal(
            <ModalOverlay
               title={props.title}
               message={props.message}
               onConfirm={props.onConfirm}
            >
               {props.children}
            </ModalOverlay>,
            document.getElementById('modal-root')
         )}
      </>
   )
}

const Container = styled.div`
   position: fixed;
   z-index: 30;
   width: 100%;
   height: 100vh;
   backdrop-filter: blur(5px);
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0;
   right: 0;

   h1 {
      font-weight: 900;
      font-size: 32px;
      color: #ffffff;
      padding-bottom: 2rem;
   }
`
const Modal = styled.div`
   width: 821px;
   height: 611px;
   padding: 1rem;
   border: 1px solid #ffffff;
   background-color: #000000;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
   animation: slide-down 300ms ease-out forwards;
   i {
      color: #ffffff;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 2rem;
   }
`
const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
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
   margin-left: 18%;
   gap: 2rem;
`
