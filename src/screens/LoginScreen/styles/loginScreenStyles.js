const loginScreenStyles = {
  rootContainer: {
    height: '100%',
    padding: '15px',
    alignItems: 'center',
    justifyContent: 'end',
    backgroundImage:
      'url(../../../assets/aberturas_icon.jpeg',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'brightness(90%)',
  },
  rootItem: {
    background: 'white',
    opacity: '.6',
    padding: '15px',
    borderRadius: '10px',
  },
  '& .MuiTextField-root': { m: 1, width: '25ch' },
  loginAvatar: { display: 'flex', justifyContent: 'center' },
  loginCardHeader: { width: '100%', margin: '0 auto' },
  forgotPasswordContainer: { justifyContent: 'end', alignItems: 'center', display: 'flex' },
}

export default loginScreenStyles
