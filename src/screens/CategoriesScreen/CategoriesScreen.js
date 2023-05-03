import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import { Card, Typography } from '@mui/material'
import ReactTable from '../../components/CustomReactTable/CustomReactTable'
import Loader from '../../components/Loader/Loader'
import CustomPageTable from '../../components/CustomPageTable/CustomPageTable'
import DeleteCategoryModal from './components/DeleteCategoryModal'
import RegisterCategoryModal from './components/RegisterCategoryModal'
import ViewCategoryModal from './components/ViewCategoryModal'
import UpdateCategoryModal from './components/UpdateCategoryModal'
import { getCategoryList } from '../../redux/actions/categoryActions'
import categoryScreenStyles from './styles/categoryScreenStyles'
import NotDataFound from '../../components/NotDataFound/NotDataFound'

const useStyles = makeStyles(categoryScreenStyles)

const TableButtons = ({ item }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ViewCategoryModal item={item} />
      <UpdateCategoryModal item={item} />
      <DeleteCategoryModal item={item} />
    </div>
  )
}

const CategoriesScreen = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [data, setData] = useState([])

  const { categoryGetListData, successCategoryGetList, loadingCategoryGetList } = useSelector(
    (state) => state.categoryGetList
  )
  const { categoryRegisterData } = useSelector((state) => state.categoryRegister)
  const { categoryUpdateData } = useSelector((state) => state.categoryUpdate)
  const { categoryDeleteData } = useSelector((state) => state.categoryDelete)

  useEffect(() => {
    dispatch(getCategoryList())
  }, [dispatch])
  useEffect(() => {
    if (successCategoryGetList) {
      const caregoryData = categoryGetListData.map((item) => {
        return {
          id: item._id,
          name: item.name,
          actions: <TableButtons item={item} />,
        }
      })
      setData(caregoryData)
    }
  }, [successCategoryGetList, categoryGetListData])
  useEffect(() => {
    if (categoryRegisterData) {
      setData((prev) => [
        ...prev,
        {
          id: categoryRegisterData._id,
          name: categoryRegisterData.name,
          actions: <TableButtons item={categoryRegisterData} />,
        },
      ])
    } else if (categoryUpdateData) {
      const dataupdated = data.map((item) => {
        if (item.id === categoryUpdateData._id) {
          return {
            ...item,
            name: categoryUpdateData.name,
            actions: <TableButtons item={categoryUpdateData} />,
          }
        }
        return item
      })
      setData(dataupdated)
    }
  }, [dispatch, categoryRegisterData, categoryUpdateData, data])
  useEffect(() => {
    if (categoryDeleteData) {
      setData((prev) => prev.filter((item) => item.id !== categoryDeleteData._id))
    }
  }, [categoryDeleteData, dispatch])

  return (
    <CustomPageTable pageName={'Categorias'}>
      <div className={classes.categoryTitleContainer}>
        <h4 className={classes.categoryTitle}>Categorias</h4>
        <RegisterCategoryModal />
      </div>
      {loadingCategoryGetList ? (
        <div className={classes.categoryLoader}>
          <Loader />
        </div>
      ) : categoryGetListData && data.length < 1 ? (
        <>
          <NotDataFound
            message={
              <>
                <Typography textAlign='center' mt={1}>
                  No hay categorias, para agregar una seleccione
                </Typography>
                <Typography textAlign='center' fontWeight='600' mt={1}>
                  NUEVA CATEGORIA
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

export default CategoriesScreen
