import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardContent } from '@mui/material'
import ProductForm from '../../../components/ProductForm/ProductForm'
import { PRODUCT_GET_ALL_RESET, PRODUCT_REGISTER_RESET } from '../../../redux/constants/productConstants'
import { registerProduct } from '../../../redux/actions/productActions'
import { getCategoryList } from '../../../redux/actions/categoryActions'

const RegisterProduct = ({ closeRegisterPoduct }) => {
  const dispatch = useDispatch()

  const productInitialState = {
    categoryId: '',
    brandId: '',
    name: '',
    description: '',
    images: '',
    publicPrice: '',
    unitPrice: '',
    published: true,
    revenue: '',
    quantity: '',
    quantityAlert: 20,
    height: '',
    width: '',
  }

  const [productState, setProductState] = useState(productInitialState)

  const { successProductRegister } = useSelector((state) => state.productRegister)

  useEffect(() => {
    dispatch(getCategoryList())
  }, [dispatch])
  useEffect(() => {
    if (successProductRegister) {
      dispatch({ type: PRODUCT_GET_ALL_RESET })
      dispatch({ type: PRODUCT_REGISTER_RESET })
      closeRegisterPoduct()
      setProductState({})
    }
  }, [successProductRegister, dispatch, closeRegisterPoduct])

  const handleRegisterProduct = (e) => {
    e.preventDefault()
    dispatch(registerProduct(productState))
  }

  return (
    <CardContent>
      <form onSubmit={handleRegisterProduct}>
        <ProductForm
          setProductState={setProductState}
          productState={productState}
          closeRegisterPoduct={closeRegisterPoduct}
        />
      </form>
    </CardContent>
  )
}

export default RegisterProduct
