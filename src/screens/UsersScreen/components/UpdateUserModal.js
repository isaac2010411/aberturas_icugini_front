import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, IconButton } from '@mui/material'
import { Edit } from '@mui/icons-material'
import RegisterUserForm from '../../../components/RegisterUserForm/RegisterUserForm'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { userUpdateInfo } from '../../../redux/actions/userActions'
import { USER_UPDATE_RESET } from '../../../redux/constants/userConstants'

const UpdateUserModal = ({ item }) => {
  const dispatch = useDispatch()

  const [userState, setUserState] = useState(item)
  const [updateUserModal, setUpdateUserModal] = useState(false)

  const { loadingUserUpdate, successUserUpdate } = useSelector((state) => state.userUpdate)

  const closeModalUpdateUser = useCallback(() => {
    return setUpdateUserModal(false)
  }, [])

  useEffect(() => {
    if (successUserUpdate) {
      closeModalUpdateUser()
      setUserState({})
      dispatch({ type: USER_UPDATE_RESET })
    }
  }, [closeModalUpdateUser, dispatch, successUserUpdate])

  const openModalUpdateUser = () => {
    setUpdateUserModal(true)
  }

  const handleUpdateUserByAdmin = (e) => {
    e.preventDefault()
    dispatch(userUpdateInfo(userState))
  }

  return (
    <CustomModal
      openButton={
        <IconButton color='primary' onClick={openModalUpdateUser}>
          <Edit />
        </IconButton>
      }
      isOpen={updateUserModal}
      title={'Editar Usuario'}
      children={<RegisterUserForm userState={userState} setUserState={setUserState} />}
      handleClose={closeModalUpdateUser}
      actionButtons={
        <>
          <Button color='secondary' onClick={closeModalUpdateUser} variant='contained'>
            Cancelar
          </Button>
          <Button
            color='secondary'
            type='submit'
            disabled={loadingUserUpdate}
            variant='contained'
            form='Editar Usuario'
          >
            {loadingUserUpdate ? 'Editando' : successUserUpdate ? 'Editado' : 'Editar'}
          </Button>
        </>
      }
      handleSubmit={handleUpdateUserByAdmin}
    />
  )
}

export default UpdateUserModal
