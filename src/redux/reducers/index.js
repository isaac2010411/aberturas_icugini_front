import { combineReducers } from 'redux'

import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
  userUpdateMyInfoReducer,
  userListReducer,
  userRegisterByAdminReducer,
  userDeleteReducer,
} from './userReducers'

import {
  categoryRegisterReducer,
  categoryGetListReducer,
  categoryDeleteReducer,
  categoryUpdateReducer,
} from './categoryReducers'

import {
  brandRegisterReducer,
  brandGetListReducer,
  brandGetListByCategoryIdReducer,
  brandDeleteReducer,
  brandUpdateReducer,
} from './brandReducers'

import {
  productRegisterReducer,
  productGetAllReducer,
  productDeleteReducer,
  productUpdateReducer,
  productReduceQuantityReducer,
} from './productsReducers'

import { notificationsGetAllReducer, notificationsUpdateReducer } from './notificationsReducers'

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  userUpdateMyInfo: userUpdateMyInfoReducer,
  userList: userListReducer,
  userRegisterByAdmin: userRegisterByAdminReducer,
  userDelete: userDeleteReducer,

  categoryRegister: categoryRegisterReducer,
  categoryGetList: categoryGetListReducer,
  categoryDelete: categoryDeleteReducer,
  categoryUpdate: categoryUpdateReducer,

  brandRegister: brandRegisterReducer,
  brandGetList: brandGetListReducer,
  brandGetListByCategoryId: brandGetListByCategoryIdReducer,
  brandDelete: brandDeleteReducer,
  brandUpdate: brandUpdateReducer,

  productRegister: productRegisterReducer,
  productGetAll: productGetAllReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  productReduceQuantity: productReduceQuantityReducer,

  notificationsGetAll: notificationsGetAllReducer,
  notificationsUpdate: notificationsUpdateReducer,
})
