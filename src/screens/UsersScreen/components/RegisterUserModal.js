import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import RegisterUserForm from '../../../components/RegisterUserForm/RegisterUserForm'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { registerUserByAdmin } from '../../../redux/actions/userActions'
import { USER_REGISTER_BY_ADMIN_RESET } from '../../../redux/constants/userConstants'

const RegisterUserModal = () => {
  const dispatch = useDispatch()

  const userInitialState = {
    name: '',
    lastName: '',
    email: '',
    dni: '',
    password: '',
    isAdmin: false,
    isSuper: false,
    isActive: false,
  }

  const [userState, setUserState] = useState(userInitialState)
  const [userModal, setUserModal] = useState(false)

  const { loadingUserRegisterByAdmin, successUserRegisterByAdmin } = useSelector((state) => state.userRegisterByAdmin)

  const closeModal = useCallback(() => {
    return setUserModal(false)
  }, [])

  useEffect(() => {
    let timeOut
    if (successUserRegisterByAdmin) {
      closeModal()
      setUserState({
        name: '',
        lastName: '',
        email: '',
        dni: '',
        password: '',
        isAdmin: false,
        isSuper: false,
        isActive: false,
      })
      timeOut = setTimeout(() => {
        dispatch({ type: USER_REGISTER_BY_ADMIN_RESET })
      }, 1000)
    }
    return () => clearTimeout(timeOut)
  }, [closeModal, dispatch, successUserRegisterByAdmin])

  const openModal = () => {
    setUserModal(true)
  }
  const handleRegisterUserByAdmin = (e) => {
    e.preventDefault()
    dispatch(registerUserByAdmin(userState))
  }

  return (
    <CustomModal
      openButton={
        <Button startIcon={<Add />} onClick={openModal} color='secondary' variant='contained'>
          Nuevo Usuario
        </Button>
      }
      isOpen={userModal}
      title={'Agregar Usuario'}
      children={<RegisterUserForm userState={userState} setUserState={setUserState} register/>}
      handleClose={closeModal}
      actionButtons={
        <>
          <Button color='secondary' onClick={closeModal} variant='contained'>
            Cancelar
          </Button>
          <Button
            color='secondary'
            type='submit'
            disabled={loadingUserRegisterByAdmin}
            variant='contained'
            form='Agregar Usuario'
          >
            {loadingUserRegisterByAdmin ? 'Guardando' : successUserRegisterByAdmin ? 'Guardado' : 'Guardar'}
          </Button>
        </>
      }
      handleSubmit={handleRegisterUserByAdmin}
    />
  )
}

export default RegisterUserModal
