import * as constants from '../constants/notifications'

export const notificationsGetAllReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.NOTIFICATIONS_GET_LIST_REQUEST:
      return { loadingNotificationsGetAll: true }
    case constants.NOTIFICATIONS_GET_LIST_SUCCESS:
      return {
        loadingNotificationsGetAll: false,
        successNotificationsGetAll: true,
        notificationsGetAllData: action.payload,
      }
    case constants.NOTIFICATIONS_GET_LIST_FAIL:
      return {
        loadingNotificationsGetAll: false,
        errorNotificationsGetAll: action.payload,
      }
    case constants.NOTIFICATIONS_GET_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const notificationsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.NOTIFICATIONS_UPDATE_REQUEST:
      return { loadingNotificationsUpdate: true }
    case constants.NOTIFICATIONS_UPDATE_SUCCESS:
      return {
        loadingNotificationsUpdate: false,
        successNotificationsUpdate: true,
        notificationsUpdateData: action.payload,
      }
    case constants.NOTIFICATIONS_UPDATE_FAIL:
      return {
        loadingNotificationsUpdate: false,
        errorNotificationsUpdate: action.payload,
      }
    case constants.NOTIFICATIONS_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
