import { CreatePropertyCheckModel, createPropertyCheckModel } from '@/schemas/createPropertyCheckModel.generated.tsx'
import { useCreateApiPropertiesIdChecks } from '@/services/Properties.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreatePropertiesIdChecksProps = {
  id: string
  children: ReactNode
  defaultValues?: CreatePropertyCheckModel
}
export const CreatePropertiesIdChecks = (props: CreatePropertiesIdChecksProps) => {
  const methods = useForm<CreatePropertyCheckModel>({
    resolver: zodResolver(createPropertyCheckModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertiesIdChecks()

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
