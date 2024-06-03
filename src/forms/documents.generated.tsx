import {
  createDocumentModel,
  CreateDocumentModel,
  createPreSignedUrlsModel,
  CreatePreSignedUrlsModel,
} from '@/schemas/index.ts'
import { useCreateDocument, useCreateSignedUrl } from '@/services/documents.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateDocumentsProps = { children: ReactNode }
export type CreateDocumentsSignedUrlProps = { children: ReactNode }

export const CreateDocuments = (props: CreateDocumentsProps) => {
  const methods = useForm<CreateDocumentModel>({
    resolver: zodResolver(createDocumentModel),
  })

  const mutator = useCreateDocument()

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

export const CreateDocumentsSignedUrl = (props: CreateDocumentsSignedUrlProps) => {
  const methods = useForm<CreatePreSignedUrlsModel>({
    resolver: zodResolver(createPreSignedUrlsModel),
  })

  const mutator = useCreateSignedUrl()

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
