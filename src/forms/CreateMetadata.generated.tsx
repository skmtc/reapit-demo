import { createMetadataRequest, CreateMetadataRequest } from '@/schemas/createMetadataRequest.generated.tsx'
import { usePostApiMetadata } from '@/services/Metadata.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateMetadataProps = { children: ReactNode; defaultValues?: CreateMetadataRequest }
export const CreateMetadata = (props: CreateMetadataProps) => {
  const methods = useForm<CreateMetadataRequest>({
    resolver: zodResolver(createMetadataRequest),
    defaultValues: props.defaultValues,
  })

  const mutator = usePostApiMetadata()

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
