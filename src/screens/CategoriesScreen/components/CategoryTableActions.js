import { Delete, Edit, Visibility } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import TableActions from '../../../components/TableActions/TableActions'
import categoryTableActionsStyles from '../styles/categoryTableActionsStyles'

const useStyles = makeStyles(categoryTableActionsStyles)

const CategoryTableActions = ({ item, openModalDeleteCategory, openModalViewCategory, openModalUpdateCategory }) => {
  const classes = useStyles()
  return (
    <TableActions
      item={item}
      options={[
        {
          name: (
            <span className={classes.spanItem}>
              <Visibility className={classes.spanIcon} />
              Ver
            </span>
          ),
          action: openModalViewCategory,
        },
        {
          name: (
            <span className={classes.spanItem}>
              <Edit className={classes.spanIcon} />
              Editar
            </span>
          ),
          action: openModalUpdateCategory,
        },
        {
          name: (
            <span className={classes.spanItem}>
              <Delete className={classes.spanIcon} />
              Eliminar
            </span>
          ),
          action: openModalDeleteCategory,
        },
      ]}
    />
  )
}

export default CategoryTableActions
