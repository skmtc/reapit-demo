import { createMetadataRequest, CreateMetadataRequest } from '@/models/createMetadataRequest.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateMetadata, useUpdateMetadata } from '@/services/metadata.ts'
import { updateMetadataRequest, UpdateMetadataRequest } from '@/models/updateMetadataRequest.ts'

export type CreateMetadataProps = { children: (control: Control<CreateMetadataRequest>) => ReactNode }
export type UpdateMetadataIdProps = { id: string; children: (control: Control<UpdateMetadataRequest>) => ReactNode }

export const CreateMetadata = (props: CreateMetadataProps) => {
  const { control, handleSubmit } = useForm<CreateMetadataRequest>({
    resolver: zodResolver(createMetadataRequest),
  })

  const mutator = useCreateMetadata()

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

export const UpdateMetadataId = (props: UpdateMetadataIdProps) => {
  const { control, handleSubmit } = useForm<UpdateMetadataRequest>({
    resolver: zodResolver(updateMetadataRequest),
  })

  const mutator = useUpdateMetadata()

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
