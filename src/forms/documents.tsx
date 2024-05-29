import {
  createDocumentModel,
  CreateDocumentModel,
  createPreSignedUrlsModel,
  CreatePreSignedUrlsModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateDocument, useCreateSignedUrl } from '@/services/documents.ts'

export type CreateDocumentsProps = { children: (control: Control<CreateDocumentModel>) => ReactNode }
export type CreateDocumentsSignedUrlProps = { children: (control: Control<CreatePreSignedUrlsModel>) => ReactNode }

export const CreateDocuments = (props: CreateDocumentsProps) => {
  const { control, handleSubmit } = useForm<CreateDocumentModel>({
    resolver: zodResolver(createDocumentModel),
  })

  const mutator = useCreateDocument()

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

export const CreateDocumentsSignedUrl = (props: CreateDocumentsSignedUrlProps) => {
  const { control, handleSubmit } = useForm<CreatePreSignedUrlsModel>({
    resolver: zodResolver(createPreSignedUrlsModel),
  })

  const mutator = useCreateSignedUrl()

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
