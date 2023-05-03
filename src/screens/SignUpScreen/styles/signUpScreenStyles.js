const styles = {
  rootContainer: {
    height: '100%',
    padding: '15px',
    alignItems: 'center',
    justifyContent: 'end',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1571063769135-f7b6b742db4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80)',
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

export default styles
