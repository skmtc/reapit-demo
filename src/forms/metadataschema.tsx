import { updateSchemaRequest, UpdateSchemaRequest, createSchemaRequest, CreateSchemaRequest } from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useUpdateMetadataSchema, useCreateMetadataSchema } from '@/services/metadataschema.ts'

export type UpdateMetadataMetadataSchemaIdProps = {
  id: string
  children: (control: Control<UpdateSchemaRequest>) => ReactNode
}
export type CreateMetadataMetadataSchemaProps = { children: (control: Control<CreateSchemaRequest>) => ReactNode }

export const UpdateMetadataMetadataSchemaId = (props: UpdateMetadataMetadataSchemaIdProps) => {
  const { control, handleSubmit } = useForm<UpdateSchemaRequest>({
    resolver: zodResolver(updateSchemaRequest),
  })

  const mutator = useUpdateMetadataSchema()

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

export const CreateMetadataMetadataSchema = (props: CreateMetadataMetadataSchemaProps) => {
  const { control, handleSubmit } = useForm<CreateSchemaRequest>({
    resolver: zodResolver(createSchemaRequest),
  })

  const mutator = useCreateMetadataSchema()

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
