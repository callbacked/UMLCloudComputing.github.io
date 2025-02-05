// React
import React from 'react';

// Docusaurus
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
  useColorMode
} from '@docusaurus/theme-common/internal';
import { Redirect } from '@docusaurus/router';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';
import { useLocation } from '@docusaurus/router';

// MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

function MobileBottomNav() {
  const mobileSidebar = useNavbarMobileSidebar();
  const ref = React.useRef(null);
  const location = useLocation();
  const [value, setValue] = React.useState(location);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  
  const handleChange = (event, newValue) => {
      setValue(newValue);
  }

  return (
      <Box sx={{ pb: 7 }} ref = {ref}>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} elevation={3}>
              <BottomNavigation
                  showLabels
                  value={value}
                  onChange={handleChange}
                  sx = {{
                      bgcolor: isDarkMode ? 'black' : 'white',
                      '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                          color: isDarkMode ? 'grey.300' : 'grey.700'
                      },
                      '& .Mui-selected': {
                        color: isDarkMode ? 'white' : 'black',
                      }
                  }}
              >
                  <Redirect to={value} />
                  <BottomNavigationAction value={"/docs/current-schedule"} label="Schedule" icon={<CalendarMonthOutlinedIcon/>} />
                  <BottomNavigationAction value={""} label="Home" icon={<HomeOutlinedIcon/>}/>
                  <BottomNavigationAction value={location} onClick={() => {mobileSidebar.toggle();}} label="More" icon={<MoreHorizOutlinedIcon/>}/>
              </BottomNavigation>
          </Paper>
      </Box>
  )
}
export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();
  useLockBodyScroll(mobileSidebar.shown);
  if (!mobileSidebar.shouldRender) {
    return null;
  }
  return (
    <div>
      <NavbarMobileSidebarLayout
        header={<NavbarMobileSidebarHeader />}
        primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
        secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
      />
      <MobileBottomNav />
    </div>
  );
}
