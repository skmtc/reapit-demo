import { createPropertyImageModel, CreatePropertyImageModel } from '@/models/createPropertyImageModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import {
  useCreatePropertyImage,
  useCreatePropertyImageSignedUrl,
  useReindexPropertyImages,
} from '@/services/propertyimages.ts'
import { createPreSignedUrlsModel, CreatePreSignedUrlsModel } from '@/models/createPreSignedUrlsModel.ts'
import { reindexPropertyImagesModel, ReindexPropertyImagesModel } from '@/models/reindexPropertyImagesModel.ts'

export type CreatePropertyImagesProps = { children: (control: Control<CreatePropertyImageModel>) => ReactNode }
export type CreatePropertyImagesSignedUrlProps = { children: (control: Control<CreatePreSignedUrlsModel>) => ReactNode }
export type CreatePropertyImagesReindexProps = { children: (control: Control<ReindexPropertyImagesModel>) => ReactNode }

export const CreatePropertyImages = (props: CreatePropertyImagesProps) => {
  const { control, handleSubmit } = useForm<CreatePropertyImageModel>({
    resolver: zodResolver(createPropertyImageModel),
  })

  const mutator = useCreatePropertyImage()

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

export const CreatePropertyImagesSignedUrl = (props: CreatePropertyImagesSignedUrlProps) => {
  const { control, handleSubmit } = useForm<CreatePreSignedUrlsModel>({
    resolver: zodResolver(createPreSignedUrlsModel),
  })

  const mutator = useCreatePropertyImageSignedUrl()

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

export const CreatePropertyImagesReindex = (props: CreatePropertyImagesReindexProps) => {
  const { control, handleSubmit } = useForm<ReindexPropertyImagesModel>({
    resolver: zodResolver(reindexPropertyImagesModel),
  })

  const mutator = useReindexPropertyImages()

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
