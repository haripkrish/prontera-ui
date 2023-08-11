'use client'

import { useTheme } from '@mui/material/styles'
import { Avatar, ButtonBase, Switch } from '@mui/material'

export default function ProfileButton() {
    const theme = useTheme()
    return (
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <Avatar
                variant='rounded'
                sx={{
                    transition: 'all .2s ease-in-out',
                    background: theme.palette.secondary.light,
                    color: theme.palette.secondary.dark,
                    '&:hover': {
                        background: theme.palette.secondary.dark,
                        color: theme.palette.secondary.light
                    }
                }}
                
                color='inherit'
            >
                
            </Avatar>
        </ButtonBase>
    );
  
}
  