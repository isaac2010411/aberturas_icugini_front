import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const CustomModal = ({ openButton, isOpen, title, children, handleClose, actionButtons, handleSubmit }) => {
  return (
    <div>
      {openButton && openButton}
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} style={{ paddingTop: '10px' }} id={title}>
            {children}
          </form>
        </DialogContent>

        <DialogActions>{actionButtons}</DialogActions>
      </Dialog>
    </div>
  )
}

export default CustomModal
