import { createContext, useState } from 'react'

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [updateProductModal, setUpdateProductModal] = useState(false)
  const [updateProductState, setUpdateProductState] = useState({})

  return (
    <ProductContext.Provider
      value={{ data, setData, updateProductModal, setUpdateProductModal, updateProductState, setUpdateProductState }}
    >
      {children}
    </ProductContext.Provider>
  )
}
