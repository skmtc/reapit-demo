import { CreateTenancyRenewalModel, createTenancyRenewalModel } from '@/schemas/createTenancyRenewalModel.generated.tsx'
import { useCreateApiTenanciesIdRenewalNegotiations } from '@/sections/Tenancies/services/Tenancies.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

  const mutator = useCreateApiTenanciesIdRenewalNegotiations()

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
