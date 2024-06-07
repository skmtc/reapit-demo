import { createPropertyImageModel, CreatePropertyImageModel } from '@/schemas/createPropertyImageModel.generated.tsx'
import { usePostApiPropertyImages, usePatchApiPropertyImagesId, usePostApiPropertyImagesSignedUrl, usePostApiPropertyImagesReindex } from 'services/PropertyImages.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { updatePropertyImageModel, UpdatePropertyImageModel } from '@/schemas/updatePropertyImageModel.generated.tsx'
import { createPreSignedUrlsModel, CreatePreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'
import { reindexPropertyImagesModel, ReindexPropertyImagesModel } from '@/schemas/reindexPropertyImagesModel.generated.tsx'

export type CreatePropertyImagesProps = {children: ReactNode};
export const CreatePropertyImages = (props:CreatePropertyImagesProps) => {
      const methods = useForm<CreatePropertyImageModel>({
        resolver: zodResolver(createPropertyImageModel)
      })

      const mutator = usePostApiPropertyImages()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };
export type PatchPropertyImagesIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchPropertyImagesId = (props:PatchPropertyImagesIdProps) => {
      const methods = useForm<UpdatePropertyImageModel>({
        resolver: zodResolver(updatePropertyImageModel)
      })

      const mutator = usePatchApiPropertyImagesId()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };
export type CreatePropertyImagesSignedUrlProps = {children: ReactNode};
export const CreatePropertyImagesSignedUrl = (props:CreatePropertyImagesSignedUrlProps) => {
      const methods = useForm<CreatePreSignedUrlsModel>({
        resolver: zodResolver(createPreSignedUrlsModel)
      })

      const mutator = usePostApiPropertyImagesSignedUrl()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };
export type CreatePropertyImagesReindexProps = {children: ReactNode};
export const CreatePropertyImagesReindex = (props:CreatePropertyImagesReindexProps) => {
      const methods = useForm<ReindexPropertyImagesModel>({
        resolver: zodResolver(reindexPropertyImagesModel)
      })

      const mutator = usePostApiPropertyImagesReindex()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };