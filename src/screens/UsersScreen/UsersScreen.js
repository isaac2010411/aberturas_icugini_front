import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ReactTable from '../../components/CustomReactTable/CustomReactTable'
import Loader from '../../components/Loader/Loader'
import CustomPageTable from '../../components/CustomPageTable/CustomPageTable'
import RegisterUserModal from './components/RegisterUserModal'
import UpdateUserModal from './components/UpdateUserModal'
import DeleteUserModal from './components/DeleteUserModal'
import { getUserList } from '../../redux/actions/userActions'
import styles from './styles/usersScreenStyles'

const useStyles = makeStyles(styles)

const UsersScreen = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [data, setData] = useState([])

  const { registerUserByadminData } = useSelector((state) => state.userRegisterByAdmin)
  const { userListData, loadingUserList } = useSelector((state) => state.userList)
  const { userUpdated } = useSelector((state) => state.userUpdate)
  const { userDeleted } = useSelector((state) => state.userDelete)

  useEffect(() => {
    dispatch(getUserList())
  }, [dispatch])
  useEffect(() => {
    if (userListData) {
      const listUser = userListData.map((item) => {
        return {
          id: item._id,
          name: item.name,
          email: item.email,
          status: item.status === 'active' ? 'Activo' : 'Inactivo',
          role:
            item.role === 'user'
              ? 'Usuario'
              : item.role === 'superadministrator'
              ? 'SuperAdministrador'
              : 'Administrador',
          actions: (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <UpdateUserModal
                item={{
                  ...item,
                  isActive: item.status === 'active',
                  lastName: item.lastName ? item.lastName : '',
                  dni: item.dni ? item.dni : '',
                  password: '',
                }}
              />
              <DeleteUserModal item={item} />
            </div>
          ),
        }
      })
      setData(listUser)
    }
  }, [userListData])
  useEffect(() => {
    if (registerUserByadminData) {
      setData((prev) => [
        ...prev,
        {
          id: registerUserByadminData._id,
          name: registerUserByadminData.name,
          email: registerUserByadminData.email,
          status: registerUserByadminData.status === 'active' ? 'Activo' : 'Inactivo',
          role:
            registerUserByadminData.role === 'user'
              ? 'Usuario'
              : registerUserByadminData.role === 'superadministrator'
              ? 'SuperAdministrador'
              : 'Administrador',
          actions: (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <UpdateUserModal
                item={{
                  ...registerUserByadminData,
                  isActive: registerUserByadminData.status === 'active',
                  lastName: registerUserByadminData.lastName ? registerUserByadminData.lastName : '',
                  dni: registerUserByadminData.dni ? registerUserByadminData.dni : '',
                  password: '',
                }}
              />
              <DeleteUserModal item={registerUserByadminData} />
            </div>
          ),
        },
      ])
    } else if (userUpdated) {
      setData((prev) =>
        prev.map((item) => {
          if (item.id === userUpdated._id) {
            item = {
              id: userUpdated._id,
              name: userUpdated.name,
              email: userUpdated.email,
              status: userUpdated.status === 'active' ? 'Activo' : 'Inactivo',
              role:
                userUpdated.role === 'user'
                  ? 'Usuario'
                  : userUpdated.role === 'superadministrator'
                  ? 'SuperAdministrador'
                  : 'Administrador',
              actions: (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <UpdateUserModal
                    item={{
                      ...userUpdated,
                      isActive: userUpdated.status === 'active',
                      lastName: userUpdated.lastName ? userUpdated.lastName : '',
                      dni: userUpdated.dni ? userUpdated.dni : '',
                      password: '',
                    }}
                  />
                  <DeleteUserModal item={userUpdated} />
                </div>
              ),
            }
          }
          return item
        })
      )
    } else if (userDeleted) {
      setData((prev) => prev.filter((item) => item.id !== userDeleted._id))
    }
  }, [userUpdated, registerUserByadminData, userDeleted])

  return (
    <CustomPageTable pageName='Usuarios'>
      <div className={classes.screenTitleContainer}>
        <h4 className={classes.screenTitle}>Usuarios</h4>
        <RegisterUserModal />
      </div>
      {loadingUserList ? (
        <div className={classes.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <Card>
          <ReactTable
            columns={[
              {
                Header: 'Nombre',
                accessor: 'name',
              },
              {
                Header: 'Email',
                accessor: 'email',
              },
              {
                Header: 'Estado',
                accessor: 'status',
                Cell: ({ cell: { value } }) => {
                  return (
                    <span
                      className={classes.spanStatus}
                      style={{
                        color: value === 'Activo' ? '#229A16' : '#B72136',
                        backgroundColor: value === 'Activo' ? 'rgba(84, 214, 44, 0.16)' : 'rgba(255, 72, 66, 0.16)',
                      }}
                    >
                      {value}
                    </span>
                  )
                },
              },
              {
                Header: 'Rol',
                accessor: 'role',
              },
              {
                Header: '',
                accessor: 'actions',
                Cell: (prop) => <div style={{ textAlign: 'end' }}>{prop.row.original.actions}</div>,
              },
            ]}
            data={data}
          />
        </Card>
      )}
    </CustomPageTable>
  )
}

export default UsersScreen
