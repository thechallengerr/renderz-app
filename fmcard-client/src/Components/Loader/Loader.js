import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import theme from '../theme/theme';
function Loader() {
    return (
        <div className='flex items-center w-full h-100 justify-center absolute top-0 left-0 right-0 z-10'>
            <Box sx={{ display: 'flex' }} color={theme.primary.active}>
                <CircularProgress />
            </Box>
        </div>
    )
}

export default Loader