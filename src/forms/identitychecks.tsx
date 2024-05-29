import {
  createIdentityCheckModel,
  CreateIdentityCheckModel,
  createPreSignedUrlsModel,
  CreatePreSignedUrlsModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateIdentityCheck, useCreateIdentityCheckSignedUrl } from '@/services/identitychecks.ts'

export type CreateIdentityChecksProps = { children: (control: Control<CreateIdentityCheckModel>) => ReactNode }
export type CreateIdentityChecksSignedUrlProps = { children: (control: Control<CreatePreSignedUrlsModel>) => ReactNode }

export const CreateIdentityChecks = (props: CreateIdentityChecksProps) => {
  const { control, handleSubmit } = useForm<CreateIdentityCheckModel>({
    resolver: zodResolver(createIdentityCheckModel),
  })

  const mutator = useCreateIdentityCheck()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
        mutator.mutate({ ...props, body })
      })}
    >
      {props.children(control)}
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white',
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateIdentityChecksSignedUrl = (props: CreateIdentityChecksSignedUrlProps) => {
  const { control, handleSubmit } = useForm<CreatePreSignedUrlsModel>({
    resolver: zodResolver(createPreSignedUrlsModel),
  })

  const mutator = useCreateIdentityCheckSignedUrl()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
        mutator.mutate({ ...props, body })
      })}
    >
      {props.children(control)}
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white',
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}
