import * as constants from '../constants/categoryConstants'

export const categoryRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CATEGORY_REGISTER_REQUEST:
      return { loadingCategoryRegister: true }
    case constants.CATEGORY_REGISTER_SUCCESS:
      return {
        loadingCategoryRegister: false,
        successCategoryRegister: true,
        categoryRegisterData: action.payload,
      }
    case constants.CATEGORY_REGISTER_FAIL:
      return {
        loadingCategoryRegister: false,
        errorCategoryRegister: action.payload,
      }
    case constants.CATEGORY_REGISTER_RESET:
      return {}
    default:
      return state
  }
}
export const categoryGetListReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CATEGORY_GET_LIST_REQUEST:
      return { loadingCategoryGetList: true }
    case constants.CATEGORY_GET_LIST_SUCCESS:
      return {
        loadingCategoryGetList: false,
        successCategoryGetList: true,
        categoryGetListData: action.payload,
      }
    case constants.CATEGORY_GET_LIST_FAIL:
      return {
        loadingCategoryGetList: false,
        errorCategoryGetList: action.payload,
      }
    case constants.CATEGORY_GET_LIST_RESET:
      return {}
    default:
      return state
  }
}
export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CATEGORY_DELETE_REQUEST:
      return { loadingCategoryDelete: true }
    case constants.CATEGORY_DELETE_SUCCESS:
      return {
        loadingCategoryDelete: false,
        successCategoryDelete: true,
        categoryDeleteData: action.payload,
      }
    case constants.CATEGORY_DELETE_FAIL:
      return {
        loadingCategoryDelete: false,
        errorCategoryDelete: action.payload,
      }
    case constants.CATEGORY_DELETE_RESET:
      return {}
    default:
      return state
  }
}
export const categoryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.CATEGORY_UPDATE_REQUEST:
      return { loadingCategoryUpdate: true }
    case constants.CATEGORY_UPDATE_SUCCESS:
      return {
        loadingCategoryUpdate: false,
        successCategoryUpdate: true,
        categoryUpdateData: action.payload,
      }
    case constants.CATEGORY_UPDATE_FAIL:
      return {
        loadingCategoryUpdate: false,
        errorCategoryUpdate: action.payload,
      }
    case constants.CATEGORY_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
