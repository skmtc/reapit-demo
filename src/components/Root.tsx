import { CssVarsProvider } from '@mui/joy/styles'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import Box from '@mui/joy/Box'
import Link from '@mui/joy/Link'
import { NavLinks } from '@/components/Router'
import { FlexContainer, MainContainer, PageContainer } from '@reapit/elements'

export const Root = () => (
  <CssVarsProvider>
    <MainContainer hasGreyBackground>
      {/* <PageHeader
        pageTitle={{
          children: `Contacts`,
          hasBoldText: true,
        }}
        hasMaxWidth
      /> */}
      <FlexContainer isFlexAuto>
        <PageContainer hasGreyBackground>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100vw',
              height: '100vh',
              overflow: 'scroll',
              minWidth: 0,
              minHeight: 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                flex: 'none',
                width: '200px',
                flexDirection: 'column',
                minHeight: 0,
                overflow: 'scroll',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NavLinks />
              </div>
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', minHeight: 0, overflow: 'scroll' }}>
              <Outlet />
            </div>
          </div>
        </PageContainer>
      </FlexContainer>
    </MainContainer>
  </CssVarsProvider>
)

type NavItemProps = {
  icon?: React.ReactNode
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
