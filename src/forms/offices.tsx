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
import { useCreateOffice } from '@/services/offices.ts'

export const createOfficesBody = z.object({
  name: z.string(),
  active: z.boolean().nullable().optional(),
  manager: z.string().nullable().optional(),
  address: z.object({
    buildingName: z.string().nullable().optional(),
    buildingNumber: z.string().nullable().optional(),
    line1: z.string(),
    line2: z.string().nullable().optional(),
    line3: z.string().nullable().optional(),
    line4: z.string().nullable().optional(),
    postcode: z.string().nullable().optional(),
    countryId: z.string().nullable().optional(),
    geolocation: z
      .object({ latitude: z.number().nullable().optional(), longitude: z.number().nullable().optional() })
      .nullable()
      .optional(),
  }),
  workPhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateOfficesBody = {
  name: string
  active?: boolean | undefined | null
  manager?: string | undefined | null
  address: {
    buildingName?: string | undefined | null
    buildingNumber?: string | undefined | null
    line1: string
    line2?: string | undefined | null
    line3?: string | undefined | null
    line4?: string | undefined | null
    postcode?: string | undefined | null
    countryId?: string | undefined | null
    geolocation?: { latitude?: number | undefined | null; longitude?: number | undefined | null } | undefined | null
  }
  workPhone?: string | undefined | null
  email?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateOfficesProps = { children: (control: Control<CreateOfficesBody>) => ReactNode }

export const CreateOffices = (props: CreateOfficesProps) => {
  const { control, handleSubmit } = useForm<CreateOfficesBody>({
    resolver: zodResolver(createOfficesBody),
  })

  const mutator = useCreateOffice()

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

type GetCreateOfficesFieldArgs = {
  fieldName: FieldPath<CreateOfficesBody>
  control: Control<CreateOfficesBody>
  formConfig: FormConfig<CreateOfficesBody>
}

export const getCreateOfficesField = ({ fieldName, control, formConfig }: GetCreateOfficesFieldArgs) => {
  return match(fieldName)
    .with('name', () => {
      const { label, Input } = formConfig['name']

      return (
        <Controller
          key="name"
          name="name"
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
    .with('active', () => {
      const { label, Input } = formConfig['active']

      return (
        <Controller
          key="active"
          name="active"
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
    .with('manager', () => {
      const { label, Input } = formConfig['manager']

      return (
        <Controller
          key="manager"
          name="manager"
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
    .with('address', () => {
      const { label, Input } = formConfig['address']

      return (
        <Controller
          key="address"
          name="address"
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
    .with('workPhone', () => {
      const { label, Input } = formConfig['workPhone']

      return (
        <Controller
          key="workPhone"
          name="workPhone"
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
    .with('email', () => {
      const { label, Input } = formConfig['email']

      return (
        <Controller
          key="email"
          name="email"
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
    .with('metadata', () => {
      const { label, Input } = formConfig['metadata']

      return (
        <Controller
          key="metadata"
          name="metadata"
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
