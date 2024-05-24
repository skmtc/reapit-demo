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
import { useCreateDownwardChain, useCreateUpwardChain } from '@/services/conveyancing.ts'

export const createConveyancingIdDownwardBody = z.object({
  offerId: z.string().nullable().optional(),
  propertyAddress: z.string().nullable().optional(),
  agent: z.string().nullable().optional(),
  buyer: z.string().nullable().optional(),
  buyerSolicitorId: z.string().nullable().optional(),
})
export type CreateConveyancingIdDownwardBody = {
  offerId?: string | undefined | null
  propertyAddress?: string | undefined | null
  agent?: string | undefined | null
  buyer?: string | undefined | null
  buyerSolicitorId?: string | undefined | null
}
export type CreateConveyancingIdDownwardProps = {
  id: string
  children: (control: Control<CreateConveyancingIdDownwardBody>) => ReactNode
}
export const createConveyancingIdUpwardBody = z.object({
  offerId: z.string().nullable().optional(),
  propertyAddress: z.string().nullable().optional(),
  agent: z.string().nullable().optional(),
  vendor: z.string().nullable().optional(),
  vendorSolicitorId: z.string().nullable().optional(),
})
export type CreateConveyancingIdUpwardBody = {
  offerId?: string | undefined | null
  propertyAddress?: string | undefined | null
  agent?: string | undefined | null
  vendor?: string | undefined | null
  vendorSolicitorId?: string | undefined | null
}
export type CreateConveyancingIdUpwardProps = {
  id: string
  children: (control: Control<CreateConveyancingIdUpwardBody>) => ReactNode
}

export const CreateConveyancingIdDownward = (props: CreateConveyancingIdDownwardProps) => {
  const { control, handleSubmit } = useForm<CreateConveyancingIdDownwardBody>({
    resolver: zodResolver(createConveyancingIdDownwardBody),
  })

  const mutator = useCreateDownwardChain()

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

type GetCreateConveyancingIdDownwardFieldArgs = {
  fieldName: FieldPath<CreateConveyancingIdDownwardBody>
  control: Control<CreateConveyancingIdDownwardBody>
  formConfig: FormConfig<CreateConveyancingIdDownwardBody>
}

export const getCreateConveyancingIdDownwardField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateConveyancingIdDownwardFieldArgs) => {
  return match(fieldName)
    .with('offerId', () => {
      const { label, Input } = formConfig['offerId']

      return (
        <Controller
          key="offerId"
          name="offerId"
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
    .with('propertyAddress', () => {
      const { label, Input } = formConfig['propertyAddress']

      return (
        <Controller
          key="propertyAddress"
          name="propertyAddress"
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
    .with('agent', () => {
      const { label, Input } = formConfig['agent']

      return (
        <Controller
          key="agent"
          name="agent"
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
    .with('buyer', () => {
      const { label, Input } = formConfig['buyer']

      return (
        <Controller
          key="buyer"
          name="buyer"
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
    .with('buyerSolicitorId', () => {
      const { label, Input } = formConfig['buyerSolicitorId']

      return (
        <Controller
          key="buyerSolicitorId"
          name="buyerSolicitorId"
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

export const CreateConveyancingIdUpward = (props: CreateConveyancingIdUpwardProps) => {
  const { control, handleSubmit } = useForm<CreateConveyancingIdUpwardBody>({
    resolver: zodResolver(createConveyancingIdUpwardBody),
  })

  const mutator = useCreateUpwardChain()

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

type GetCreateConveyancingIdUpwardFieldArgs = {
  fieldName: FieldPath<CreateConveyancingIdUpwardBody>
  control: Control<CreateConveyancingIdUpwardBody>
  formConfig: FormConfig<CreateConveyancingIdUpwardBody>
}

export const getCreateConveyancingIdUpwardField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateConveyancingIdUpwardFieldArgs) => {
  return match(fieldName)
    .with('offerId', () => {
      const { label, Input } = formConfig['offerId']

      return (
        <Controller
          key="offerId"
          name="offerId"
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
    .with('propertyAddress', () => {
      const { label, Input } = formConfig['propertyAddress']

      return (
        <Controller
          key="propertyAddress"
          name="propertyAddress"
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
    .with('agent', () => {
      const { label, Input } = formConfig['agent']

      return (
        <Controller
          key="agent"
          name="agent"
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
    .with('vendor', () => {
      const { label, Input } = formConfig['vendor']

      return (
        <Controller
          key="vendor"
          name="vendor"
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
    .with('vendorSolicitorId', () => {
      const { label, Input } = formConfig['vendorSolicitorId']

      return (
        <Controller
          key="vendorSolicitorId"
          name="vendorSolicitorId"
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
