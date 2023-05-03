import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Check from '@mui/icons-material/Check'
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
// import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RedeemIcon from '@mui/icons-material/Redeem'
import CreateIcon from '@mui/icons-material/Create'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { useSelector } from 'react-redux'
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}))

function QontoStepIcon(props) {
  const { active, completed, className } = props

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className='QontoStepIcon-completedIcon' /> : <div className='QontoStepIcon-circle' />}
    </QontoStepIconRoot>
  )
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
}

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: 'rgb(78, 151, 253)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'rgb(78, 151, 253)',
  }),
}))
const ColorlibDeliberyStepIcon = (props) => {
  const { active, completed, className } = props

  const { getOrderByAdminData } = useSelector((state) => state.getOrderByAdmin)

  const icons = {
    1: <CreateIcon />,
    2: <RedeemIcon />,
    3: getOrderByAdminData.methodDelivery === 'withdraw' ? <ShoppingBagIcon /> : <LocalShippingIcon />,
    4: <CheckCircleOutlineIcon />,
  }

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

ColorlibDeliberyStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
}

export default ColorlibDeliberyStepIcon
