import {
  CreateTenancyResponsibilityModel,
  createTenancyResponsibilityModel,
} from '@/schemas/createTenancyResponsibilityModel.generated.tsx'
import { useCreateApiTenanciesIdResponsibilities } from '@/sections/Tenancies/services/Tenancies.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateTenanciesIdResponsibilitiesProps = {
  id: string
  children: ReactNode
  defaultValues?: CreateTenancyResponsibilityModel
}
export const CreateTenanciesIdResponsibilities = (props: CreateTenanciesIdResponsibilitiesProps) => {
  const methods = useForm<CreateTenancyResponsibilityModel>({
    resolver: zodResolver(createTenancyResponsibilityModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiTenanciesIdResponsibilities()

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
