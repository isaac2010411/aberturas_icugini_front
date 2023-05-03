import * as constants from '../constants/brandConstants'

export const brandRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.BRAND_REGISTER_REQUEST:
      return { loadingBrandRegister: true }
    case constants.BRAND_REGISTER_SUCCESS:
      return {
        loadingBrandRegister: false,
        successBrandRegister: true,
        brandRegisterData: action.payload,
      }
    case constants.BRAND_REGISTER_FAIL:
      return {
        loadingBrandRegister: false,
        errorBrandRegister: action.payload,
      }
    case constants.BRAND_REGISTER_RESET:
      return {}
    default:
      return state
  }
}
export const brandGetListReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.BRAND_GET_LIST_REQUEST:
      return { loadingBrandGetList: true }
    case constants.BRAND_GET_LIST_SUCCESS:
      return {
        loadingBrandGetList: false,
        successBrandGetList: true,
        brandGetListData: action.payload,
      }
    case constants.BRAND_GET_LIST_FAIL:
      return {
        loadingBrandGetList: false,
        errorBrandGetList: action.payload,
      }
    case constants.BRAND_GET_LIST_RESET:
      return {}
    default:
      return state
  }
}
export const brandGetListByCategoryIdReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.BRAND_GET_LIST_BY_CATEGORY_ID_REQUEST:
      return { loadingBrandGetListByCategoryId: true }
    case constants.BRAND_GET_LIST_BY_CATEGORY_ID_SUCCESS:
      return {
        loadingBrandGetListByCategoryId: false,
        successBrandGetListByCategoryId: true,
        brandGetListByCategoryIdData: action.payload,
      }
    case constants.BRAND_GET_LIST_BY_CATEGORY_ID_FAIL:
      return {
        loadingBrandGetListByCategoryId: false,
        errorBrandGetListByCategoryId: action.payload,
      }
    case constants.BRAND_GET_LIST_BY_CATEGORY_ID_RESET:
      return {}
    default:
      return state
  }
}

export const brandDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.BRAND_DELETE_REQUEST:
      return { loadingBrandDelete: true }
    case constants.BRAND_DELETE_SUCCESS:
      return {
        loadingBrandDelete: false,
        successBrandDelete: true,
        brandDeleteData: action.payload,
      }
    case constants.BRAND_DELETE_FAIL:
      return {
        loadingBrandDelete: false,
        errorBrandDelete: action.payload,
      }
    case constants.BRAND_DELETE_RESET:
      return {}
    default:
      return state
  }
}
export const brandUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.BRAND_UPDATE_REQUEST:
      return { loadingBrandUpdate: true }
    case constants.BRAND_UPDATE_SUCCESS:
      return {
        loadingBrandUpdate: false,
        successBrandUpdate: true,
        brandUpdateData: action.payload,
      }
    case constants.BRAND_UPDATE_FAIL:
      return {
        loadingBrandUpdate: false,
        errorBrandUpdate: action.payload,
      }
    case constants.BRAND_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
