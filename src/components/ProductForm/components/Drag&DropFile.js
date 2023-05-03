import { Button, Grid } from '@mui/material'
import axios from 'axios'
import { Clear } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import styles from '../styles/dragAndDropStyles'

const useStyles = makeStyles(styles)

const DragAndDropFile = ({ productState, setProductState }) => {
  const classes = useStyles()

  const onDropFile = (e) => {
    e.preventDefault()
    if (e.dataTransfer.items) {
      ;[...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === 'file') {
          const images = item.getAsFile()
          setProductState({ ...productState, images })
        }
      })
    } else {
      ;[...e.dataTransfer.files].forEach((file, i) => {})
    }
  }
  function dragOverHandler(ev) {
    ev.preventDefault()
  }
  const quitFile = () => {
    setProductState({ ...productState, images: '' })
  }
  return (
    <>
      <Grid item onDrop={onDropFile} onDragOver={dragOverHandler} xs={12} className={classes.dragAndDropContainer}>
        <h5 className={classes.dragAndDropTitle}>Arrastra la imagen aqui</h5>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
          <div className={classes.dragAndDropDivider}></div>
          <span>O</span>
          <div className={classes.dragAndDropDivider}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '35px' }}>
          <Button color='secondary' variant='outlined' aria-label='upload picture' component='label'>
            <input
              hidden
              accept='.png, .jpg, .jpeg'
              type='file'
              onChange={(e) => {
                setProductState({ ...productState, images: e.target.files[0] })
              }}
            />
            Seleccionar Imagen
          </Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        {productState.images && (
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px', flexWrap: 'wrap', gap: '8px ' }}>
            <div className={classes.dragAndDropFileContainer}>
              <>
                <Clear
                  style={{ position: 'absolute', zIndex: '1000', right: '0', top: '5' }}
                  onClick={(e) => quitFile(productState.images)}
                />
                <img
                  height='100%'
                  src={
                    typeof productState.images === 'string'
                      ? `${axios.defaults.baseURL}/${productState.images}`
                      : URL.createObjectURL(productState.images)
                  }
                  alt=''
                />
              </>
            </div>
          </div>
        )}
      </Grid>
    </>
  )
}

export default DragAndDropFile
