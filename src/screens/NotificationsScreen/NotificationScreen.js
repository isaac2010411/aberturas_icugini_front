import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import { Check } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import CustomPageTable from '../../components/CustomPageTable/CustomPageTable'
import CustomReactTable from '../../components/CustomReactTable/CustomReactTable'
import { getNotificationList, updateNotification } from '../../redux/actions/notificationActions'

const NotificationScreen = () => {
  const dispatch = useDispatch()

  const [data, setData] = useState([])

  const { loadingNotificationsGetAll, notificationsGetAllData, successNotificationsUpdate } = useSelector(
    (state) => state.notificationsGetAll
  )
  const { notificationsUpdateData } = useSelector((state) => state.notificationsUpdate)

  useEffect(() => {
    dispatch(getNotificationList())
  }, [])

  useEffect(() => {
    if (notificationsGetAllData) {
      setData(notificationsGetAllData)
    }
  }, [notificationsGetAllData])

  useEffect(() => {
    if (notificationsUpdateData) {
      const d = data.map((item) => {
        if (item._id === notificationsUpdateData) {
          return {
            ...item,
            view: true,
          }
        }
        return item
      })
      setData(d)
    }
  }, [notificationsUpdateData])

  const handleUpdateNotifications = (notifId) => {
    dispatch(updateNotification(notifId))
  }

  return (
    <CustomPageTable pageName='Notifications' style={{ heigth: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', alignItems: 'center' }}>
        <h4 style={{ fontSize: '1.5rem' }}>Notificaciones</h4>
      </div>
      <Grid item xs={12}>
        {loadingNotificationsGetAll ? (
          <>Cargando</>
        ) : (
          notificationsGetAllData && (
            <CustomReactTable
              columns={[
                {
                  Header: 'Fecha',
                  accessor: 'date',
                  Cell: (prop) => <div>{format(new Date(prop.row.original.date), 'dd-MM-yyyy')}</div>,
                },
                {
                  Header: 'Producto',
                  accessor: 'product',
                },
                {
                  Header: 'Limite',
                  accessor: 'limit',
                },
                {
                  Header: 'Unidades',
                  accessor: 'units',
                },
                {
                  Header: '',
                  accessor: 'actions',
                  Cell: (prop) => (
                    <div>
                      <IconButton onClick={() => handleUpdateNotifications(prop.row.original._id)}>
                        <Check color={Boolean(prop.row.original.view) === true ? 'success' : 'action'} />
                      </IconButton>
                    </div>
                  ),
                },
              ]}
              data={data}
            />
          )
        )}
      </Grid>
    </CustomPageTable>
  )
}

export default NotificationScreen
