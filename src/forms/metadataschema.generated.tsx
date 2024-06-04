import { updateSchemaRequest, UpdateSchemaRequest, createSchemaRequest, CreateSchemaRequest } from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useUpdateMetadataSchema, useCreateMetadataSchema } from '@/services/metadataschema.generated.ts'

export type UpdateMetadataMetadataSchemaIdProps = { id: string; children: ReactNode }
export type CreateMetadataMetadataSchemaProps = { children: ReactNode }

export const UpdateMetadataMetadataSchemaId = (props: UpdateMetadataMetadataSchemaIdProps) => {
  const methods = useForm<UpdateSchemaRequest>({
    resolver: zodResolver(updateSchemaRequest),
  })

  const mutator = useUpdateMetadataSchema()

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

export const CreateMetadataMetadataSchema = (props: CreateMetadataMetadataSchemaProps) => {
  const methods = useForm<CreateSchemaRequest>({
    resolver: zodResolver(createSchemaRequest),
  })

  const mutator = useCreateMetadataSchema()

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
