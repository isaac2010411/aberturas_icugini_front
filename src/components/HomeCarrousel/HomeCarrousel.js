import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function HomeCarrousel() {
  const { productGetAllData } = useSelector((state) => state.productGetAll)

  const [activeStep, setActiveStep] = React.useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews axis={'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {productGetAllData &&
          productGetAllData.carrouselRecords.map((step, index) => (
            <Grid container key={step.label}>
              <Grid item xs={12}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component='img'
                    sx={{
                      objectFit: 'cover',
                      color: '#222',
                      width: '100%',
                      margin: '0 auto',
                      maxHeight: { xs: '300px', sm: '350px', md: '400px', lg: '600px' },
                      minHeight: { xs: '300px', sm: '350px', md: '400px', lg: '600px' },
                      overflow: 'hidden',
                      filter: 'brightness(60%)',
                    }}
                    src={`${process.env.REACT_APP_API}/${step.image}`}
                    alt={step.title}
                  />
                ) : null}
              </Grid>
            </Grid>
          ))}
      </AutoPlaySwipeableViews>
    </Box>
  )
}

export default HomeCarrousel
