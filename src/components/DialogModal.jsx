import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material';
import PropTypes from 'prop-types';

DialogModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  message: PropTypes.string,
};

function DialogModal({ open, setOpen, message }) {
  const handleModalClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleModalClose}>
      <DialogTitle>{message}</DialogTitle>
      <DialogActions>
        <Button onClick={handleModalClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogModal;
