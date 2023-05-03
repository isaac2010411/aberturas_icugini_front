import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardContent } from '@mui/material'
import ProductForm from '../../../components/ProductForm/ProductForm'
import { PRODUCT_GET_ALL_RESET, PRODUCT_UPDATE_RESET } from '../../../redux/constants/productConstants'
import { getCategoryList } from '../../../redux/actions/categoryActions'
import { updateProduct } from '../../../redux/actions/productActions'
import { formatCurrencyToNum } from '../../../shared/helpers/commonsFunctions'

const UpdateProduct = ({ updateProductState, closeModalUpdateProduct, setData }) => {
  const dispatch = useDispatch()

  const [productState, setProductState] = useState({
    ...updateProductState,
    unitPrice: formatCurrencyToNum(updateProductState.unitPrice),
    publicPrice:
      (Number(updateProductState.revenue) * formatCurrencyToNum(updateProductState.unitPrice)) / 100 +
      formatCurrencyToNum(updateProductState.unitPrice),
    addQuantitiy: 0,
  })

  const { successProductUpdate } = useSelector((state) => state.productUpdate)

  useEffect(() => {
    dispatch(getCategoryList())
  }, [dispatch])

  useEffect(() => {
    if (successProductUpdate) {
      dispatch({ type: PRODUCT_GET_ALL_RESET })
      dispatch({ type: PRODUCT_UPDATE_RESET })
      closeModalUpdateProduct()
    }
  }, [successProductUpdate, dispatch, closeModalUpdateProduct])

  const handleUpdateProduct = (e) => {
    e.preventDefault()

    dispatch(
      updateProduct({ ...productState, quantity: Number(productState.quantity) + Number(productState.addQuantitiy) })
    )
  }

  return (
    <CardContent>
      <form onSubmit={handleUpdateProduct}>
        <ProductForm
          setProductState={setProductState}
          productState={productState}
          closeRegisterPoduct={closeModalUpdateProduct}
          update
        />
      </form>
    </CardContent>
  )
}

export default UpdateProduct
