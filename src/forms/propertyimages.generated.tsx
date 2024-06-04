import {
  createPropertyImageModel,
  CreatePropertyImageModel,
  createPreSignedUrlsModel,
  CreatePreSignedUrlsModel,
  reindexPropertyImagesModel,
  ReindexPropertyImagesModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import {
  useCreatePropertyImage,
  useCreatePropertyImageSignedUrl,
  useReindexPropertyImages,
} from '@/services/propertyimages.generated.ts'

export type CreatePropertyImagesProps = { children: ReactNode }
export type CreatePropertyImagesSignedUrlProps = { children: ReactNode }
export type CreatePropertyImagesReindexProps = { children: ReactNode }

export const CreatePropertyImages = (props: CreatePropertyImagesProps) => {
  const methods = useForm<CreatePropertyImageModel>({
    resolver: zodResolver(createPropertyImageModel),
  })

  const mutator = useCreatePropertyImage()

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

export const CreatePropertyImagesSignedUrl = (props: CreatePropertyImagesSignedUrlProps) => {
  const methods = useForm<CreatePreSignedUrlsModel>({
    resolver: zodResolver(createPreSignedUrlsModel),
  })

  const mutator = useCreatePropertyImageSignedUrl()

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

export const CreatePropertyImagesReindex = (props: CreatePropertyImagesReindexProps) => {
  const methods = useForm<ReindexPropertyImagesModel>({
    resolver: zodResolver(reindexPropertyImagesModel),
  })

  const mutator = useReindexPropertyImages()

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
