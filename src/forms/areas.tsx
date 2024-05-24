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
import { useCreateArea } from '@/services/areas.ts'

export const createAreasBody = z.object({
  name: z.string(),
  type: z.string(),
  area: z.array(z.string()),
  departmentIds: z.array(z.string()).nullable().optional(),
  officeIds: z.array(z.string()).nullable().optional(),
  parentId: z.string().nullable().optional(),
})
export type CreateAreasBody = {
  name: string
  type: string
  area: Array<string>
  departmentIds?: Array<string> | undefined | null
  officeIds?: Array<string> | undefined | null
  parentId?: string | undefined | null
}
export type CreateAreasProps = { children: (control: Control<CreateAreasBody>) => ReactNode }

export const CreateAreas = (props: CreateAreasProps) => {
  const { control, handleSubmit } = useForm<CreateAreasBody>({
    resolver: zodResolver(createAreasBody),
  })

  const mutator = useCreateArea()

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

type GetCreateAreasFieldArgs = {
  fieldName: FieldPath<CreateAreasBody>
  control: Control<CreateAreasBody>
  formConfig: FormConfig<CreateAreasBody>
}

export const getCreateAreasField = ({ fieldName, control, formConfig }: GetCreateAreasFieldArgs) => {
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
    .with('area', () => {
      const { label, Input } = formConfig['area']

      return (
        <Controller
          key="area"
          name="area"
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
    .with('departmentIds', () => {
      const { label, Input } = formConfig['departmentIds']

      return (
        <Controller
          key="departmentIds"
          name="departmentIds"
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
    .with('officeIds', () => {
      const { label, Input } = formConfig['officeIds']

      return (
        <Controller
          key="officeIds"
          name="officeIds"
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
    .with('parentId', () => {
      const { label, Input } = formConfig['parentId']

      return (
        <Controller
          key="parentId"
          name="parentId"
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
