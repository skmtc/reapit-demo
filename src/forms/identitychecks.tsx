import {
  createIdentityCheckModel,
  CreateIdentityCheckModel,
  createPreSignedUrlsModel,
  CreatePreSignedUrlsModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateIdentityCheck, useCreateIdentityCheckSignedUrl } from '@/services/identitychecks.ts'

export type CreateIdentityChecksProps = { children: ReactNode }
export type CreateIdentityChecksSignedUrlProps = { children: ReactNode }

export const CreateIdentityChecks = (props: CreateIdentityChecksProps) => {
  const methods = useForm<CreateIdentityCheckModel>({
    resolver: zodResolver(createIdentityCheckModel),
  })

  const mutator = useCreateIdentityCheck()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}

export const CreateIdentityChecksSignedUrl = (props: CreateIdentityChecksSignedUrlProps) => {
  const methods = useForm<CreatePreSignedUrlsModel>({
    resolver: zodResolver(createPreSignedUrlsModel),
  })

  const mutator = useCreateIdentityCheckSignedUrl()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}
