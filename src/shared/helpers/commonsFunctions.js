import role from '../../cofig/role'

export const isUserRole = (userInfo) => {
  if (!userInfo) {
    return false
  }
  return userInfo.role === role.USER_ROLE
}

export const formatNumToCurrency = (num) => {
  return `$ ${num}`
}

export const intermediateCurrency = (num) => {
  num = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(num)
  return `$ ${num.replace('€', '').trim()}`
}

export const formatCurrencyToNum = (num) => {
  num = num.replace('.', '').replace(',', '')

  return Number(num)
}

export const swichPaymentStatus = (status) => {
  const paymentStatus = {
    created: 'Creado',
    approved: 'Aprobado',
    rejected: 'Rechazado',
    pending: 'Pendiente',
    undefined: 'Creado',
    creado: 'Creado',
  }

  return paymentStatus[status]
}

export const swichColorFromPaymentStatus = (status) => {
  const paymentStatus = {
    approved: 'success',
    rejected: 'error',
    pending: 'warning',
    created: 'info',
    undefined: 'info',
  }

  return paymentStatus[status]
}

export const capitalize = (str) => {
  const lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}

export const swichOrderStatus = (status) => {
  const orderStatus = {
    created: 'Creado',
    packaging: 'En Preparacion',
    onDelivery: 'En Reparto',
    delivered: 'Entregado',
    inProccess: 'Procesando',
    canceled: 'Cancelado',
    rejected: 'Rechazado',
    pending: 'Pendiente',
  }

  return orderStatus[status]
}
