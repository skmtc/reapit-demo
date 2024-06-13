import { CreateOfficeModel, createOfficeModel } from '@/schemas/createOfficeModel.generated.tsx'
import { useCreateApiOffices } from '@/services/Offices.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateOfficesProps = { children: ReactNode; defaultValues?: CreateOfficeModel }
export const CreateOffices = (props: CreateOfficesProps) => {
  const methods = useForm<CreateOfficeModel>({
    resolver: zodResolver(createOfficeModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiOffices()

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
