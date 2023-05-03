import * as constants from '../constants/productConstants'

export const productRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.PRODUCT_REGISTER_REQUEST:
      return { loadingProductRegister: true }
    case constants.PRODUCT_REGISTER_SUCCESS:
      return {
        loadingProductRegister: false,
        successProductRegister: true,
        productRegisterData: action.payload,
      }
    case constants.PRODUCT_REGISTER_FAIL:
      return {
        loadingProductRegister: false,
        errorProductRegister: action.payload,
      }
    case constants.PRODUCT_REGISTER_RESET:
      return {}
    default:
      return state
  }
}

export const productGetAllReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.PRODUCT_GET_ALL_REQUEST:
      return { loadingProductGetAll: true }
    case constants.PRODUCT_GET_ALL_SUCCESS:
      return {
        loadingProductGetAll: false,
        successProductGetAll: true,
        productGetAllData: action.payload,
      }
    case constants.PRODUCT_GET_ALL_FAIL:
      return {
        loadingProductGetAll: false,
        errorProductGetAll: action.payload,
      }
    case constants.PRODUCT_GET_ALL_RESET:
      return {}
    default:
      return state
  }
}
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.PRODUCT_DELETE_REQUEST:
      return { loadingProductDelete: true }
    case constants.PRODUCT_DELETE_SUCCESS:
      return {
        loadingProductDelete: false,
        successProductDelete: true,
        productDeleteData: action.payload,
      }
    case constants.PRODUCT_DELETE_FAIL:
      return {
        loadingProductDelete: false,
        errorProductDelete: action.payload,
      }
    case constants.PRODUCT_DELETE_RESET:
      return {}
    default:
      return state
  }
}
export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.PRODUCT_UPDATE_REQUEST:
      return { loadingProductUpdate: true }
    case constants.PRODUCT_UPDATE_SUCCESS:
      return {
        loadingProductUpdate: false,
        successProductUpdate: true,
        productUpdateData: action.payload,
      }
    case constants.PRODUCT_UPDATE_FAIL:
      return {
        loadingProductUpdate: false,
        errorProductUpdate: action.payload,
      }
    case constants.PRODUCT_UPDATE_RESET:
      return {}
    default:
      return state
  }
}

export const productReduceQuantityReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.PRODUCT_REDUCE_QUANTITY_REQUEST:
      return { loadingProductReduceQuantity: true }
    case constants.PRODUCT_REDUCE_QUANTITY_SUCCESS:
      return {
        loadingProductReduceQuantity: false,
        successProductReduceQuantity: true,
        productReduceQuantityData: action.payload,
      }
    case constants.PRODUCT_REDUCE_QUANTITY_FAIL:
      return {
        loadingProductReduceQuantity: false,
        errorProductReduceQuantity: action.payload,
      }
    case constants.PRODUCT_REDUCE_QUANTITY_RESET:
      return {}
    default:
      return state
  }
}
