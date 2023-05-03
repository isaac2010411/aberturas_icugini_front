import ProductTableActions from '../../screens/ProductScreen/components/ProductTableActions'
import { formatCurrencyToNum, intermediateCurrency } from '../helpers/commonsFunctions'

const productMapper = (products, setUpdateProductState, setUpdateProductModal) => {
  const data = products.map((item) => {
    return {
      id: item._id,
      name: item.name,
      category: item.category.name,
      brand: item.brand.name,
      publicPrice: intermediateCurrency(
        (Number(item.revenue) * formatCurrencyToNum(item.unitPrice)) / 100 + formatCurrencyToNum(item.unitPrice)
      ),
      unitPrice: intermediateCurrency(item.unitPrice),
      published: item.published,
      height:item.height,
      with:item.with,
      revenue: `${item.revenue} %`,
      image: item.image,
      actions: (
        <>
          <ProductTableActions
            item={item}
            setUpdateProductState={setUpdateProductState}
            setUpdateProductModal={setUpdateProductModal}
          />
        </>
      ),
    }
  })
  return data
}

export default productMapper
