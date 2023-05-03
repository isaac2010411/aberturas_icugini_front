import axios from 'axios'
import * as constants from '../constants/productConstants'

export const registerProduct = (productData) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.PRODUCT_REGISTER_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    let formData = new FormData()

    for (let key in productData) {
      formData.append(key, productData[key])
    }

    const { data } = await axios.post('/api/products', formData, config)

    dispatch({ type: constants.PRODUCT_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_REGISTER_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
export const updateProduct = (productData) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.PRODUCT_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    let formData = new FormData()

    for (let key in productData) {
      formData.append(key, productData[key])
    }

    const { data } = await axios.put(`/api/products/${productData._id}`, formData, config)

    dispatch({ type: constants.PRODUCT_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_UPDATE_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
export const getAllProducts = (categoryId) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.PRODUCT_GET_ALL_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    let url = categoryId ? `/api/products?category=${categoryId}` : `/api/products`

    const { data } = await axios.get(url, config)

    dispatch({ type: constants.PRODUCT_GET_ALL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_GET_ALL_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
export const deleteProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.PRODUCT_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.delete(`/api/products/${product._id}`, config)

    dispatch({ type: constants.PRODUCT_DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_DELETE_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
export const updateProductQuantity = (productData) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.PRODUCT_REDUCE_QUANTITY_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/quantity`, productData, config)

    dispatch({ type: constants.PRODUCT_REDUCE_QUANTITY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_REDUCE_QUANTITY_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
