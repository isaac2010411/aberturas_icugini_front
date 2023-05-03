import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Avatar, Button, Card, CardHeader, Typography } from '@mui/material'
import { Add, LocalMall } from '@mui/icons-material'
import ReactTable from '../../components/CustomReactTable/CustomReactTable'
import Loader from '../../components/Loader/Loader'
import CustomPageTable from '../../components/CustomPageTable/CustomPageTable'
import UpdateProduct from './components/UpdateProduct'
import RegisterProduct from './components/RegisterProduct'
import productMapper from '../../shared/mappers/productMapper'
import { getAllProducts } from '../../redux/actions/productActions'
import { PRODUCT_GET_ALL_RESET } from '../../redux/constants/productConstants'
import NotDataFound from '../../components/NotDataFound/NotDataFound'

const ProductScreen = () => {
  const dispatch = useDispatch()

  const [data, setData] = useState([])
  const [registerProduct, setRegisterProduct] = useState(false)
  const [updateProductModal, setUpdateProductModal] = useState(false)
  const [updateProductState, setUpdateProductState] = useState({})
  const [isCategoriesAvailable, setIsCategoriesAvailable] = useState(true)
  const [isBrandsAvailable, setIsBrandsAvailable] = useState(true)

  const { productGetAllData, loadingProductGetAll, successProductGetAll } = useSelector((state) => state.productGetAll)
  const { productDeleteData } = useSelector((state) => state.productDelete)

  useEffect(() => {
    if (!successProductGetAll) {
      dispatch(getAllProducts())
    }
  }, [successProductGetAll])
  useEffect(() => {
    if (productGetAllData) {
      const productData = productMapper(productGetAllData.products, setUpdateProductState, setUpdateProductModal)
      setIsBrandsAvailable(productGetAllData.brands.length > 0)
      setIsCategoriesAvailable(productGetAllData.categories.length > 0)
      setData(productData)
    }
  }, [productGetAllData])
  useEffect(() => {
    if (productDeleteData) {
      setData((prev) => prev.filter((item) => item.id !== productDeleteData._id))
    }
  }, [productDeleteData, dispatch])
  useEffect(() => {
    return () => dispatch({ type: PRODUCT_GET_ALL_RESET })
  }, [dispatch])

  const closeRegisterPoduct = () => {
    setRegisterProduct(false)
  }
  const closeModalUpdateProduct = () => {
    setUpdateProductState({})
    setUpdateProductModal(false)
  }
  return (
    <CustomPageTable pageName={'Productos'}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', alignItems: 'center' }}>
        <h4 style={{ fontSize: '1.5rem' }}>Productos</h4>
        <Button
          startIcon={<Add />}
          disabled={!isCategoriesAvailable || !isBrandsAvailable || registerProduct || updateProductModal}
          onClick={() => setRegisterProduct(true)}
          variant='contained'
          color='secondary'
        >
          Nuevo Producto
        </Button>
      </div>

      {registerProduct ? (
        <Card>
          <CardHeader avatar={<LocalMall />} title={<h4>Registrar Producto</h4>} />
          <RegisterProduct closeRegisterPoduct={closeRegisterPoduct} />
        </Card>
      ) : updateProductModal ? (
        <Card>
          <CardHeader avatar={<LocalMall />} title={<h4>Editar Producto</h4>} />
          <UpdateProduct
            update
            closeModalUpdateProduct={closeModalUpdateProduct}
            updateProductState={updateProductState}
            setData={setData}
          />
        </Card>
      ) : (
        <>
          {loadingProductGetAll ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Loader />
            </div>
          ) : productGetAllData && data.length < 1 ? (
            <>
              <NotDataFound
                message={
                  <>
                    <Typography textAlign='center' mt={1}>
                      No hay productos, para agregar uno seleccione{' '}
                      {isCategoriesAvailable && isBrandsAvailable
                        ? ' al menu de categoria y agrege una, luego agrege una marca para anexar el producto'
                        : isBrandsAvailable
                        ? ' al menu de marcas y agrege una para anexar el producto'
                        : ''}
                    </Typography>
                    <Typography textAlign='center' fontWeight='600' mt={1}>
                      NUEVO PRODUCTO
                    </Typography>
                  </>
                }
              />
            </>
          ) : (
            <Card>
              <ReactTable
                columns={[
                  {
                    Header: 'Nombre',
                    accessor: 'name',
                    Cell: (prop) => (
                      <div style={{ display: 'flex', justifyContent: 'start' }}>
                        <Avatar
                          alt={prop.row.original.name}
                          variant='square'
                          src={`${axios.defaults.baseURL}/${prop.row.original.image}`}
                          sx={{ width: 24, height: 24 }}
                        />
                        <Typography variant='subtitle2' margin='-5px 0 0 10px'>
                          {prop.row.original.name}
                        </Typography>
                      </div>
                    ),
                  },
                  {
                    Header: 'Categoria',
                    accessor: 'category',
                  },
                  {
                    Header: 'Marca',
                    accessor: 'brand',
                  },
                  {
                    Header: 'Publicado',
                    accessor: 'published',
                    Cell: (prop) => (
                      <div style={{ color: Boolean(prop.row.original.published) === true ? 'green' : 'red' }}>
                        {Boolean(prop.row.original.published) === true ? 'SI' : 'NO'}
                      </div>
                    ),
                  },
                  {
                    Header: 'Precio unitario',
                    accessor: 'unitPrice',
                  },
                  {
                    Header: '% Ganancia',
                    accessor: 'revenue',
                  },
                  {
                    Header: 'Precio publico',
                    accessor: 'publicPrice',
                  },

                  {
                    Header: '',
                    accessor: 'actions',
                    Cell: (prop) => <div style={{ textAlign: 'end' }}>{prop.row.original.actions}</div>,
                  },
                ]}
                data={data}
              />
            </Card>
          )}
        </>
      )}
    </CustomPageTable>
  )
}

export default ProductScreen
