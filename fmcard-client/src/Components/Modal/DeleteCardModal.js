import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { deleteCard, getCard } from '../../feature/card-generator/cardSlice';
const style = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translateX( -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',

    boxShadow: 24,
    outline: 0,
    p: 4,
};

function DeleteCardModal({ triggerOpenModalButton, cardId }) {
    console.log(cardId);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        handleClose();
        dispatch(deleteCard(id))
        dispatch(getCard())
        window.location.reload()
    }

    return (
        <>
            <div className='absolute text-white text-[16px] right-0 top-0' onClick={handleOpen}>{triggerOpenModalButton}</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={true}
            // style={{borderRadius:3}}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Card
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Permanently delete this card ?
                    </Typography>
                    <div className='flex items-center justify-end mt-5'>
                        <div
                            className='mr-5 px-4 py-2 cursor-pointer bg-red-600 hover:bg-red-500 rounded-[3px]'
                            onClick={() => {
                                handleDelete(cardId)
                            }}
                        >
                            <span className='text-white'>Delete</span>
                        </div>
                        <div
                            onClick={() => { setOpen(!open) }}
                            className='px-4 py-2 cursor-pointer text-white bg-purple-600 hover:bg-purple-500 rounded-[3px]'>Cancel</div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default DeleteCardModal