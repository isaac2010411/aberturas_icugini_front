const styles = (config) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...config,
  },
  ballsContainer: {
    width: '3.5em',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  allBalls: {
    width: '0.8em',
    height: '0.8em',
    borderRadius: '50%',
    backgroundColor: '#3366FF',
    transform: 'translateY(-100%)',
    animation: `$wave 0.2s ease-in-out alternate infinite`,
  },
  firstBall: {
    animationDelay: '-0.2s',
  },
  secondBall: {
    animationDelay: '-0.1s',
  },
  message: {
    marginTop: '20px',
  },
  '@keyframes wave': {
    '0%': {
      transform: 'translateY(-100%)',
    },
    '100%': {
      transform: 'translateY(100%)',
    },
  },
})

export default styles
