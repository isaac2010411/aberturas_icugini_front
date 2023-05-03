import { createContext, useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SocketContext } from './socketContext'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const { socket, online } = useContext(SocketContext)

  //start salepoint context
  const [searchSalePointList, setSearchSalePointList] = useState('')
  const [salePointList, setSalePointList] = useState([])

  const [drawerState, setDrawerState] = useState(false)
  const toggleDrawerState = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setDrawerState(open)
  }
  //finish Sidebar menu toggle
  const { userInfo } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (!online) {
      let ownUser = {
        _id: Date.now(),
        name: userInfo?.name || 'User',
        role: userInfo?.role || 'no-loggued',
        isAdmin: userInfo?.isAdmin || false,
        isSuper: userInfo?.isSuper || false,
      }

      socket.emit('user-connected', ownUser)
    }
  }, [online, socket, userInfo])

  const addQuantity = (item) => {
    const data = salePointList.map((obj) => {
      if (obj._id === item._id && obj.quantity <= item.available - 1) {
        obj.quantity = Number(obj.quantity) + 1
      }
      return obj
    })
    setSalePointList(data)
  }

  const substractQuantity = (item) => {
    const data = salePointList.map((obj) => {
      if (obj._id === item._id) {
        obj.quantity = Number(obj.quantity) - 1
      }
      return obj
    })
    setSalePointList(data)
  }

  const totalPrice = () => {
    let totalAmount = salePointList
      .map((item) => item.publicPrice * item.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
      .toFixed(2)

    return totalAmount
  }

  const totalQuantity = () => {
    let totalAmount = salePointList
      .map((item) => item.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)

    return totalAmount
  }

  const addToSalePointList = (item) => {
    const isItemInCart = salePointList.map((obj) => ({ _id: obj._id })).find((ca) => ca._id === item._id)
    if (isItemInCart) {
      addQuantity(item)
    } else {
      setSalePointList((prev) => [item, ...prev])
    }
  }

  const quitToSaLePointList = (item) => {
    const isItemInCart = salePointList.map((obj) => ({ _id: obj._id })).find((ca) => ca._id === item._id)
    const data = salePointList.filter((c) => c._id !== isItemInCart._id)
    setSalePointList(data)
  }

  const substractToSalePointList = (item) => {
    const isItemInCart = salePointList.map((obj) => ({ _id: obj._id })).find((ca) => ca._id === item._id)
    if (isItemInCart.quantity === 1) {
      const data = salePointList.filter((c) => c._id !== isItemInCart._id)
      setSalePointList(data)
    } else {
      substractQuantity(item)
    }
  }

  return (
    <AppContext.Provider
      value={{
        drawerState,
        setDrawerState,
        navigate,
        toggleDrawerState,

        salePointList,
        setSalePointList,
        addToSalePointList,
        totalPrice,
        totalQuantity,
        substractToSalePointList,
        quitToSaLePointList,
        searchSalePointList,
        setSearchSalePointList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
