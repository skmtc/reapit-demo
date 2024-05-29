import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from '@mui/joy/Sheet'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import Box from '@mui/joy/Box'
import Link from '@mui/joy/Link'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { CubeIcon } from '@heroicons/react/24/outline'

export const Root = () => (
  <CssVarsProvider>
    <Sheet
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <NavItem label="Contacts" to="/contacts" icon={<GlobeAltIcon width="24px" height="24px" />} />
        <NavItem label="Offices" to="/offices" icon={<CubeIcon width="24px" height="24px" />} />
        <NavItem label="Appointments" to="/appointments" icon={<CalendarDaysIcon width="24px" height="24px" />} />
      </Box>
      <Outlet />
    </Sheet>
  </CssVarsProvider>
)

type NavItemProps = {
  icon: React.ReactNode
  label: string
  to: string
}

const NavItem = ({ icon, label, to }: NavItemProps) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      p: '24px',
      alignItems: 'center',
    }}
  >
    {icon}
    <Link component={RouterLink} to={to}>
      {label}
    </Link>
  </Box>
)
