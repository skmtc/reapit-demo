import { CreateDocumentModel, createDocumentModel } from '@/schemas/createDocumentModel.generated.tsx'
import { useCreateApiDocuments } from '@/services/Documents.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateDocumentsProps = { children: ReactNode; defaultValues?: CreateDocumentModel }
export const CreateDocuments = (props: CreateDocumentsProps) => {
  const methods = useForm<CreateDocumentModel>({
    resolver: zodResolver(createDocumentModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiDocuments()

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
