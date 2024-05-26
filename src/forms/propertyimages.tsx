import {
  createPropertyImageModel,
  CreatePropertyImageModel,
  createPreSignedUrlsModel,
  CreatePreSignedUrlsModel,
  reindexPropertyImagesModel,
  ReindexPropertyImagesModel,
} from '@/index.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import {
  usePostApiPropertyImages,
  usePostApiPropertyImagesSignedUrl,
  usePostApiPropertyImagesReindex,
} from '@/services/propertyimages.ts'

export type CreatePropertyImagesProps = { children: (control: Control<CreatePropertyImageModel>) => ReactNode }
export type CreatePropertyImagesSignedUrlProps = { children: (control: Control<CreatePreSignedUrlsModel>) => ReactNode }
export type CreatePropertyImagesReindexProps = { children: (control: Control<ReindexPropertyImagesModel>) => ReactNode }

export const CreatePropertyImages = (props: CreatePropertyImagesProps) => {
  const { control, handleSubmit } = useForm<CreatePropertyImageModel>({
    resolver: zodResolver(createPropertyImageModel),
  })

  const mutator = usePostApiPropertyImages()

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

  const mutator = usePostApiPropertyImagesSignedUrl()

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

  const mutator = usePostApiPropertyImagesReindex()

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
