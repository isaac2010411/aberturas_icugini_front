import { Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import ViewProductModal from '../../../components/ViewProductModal/ViewProductModal'
import DeletProductModal from './DeleteProductModal'

const ProductTableActions = ({ item, setUpdateProductModal, setUpdateProductState }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ViewProductModal icon item={item} />
      <IconButton
        color='primary'
        onClick={() => [
          setUpdateProductModal(true),
          setUpdateProductState({
            ...item,
            images: item.image,
            brandId: item.brand._id,
            categoryId: item.category._id,
            update: true,
          }),
        ]}
      >
        <Edit />
      </IconButton>
      <DeletProductModal item={item} />
    </div>
  )
}

export default ProductTableActions
