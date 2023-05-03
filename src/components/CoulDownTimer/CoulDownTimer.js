import { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'


const ExpiredNotice = () => {
  return (
    <div className='expired-notice'>
      <span>Expired!!!</span>
    </div>
  )
}

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Grid
      item
      xs={6}
      sm={3}
      md={2}
      lg={1}
      className={isDanger ? 'countdown danger' : 'countdown'}
      textAlign='center'
      display={'flex'}
      flexDirection='column'
    >
      <Typography variant='subtitle1'>{value}</Typography>
      <Typography variant='subtitle2'>{type}</Typography>
    </Grid>
  )
}
const ShowCounter = ({ minutes, seconds }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant='body1' style={{ textAlign: 'center', paddingRight: '1rem' }}>
          Para asegurar la disponibilidad de tu stock, realiza el pago cuanto antes.
          <br />
          <b>El link de pago se vence en:</b>
        </Typography>
      </Grid>
      <Grid container direction='row' justifyContent='center' alignItems='center' pt={3}>
        <DateTimeDisplay value={minutes} type={'Minutos'} isDanger={false} />
        <DateTimeDisplay value={seconds} type={'Segundos'} isDanger={false} />
      </Grid>
    </>
  )
}

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
  }
}
export default CountdownTimer
