import Box from '@mui/joy/Box'
import { default as JoyDrawer } from '@mui/joy/Drawer'
import DialogTitle from '@mui/joy/DialogTitle'
import ModalClose from '@mui/joy/ModalClose'

import Divider from '@mui/joy/Divider'
import Sheet from '@mui/joy/Sheet'
import { ReactNode } from 'react'

type DrawerProps = {
  title: string
  open?: boolean
  onClose: () => void
  children: ReactNode
}

export const Drawer = ({
  title,
  open = true,
  onClose,
  children
}: DrawerProps) => {
  return (
    <JoyDrawer
      open={open}
      onClose={onClose}
      anchor="right"
      hideBackdrop={true}
      disableEnforceFocus={true}
      disableScrollLock={true}
      slotProps={{
        root: {
          sx: {
            width: 'fit-content'
          }
        },
        content: {
          sx: {
            margin: '8px',
            height: 'calc(100% - 16px)'
          }
        }
      }}
    >
      <Sheet
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'auto',
          boxShadow: 'lg',
          border: '1px solid',
          borderRadius: '4px',
          borderColor: 'neutral.300',
          bgcolor: 'background.body'
        }}
      >
        <Box pb="8px" pt="16px" px="12px">
          <DialogTitle sx={{ lineHeight: '32px', fontWeight: 500 }}>
            {title}
          </DialogTitle>
          <ModalClose />
        </Box>
        <Divider />

        {children}
      </Sheet>
    </JoyDrawer>
  )
}
