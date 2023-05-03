import axios from 'axios'
import * as constants from '../constants/categoryConstants'

export const registerCategory = (categoryData) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.CATEGORY_REGISTER_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/categories', categoryData, config)

    dispatch({ type: constants.CATEGORY_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.CATEGORY_REGISTER_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
export const getCategoryList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.CATEGORY_GET_LIST_REQUEST })

    const { data } = await axios.get('/api/categories')

    dispatch({ type: constants.CATEGORY_GET_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.CATEGORY_GET_LIST_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
export const deleteCategory = (categoryId) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.CATEGORY_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.delete(`/api/categories/${categoryId}`, config)

    dispatch({ type: constants.CATEGORY_DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.CATEGORY_DELETE_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}

export const updateCategory = (categoryData) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.CATEGORY_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/categories/${categoryData._id}`, categoryData, config)

    dispatch({ type: constants.CATEGORY_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.CATEGORY_UPDATE_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
