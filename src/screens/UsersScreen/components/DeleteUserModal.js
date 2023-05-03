import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { deleteUser } from '../../../redux/actions/userActions'
import { USER_DELETE_RESET } from '../../../redux/constants/userConstants'

const DeleteUserModal = ({ item }) => {
  const dispatch = useDispatch()

  const [deleteUserModal, setDeleteUserModal] = useState(false)

  const { loadingUserDelete, successUserDelete } = useSelector((state) => state.userDelete)

  const closeModalDeleteUser = useCallback(() => {
    return setDeleteUserModal(false)
  }, [])

  useEffect(() => {
    if (successUserDelete) {
      closeModalDeleteUser()
      dispatch({ type: USER_DELETE_RESET })
    }
  }, [closeModalDeleteUser, dispatch, successUserDelete])

  const openModalDeleteUser = () => {
    setDeleteUserModal(true)
  }
  const handleDeleteUserByAdmin = (e) => {
    e.preventDefault()
    dispatch(deleteUser(item))
  }

  return (
    <CustomModal
      openButton={
        <IconButton color='error' onClick={openModalDeleteUser}>
          <Delete />
        </IconButton>
      }
      isOpen={deleteUserModal}
      title={'Eliminar Usuario'}
      children={
        <>
          Esta seguro de que desea eliminar el usuario <b>{item.email}</b>? Esta accion no puede deshacerse.
        </>
      }
      handleClose={closeModalDeleteUser}
      actionButtons={
        <>
          <Button color='secondary' onClick={closeModalDeleteUser} variant='contained'>
            Cancelar
          </Button>
          <Button
            color='secondary'
            type='submit'
            disabled={loadingUserDelete}
            variant='contained'
            form='Eliminar Usuario'
          >
            {loadingUserDelete ? 'Eliminando' : successUserDelete ? 'Eliminado' : 'Eliminar'}
          </Button>
        </>
      }
      handleSubmit={handleDeleteUserByAdmin}
    />
  )
}

export default DeleteUserModal
