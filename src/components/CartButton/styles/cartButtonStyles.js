const cartButtonStyles = {
  animationIcon: {
    animation: '$notification 2s infinite',
  },
  '@keyframes notification': {
    '5%': { transform: 'rotate(10deg)' },
    '10%': { transform: 'rotate(-10deg)' },
    '15%': { transform: 'rotate(10deg)' },
    '20%': { transform: 'rotate(0deg)' },
  },
}
export default cartButtonStyles
