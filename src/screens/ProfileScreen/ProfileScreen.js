import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Button, Avatar, Stack, Card, CardContent, CardActions } from '@mui/material'
import { AlternateEmail, PhoneAndroid } from '@mui/icons-material'
import CustomSnackbar from '../../components/CustomSnackBar/CustomSnackBar'
import Page from '../../components/Page/Page'
import ProfileInputs from './components/ProfileInputs'
import { USER_UPDATE_MY_INFO_RESET } from '../../redux/constants/userConstants'
import { userUpdateMyInfo } from '../../redux/actions/userActions'
import styles from './styles/profileStyles'

const ProfileScreen = () => {
  const dispatch = useDispatch()

  const [alert, setAlert] = useState(false)

  const { userInfo } = useSelector((state) => state.userLogin)

  const [updateState, setUpdateState] = useState({
    _id: userInfo._id,
    role: userInfo.role,
    name: userInfo.name,
    lastName: userInfo?.lastName || '',
    phone: userInfo?.phone || '',
    dni: userInfo?.dni || '',
    email: userInfo?.email || '',
    password: userInfo?.password || '',
  })
  const { loadingUpdateMyInfo, successUpdateMyInfo, errorUpdateMyInfo } = useSelector((state) => state.userUpdateMyInfo)

  useEffect(() => {
    let timeOut
    if (errorUpdateMyInfo) {
      // setAlert(true)
      timeOut = setTimeout(() => {
        // setAlert(false)
        dispatch({ type: USER_UPDATE_MY_INFO_RESET })
      }, 1500)
    } else if (successUpdateMyInfo) {
      timeOut = setTimeout(() => {
        // setAlert(false)
        setUpdateState({ ...userInfo, password: '' })
        dispatch({ type: USER_UPDATE_MY_INFO_RESET })
      }, 1500)
    }
    return () => clearTimeout(timeOut)
  }, [errorUpdateMyInfo, dispatch, successUpdateMyInfo, userInfo])

  const handleUpdateProfille = (e) => {
    e.preventDefault()
    dispatch(userUpdateMyInfo(updateState))
  }
  return (
    <Page title='Mi Perfil'>
      <Grid
        sx={styles.rootContainer}
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        marginBottom={'80px'}
        component={'form'}
        autoComplete='off'
        onSubmit={handleUpdateProfille}
      >
        <Grid item sx={styles.rootItem} xs={7}>
          <Stack direction='row' spacing={2} sx={styles.imageContainer}>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' sx={styles.imageStyles} />
          </Stack>
        </Grid>
        <Grid item xs={11} sm={7} md={6}>
          <Card>
            <CardContent sx={styles.personalContent}>
              <h4 style={{ marginTop: '3rem' }}>
                <b>{`${userInfo.name} ${userInfo.lastName || ''}`}</b>
              </h4>
              {userInfo.phone && (
                <h4>
                  <PhoneAndroid sx={styles.iconsSize} /> <b>{` ${userInfo.phone || ''}`}</b>
                </h4>
              )}
              <h4 style={{ marginBottom: '2rem' }}>
                <AlternateEmail sx={styles.iconsSize} /> <b>{` ${userInfo.email.split('@')[0]}`}</b>
              </h4>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={11} sm={7} sx={styles.inputsContainer}>
          <Card>
            <ProfileInputs setUpdateState={setUpdateState} updateState={updateState} />
            <CardActions>
              <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={12}>
                  <Button
                    type='submit'
                    disabled={loadingUpdateMyInfo}
                    color={successUpdateMyInfo ? 'success' : 'secondary'}
                    variant='contained'
                    fullWidth
                  >
                    {loadingUpdateMyInfo ? 'Guardando' : successUpdateMyInfo ? 'Guardado' : ' Guardar'}
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        {errorUpdateMyInfo && (
          <CustomSnackbar open={alert} setOpen={setAlert} message={errorUpdateMyInfo} severity={'error'} />
        )}
      </Grid>
    </Page>
  )
}

export default ProfileScreen
