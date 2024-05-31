import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from '@mui/joy/Sheet'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import Box from '@mui/joy/Box'
import Link from '@mui/joy/Link'
import { NavLinks } from '@/components/Router'

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
        <NavLinks />
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

export const NavItem = ({ icon, label, to }: NavItemProps) => (
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
