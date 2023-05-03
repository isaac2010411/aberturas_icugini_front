import { Fragment, useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import CarItem from '../CartItem/CartItem'

const CartList = () => {
  const { salePointList } = useContext(AppContext)

  return (
    <>
      {salePointList.length < 1 ? (
        <>No hay articulos.</>
      ) : (
        <>
          {salePointList.map((item, i) => (
            <Fragment key={i}>
              <CarItem item={item} />
            </Fragment>
          ))}
        </>
      )}
    </>
  )
}

export default CartList
