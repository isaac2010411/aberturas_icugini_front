const headerStyles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px',
  },
  headerCart: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  headerDrawer: {
    display: { xs: 'flex', md: 'none' },
    justifyContent: 'flex-start',
  },
  headerDrawerBig: {
    display: { xs: 'none', md: 'block' },
  },
  headerIcon: {
    objectFit: 'contain',
    objectPosition: 'center',
    aspectRatio: '1 / 3',
    width: '35%',
    height: '50px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
}

export default headerStyles
