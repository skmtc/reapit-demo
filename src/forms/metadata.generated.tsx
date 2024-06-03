import {
  createMetadataRequest,
  CreateMetadataRequest,
  updateMetadataRequest,
  UpdateMetadataRequest,
} from '@/schemas/index.ts'
import { useCreateMetadata, useUpdateMetadata } from '@/services/metadata.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateMetadataProps = { children: ReactNode }
export type UpdateMetadataIdProps = { id: string; children: ReactNode }

export const CreateMetadata = (props: CreateMetadataProps) => {
  const methods = useForm<CreateMetadataRequest>({
    resolver: zodResolver(createMetadataRequest),
  })

  const mutator = useCreateMetadata()

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

export const UpdateMetadataId = (props: UpdateMetadataIdProps) => {
  const methods = useForm<UpdateMetadataRequest>({
    resolver: zodResolver(updateMetadataRequest),
  })

  const mutator = useUpdateMetadata()

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
