import axios from 'axios'
import * as constants from '../constants/brandConstants'

export const registerBrand = (brandData) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.BRAND_REGISTER_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/brands', brandData, config)

    dispatch({ type: constants.BRAND_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.BRAND_REGISTER_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
export const getBrandList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.BRAND_GET_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/brands', config)

    dispatch({ type: constants.BRAND_GET_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.BRAND_GET_LIST_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
export const getBrandListByCategoryId = (categoryId) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.BRAND_GET_LIST_BY_CATEGORY_ID_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/brands/categories/${categoryId}`, config)

    dispatch({ type: constants.BRAND_GET_LIST_BY_CATEGORY_ID_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.BRAND_GET_LIST_BY_CATEGORY_ID_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}

export const deleteBrand = (brandId) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.BRAND_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.delete(`/api/brands/${brandId}`, config)

    dispatch({ type: constants.BRAND_DELETE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.BRAND_DELETE_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}

export const updateBrand = (brandData) => async (dispatch, getState) => {
  try {
    dispatch({ type: constants.BRAND_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/brands/${brandData._id}`, brandData, config)

    dispatch({ type: constants.BRAND_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: constants.BRAND_UPDATE_FAIL,
      payload: {
        message: error.response && error.response.data.message ? error.response.data.message : error.message,
        status: error.response && error.response.status,
      },
    })
  }
}
