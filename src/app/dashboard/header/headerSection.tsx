
import { Box} from '@mui/material'

import Logo from './logo'
import ToggleSideBar from './toggleSideBar'
import ProfileButton from './profileButton'
import MaterialUISwitch from './materialUISwitch'

export default function Header() {
  return (
    <>
        {/* logo & toggler button */}
        <Box
            sx={{
                width: 228,
                display: 'flex'
            }}
        >
            <Box component='span' sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
               <Logo />
            </Box>
            <ToggleSideBar/>
            
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <MaterialUISwitch />
        <Box sx={{ ml: 2 }}></Box>
        <ProfileButton />
    </>
)
  }

  