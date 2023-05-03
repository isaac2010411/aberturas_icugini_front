import axios from 'axios'
import * as constants from '../constants/notifications'

export const getNotificationList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.NOTIFICATIONS_GET_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/notifications', config)

    dispatch({ type: constants.NOTIFICATIONS_GET_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.NOTIFICATIONS_GET_LIST_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}

export const updateNotification = (notificationId) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.NOTIFICATIONS_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/notifications/${notificationId}`,{}, config)

    dispatch({ type: constants.NOTIFICATIONS_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.NOTIFICATIONS_UPDATE_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
