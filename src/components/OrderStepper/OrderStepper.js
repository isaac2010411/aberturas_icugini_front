import { styled } from '@mui/material/styles'
import { Stack, Stepper, Step, StepLabel, StepConnector } from '@mui/material'
import { stepConnectorClasses } from '@mui/material/StepConnector'
import ColorlibDeliberyStepIcon from './components/DeliverySteeps'

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 95deg,rgb(163,228,215) 0%,rgb(115,198,182) 50%,rgb(125,206,160) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient( 95deg,rgb(163,228,215) 0%,rgb(115,198,182) 50%,rgb(125,206,160) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

export default function OrderStepper({ getOrderByAdminData }) {
  const handleActiveStep = (item) => {
    const steps = {
      created: 0,
      packaging: 1,
      onDelivery: 2,
      delivered: 3,
    }

    return steps[item]
  }
  const handleSteps = () => {
    return [
      'Creada',
      'Empaquetando',
      getOrderByAdminData.deliveryMethod === 'goToPickUp' ? 'Retirar' : 'En Camino',
      'Entregado',
    ]
  }

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={handleActiveStep(getOrderByAdminData.orderStatus)}
        connector={<ColorlibConnector />}
      >
        {handleSteps().map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibDeliberyStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
