import {
  CreateTenancyRenewalCheckModel,
  createTenancyRenewalCheckModel,
} from '@/schemas/createTenancyRenewalCheckModel.generated.tsx'
import { useCreateApiTenanciesIdRenewalNegotiationsRenewalIdChecks } from '@/services/Tenancies.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
      <form
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        <FormLayout>{props.children}</FormLayout>

        <Button intent="primary">Submit</Button>
      </form>
    </FormProvider>
  )
}
