import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Notifications } from '@mui/icons-material'
import CartBadge from './components/CartBadge'
import cartButtonStyles from './styles/cartButtonStyles'
import { SocketContext } from '../../contexts/socketContext'
import { useDispatch, useSelector } from 'react-redux'
import { getNotificationList } from '../../redux/actions/notificationActions'

const useStyles = makeStyles(cartButtonStyles)

const NotificationsButton = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  const [notif, setNotif] = useState(0)
  const { socket } = useContext(SocketContext)

  const dispatch = useDispatch()
  const { notificationsGetAllData } = useSelector((state) => state.notificationsGetAll)
  const { notificationsUpdateData } = useSelector((state) => state.notificationsUpdate)

  useEffect(() => {
    dispatch(getNotificationList())
  }, [])

  useEffect(() => {
    if (notificationsGetAllData) {
      const noti = notificationsGetAllData.filter((item) => !item.view)
      setNotif(noti.length)
    }
  }, [notificationsGetAllData])

  useEffect(() => {
    socket.on('new-substract', (payload) => {
      console.log(payload)
      setNotif((prev) => prev + payload)
    })
  }, [socket])

  useEffect(() => {
    if (notificationsUpdateData) {
      setNotif((prev) => prev - 1)
    }
  }, [notificationsUpdateData])

  return (
    <IconButton aria-label='cart' onClick={() => navigate('/notifications')}>
      <CartBadge color='secondary' badgeContent={notif}>
        <Notifications color='inherit' className={classes.animationIcon} />
      </CartBadge>
    </IconButton>
  )
}

export default NotificationsButton
