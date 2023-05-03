import { makeStyles } from '@mui/styles'
import styles from './styles/loaderStyles'

const Loader = ({ message, config }) => {
  const useStyles = makeStyles(styles(config))
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.ballsContainer}>
        <div className={classes.allBalls + ' ' + classes.firstBall}></div>
        <div className={classes.allBalls + ' ' + classes.secondBall}></div>
        <div className={classes.allBalls}></div>
      </div>
      <div className={classes.message}>{message || 'Cargando...'}</div>
    </div>
  )
}

export default Loader

