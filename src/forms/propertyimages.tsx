import { z } from 'zod'
import { Controller, FieldPath, useForm, Control } from 'react-hook-form'
import { default as FormLabel } from '@mui/joy/FormLabel'
import { default as FormControl } from '@mui/joy/FormControl'
import { default as FormHelperText } from '@mui/joy/FormHelperText'
import { default as Box } from '@mui/joy/Box'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { FormConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useCreatePropertyImage,
  useCreatePropertyImageSignedUrl,
  useReindexPropertyImages,
} from '@/services/propertyimages.ts'

export const createPropertyImagesBody = z.object({
  data: z.string().nullable().optional(),
  fileUrl: z.string().nullable().optional(),
  propertyId: z.string(),
  caption: z.string(),
  type: z.string(),
})
export type CreatePropertyImagesBody = {
  data?: string | undefined | null
  fileUrl?: string | undefined | null
  propertyId: string
  caption: string
  type: string
}
export type CreatePropertyImagesProps = { children: (control: Control<CreatePropertyImagesBody>) => ReactNode }
export const createPropertyImagesSignedUrlBody = z.object({ amount: z.number().int() })
export type CreatePropertyImagesSignedUrlBody = { amount: number }
export type CreatePropertyImagesSignedUrlProps = {
  children: (control: Control<CreatePropertyImagesSignedUrlBody>) => ReactNode
}
export const createPropertyImagesReindexBody = z.object({
  propertyId: z.string().nullable().optional(),
  imageOrder: z.array(z.string()).nullable().optional(),
})
export type CreatePropertyImagesReindexBody = {
  propertyId?: string | undefined | null
  imageOrder?: Array<string> | undefined | null
}
export type CreatePropertyImagesReindexProps = {
  children: (control: Control<CreatePropertyImagesReindexBody>) => ReactNode
}

export const CreatePropertyImages = (props: CreatePropertyImagesProps) => {
  const { control, handleSubmit } = useForm<CreatePropertyImagesBody>({
    resolver: zodResolver(createPropertyImagesBody),
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

type GetCreatePropertyImagesFieldArgs = {
  fieldName: FieldPath<CreatePropertyImagesBody>
  control: Control<CreatePropertyImagesBody>
  formConfig: FormConfig<CreatePropertyImagesBody>
}

export const getCreatePropertyImagesField = ({ fieldName, control, formConfig }: GetCreatePropertyImagesFieldArgs) => {
  return match(fieldName)
    .with('data', () => {
      const { label, Input } = formConfig['data']

      return (
        <Controller
          key="data"
          name="data"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('fileUrl', () => {
      const { label, Input } = formConfig['fileUrl']

      return (
        <Controller
          key="fileUrl"
          name="fileUrl"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('propertyId', () => {
      const { label, Input } = formConfig['propertyId']

      return (
        <Controller
          key="propertyId"
          name="propertyId"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('caption', () => {
      const { label, Input } = formConfig['caption']

      return (
        <Controller
          key="caption"
          name="caption"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('type', () => {
      const { label, Input } = formConfig['type']

      return (
        <Controller
          key="type"
          name="type"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}

export const CreatePropertyImagesSignedUrl = (props: CreatePropertyImagesSignedUrlProps) => {
  const { control, handleSubmit } = useForm<CreatePropertyImagesSignedUrlBody>({
    resolver: zodResolver(createPropertyImagesSignedUrlBody),
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

type GetCreatePropertyImagesSignedUrlFieldArgs = {
  fieldName: FieldPath<CreatePropertyImagesSignedUrlBody>
  control: Control<CreatePropertyImagesSignedUrlBody>
  formConfig: FormConfig<CreatePropertyImagesSignedUrlBody>
}

export const getCreatePropertyImagesSignedUrlField = ({
  fieldName,
  control,
  formConfig,
}: GetCreatePropertyImagesSignedUrlFieldArgs) => {
  return match(fieldName)
    .with('amount', () => {
      const { label, Input } = formConfig['amount']

      return (
        <Controller
          key="amount"
          name="amount"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}

export const CreatePropertyImagesReindex = (props: CreatePropertyImagesReindexProps) => {
  const { control, handleSubmit } = useForm<CreatePropertyImagesReindexBody>({
    resolver: zodResolver(createPropertyImagesReindexBody),
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

type GetCreatePropertyImagesReindexFieldArgs = {
  fieldName: FieldPath<CreatePropertyImagesReindexBody>
  control: Control<CreatePropertyImagesReindexBody>
  formConfig: FormConfig<CreatePropertyImagesReindexBody>
}

export const getCreatePropertyImagesReindexField = ({
  fieldName,
  control,
  formConfig,
}: GetCreatePropertyImagesReindexFieldArgs) => {
  return match(fieldName)
    .with('propertyId', () => {
      const { label, Input } = formConfig['propertyId']

      return (
        <Controller
          key="propertyId"
          name="propertyId"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('imageOrder', () => {
      const { label, Input } = formConfig['imageOrder']

      return (
        <Controller
          key="imageOrder"
          name="imageOrder"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}
