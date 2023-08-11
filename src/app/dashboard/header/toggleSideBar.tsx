'use client'
import PropTypes from 'prop-types'

import { useTheme } from '@mui/material/styles'
import { Avatar, ButtonBase, Switch } from '@mui/material'
import { styled } from '@mui/material/styles'

import { IconMenu2 } from '@tabler/icons-react'

export default function ToggleSideBar() {
    const theme = useTheme()
    return (
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <Avatar
                variant='rounded'
                sx={{
                        /* ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar, */
                        transition: 'all .2s ease-in-out',
                        background: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '&:hover': {
                            background: theme.palette.secondary.dark,
                            color: theme.palette.secondary.light
                        }
                    }}
                    //onClick={}
                    color='inherit'
                >
                    <IconMenu2 stroke={1.5} size='1.3rem' />
                </Avatar>
            </ButtonBase>
    );
  
}

ToggleSideBar.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
}

  