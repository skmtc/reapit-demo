import {
  CreateTenancyRenewalCheckModel,
  createTenancyRenewalCheckModel,
} from '@/schemas/createTenancyRenewalCheckModel.generated.tsx'
import { useCreateApiTenanciesIdRenewalNegotiationsRenewalIdChecks } from '@/services/Tenancies.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps = {
  id: string
  renewalId: string
  children: ReactNode
  defaultValues?: CreateTenancyRenewalCheckModel
}
export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecks = (
  props: CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps,
) => {
  const methods = useForm<CreateTenancyRenewalCheckModel>({
    resolver: zodResolver(createTenancyRenewalCheckModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiTenanciesIdRenewalNegotiationsRenewalIdChecks()

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
