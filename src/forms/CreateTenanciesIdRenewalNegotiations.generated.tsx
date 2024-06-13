import { createTenancyRenewalModel, CreateTenancyRenewalModel } from '@/schemas/createTenancyRenewalModel.generated.tsx'
import { useCreateTenancyRenewalNegotiation } from '@/services/Tenancies.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateTenanciesIdRenewalNegotiationsProps = {
  id: string
  children: ReactNode
  defaultValues?: CreateTenancyRenewalModel
}
export const CreateTenanciesIdRenewalNegotiations = (props: CreateTenanciesIdRenewalNegotiationsProps) => {
  const methods = useForm<CreateTenancyRenewalModel>({
    resolver: zodResolver(createTenancyRenewalModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateTenancyRenewalNegotiation()

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
