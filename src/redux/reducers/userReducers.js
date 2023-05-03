import * as constants from '../constants/userConstants'

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.USER_REGISTER_REQUEST:
      return { loadingUserRegister: true }
    case constants.USER_REGISTER_SUCCESS:
      return {
        loadingUserRegister: false,
        successUserRegister: true,
        user: action.payload,
      }
    case constants.USER_REGISTER_FAIL:
      return {
        loadingUserRegister: false,
        errorUserRegister: action.payload,
      }
    case constants.USER_REGISTER_RESET:
      return {}
    default:
      return state
  }
}
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.USER_LOGIN_REQUEST:
      return { loadingUserInfo: true }
    case constants.USER_LOGIN_SUCCESS:
      return { loadingUserInfo: false, userInfo: action.payload, successUserInfo: true }
    case constants.USER_LOGIN_FAIL:
      return { loadingUserInfo: false, errorUserInfo: action.payload }
    case constants.USER_LOGOUT:
      localStorage.removeItem('setFMI')
      return {}
    default:
      return state
  }
}
export const userUpdateReducer = (state = { userUpdated: {} }, action) => {
  switch (action.type) {
    case constants.USER_UPDATE_REQUEST:
      return { loadingUserUpdate: true }
    case constants.USER_UPDATE_SUCCESS:
      return {
        loadingUserUpdate: false,
        successUserUpdate: true,
        userUpdated: action.payload,
      }
    case constants.USER_UPDATE_FAIL:
      return { loadingUserUpdate: false, errorUserUpdate: action.payload }
    case constants.USER_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
export const userUpdateMyInfoReducer = (state = { userUpdateMyInfo: {} }, action) => {
  switch (action.type) {
    case constants.USER_UPDATE_MY_INFO_REQUEST:
      return { loadingUpdateMyInfo: true }
    case constants.USER_UPDATE_MY_INFO_SUCCESS:
      return {
        loadingUpdateMyInfo: false,
        successUpdateMyInfo: true,
        userUpdateMyInfo: action.payload,
      }
    case constants.USER_UPDATE_MY_INFO_FAIL:
      return { loadingUpdateMyInfo: false, errorUpdateMyInfo: action.payload }
    case constants.USER_UPDATE_MY_INFO_RESET:
      return {}
    default:
      return state
  }
}
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case constants.USER_LIST_REQUEST:
      return { loadingUserList: true }
    case constants.USER_LIST_SUCCESS:
      return {
        loadingUserList: false,
        successUserList: true,
        userListData: action.payload,
      }
    case constants.USER_LIST_FAIL:
      return { loadingUserList: false, errorUserList: action.payload }
    case constants.USER_LIST_RESET:
      return {}
    default:
      return state
  }
}
export const userRegisterByAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.USER_REGISTER_BY_ADMIN_REQUEST:
      return { loadingUserRegisterByAdmin: true }
    case constants.USER_REGISTER_BY_ADMIN_SUCCESS:
      return {
        loadingUserRegisterByAdmin: false,
        successUserRegisterByAdmin: true,
        registerUserByadminData: action.payload,
      }
    case constants.USER_REGISTER_BY_ADMIN_FAIL:
      return {
        loadingUserRegisterByAdmin: false,
        errorUserRegisterByAdmin: action.payload,
      }
    case constants.USER_REGISTER_BY_ADMIN_RESET:
      return {}
    default:
      return state
  }
}
export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.USER_DELETE_REQUEST:
      return { loadingUserDelete: true }
    case constants.USER_DELETE_SUCCESS:
      return {
        loadingUserDelete: false,
        successUserDelete: true,
        userDeleted: action.payload,
      }
    case constants.USER_DELETE_FAIL:
      return {
        loadingUserDelete: false,
        errorUserDelete: action.payload,
      }
    case constants.USER_DELETE_RESET:
      return {}
    default:
      return state
  }
}
