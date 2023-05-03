import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import { Card, IconButton, TextField, Typography } from '@mui/material'
import { FilterList } from '@mui/icons-material'
import ReactTable from '../../components/CustomReactTable/CustomReactTable'
import Loader from '../../components/Loader/Loader'
import CustomPageTable from '../../components/CustomPageTable/CustomPageTable'
import RegisterBrandModal from './components/RegisterBrandModal'
import DeleteBrandModal from './components/DeleteBrandModal'
import ViewBrandModal from './components/ViewBrandModal'
import UpdateBrandModal from './components/UpdateBrandModal'
import { getBrandList } from '../../redux/actions/brandActions'
import { getCategoryList } from '../../redux/actions/categoryActions'
import brandScreenStyles from './styles/brandScreenStyles'
import NotDataFound from '../../components/NotDataFound/NotDataFound'

const useStyles = makeStyles(brandScreenStyles)

const TableButtons = ({ item }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ViewBrandModal item={item} />
      <UpdateBrandModal item={item} />
      <DeleteBrandModal item={item} />
    </div>
  )
}

const BrandScreen = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [data, setData] = useState([])

  const { brandRegisterData } = useSelector((state) => state.brandRegister)
  const { brandUpdateData } = useSelector((state) => state.brandUpdate)
  const { brandGetListData, successBrandGetList, loadingBrandGetList } = useSelector((state) => state.brandGetList)
  const { brandDeleteData } = useSelector((state) => state.brandDelete)
  const { categoryGetListData } = useSelector((state) => state.categoryGetList)

  useEffect(() => {
    dispatch(getBrandList())
  }, [dispatch])
  useEffect(() => {
    dispatch(getCategoryList())
  }, [dispatch])
  useEffect(() => {
    if (successBrandGetList) {
      const brandData = brandGetListData.map((item) => {
        return {
          id: item._id,
          categoryId: item.category._id,
          category: item.category.name,
          name: item.name,
          actions: <TableButtons item={item} />,
        }
      })
      setData(brandData)
    }
  }, [successBrandGetList, brandGetListData])
  useEffect(() => {
    if (brandRegisterData) {
      setData((prev) => [
        ...prev,
        {
          id: brandRegisterData.brand._id,
          name: brandRegisterData.brand.name,
          categoryId: brandRegisterData.category._id,
          category: brandRegisterData.category.name,
          actions: <TableButtons item={{ ...brandRegisterData.brand, category: brandRegisterData.category }} />,
        },
      ])
    } else if (brandUpdateData) {
      setData((prev) =>
        prev.map((item) => {
          if (item.id === brandUpdateData.brand._id) {
            return {
              ...item,
              id: brandUpdateData.brand._id,
              name: brandUpdateData.brand.name,
              categoryId: brandUpdateData.category._id,
              category: brandUpdateData.category.name,
              actions: <TableButtons item={{ ...brandUpdateData.brand, category: brandUpdateData.category }} />,
            }
          }
          return item
        })
      )
    } else if (brandDeleteData) {
      setData((prev) => prev.filter((item) => item.id !== brandDeleteData._id))
    }
  }, [brandRegisterData, brandUpdateData, brandDeleteData])

  return (
    <CustomPageTable pageName={'Marcas'}>
      <div className={classes.brandTitleContainer}>
        <h4 className={classes.brandTitle}>Marcas</h4>
        <RegisterBrandModal buttonValidation={categoryGetListData && categoryGetListData.length < 1} />
      </div>
      {loadingBrandGetList ? (
        <div className={classes.brandLoader}>
          <Loader />
        </div>
      ) : brandGetListData && data.length < 1 ? (
        <>
          <NotDataFound
            message={
              <>
                <Typography textAlign='center' mt={1}>
                  No hay marcas, para agregar una{' '}
                  {categoryGetListData && categoryGetListData.length < 1
                    ? 'primero debe agregar una categoria'
                    : 'seleccione'}
                </Typography>
                {categoryGetListData && categoryGetListData.length > 0 && (
                  <Typography textAlign='center' fontWeight='600' mt={1}>
                    NUEVA MARCA
                  </Typography>
                )}
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
              },
              {
                Header: 'Categoria',
                accessor: 'category',
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
    </CustomPageTable>
  )
}

export default BrandScreen
