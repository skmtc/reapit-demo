import {
  CreateTenancyAllowanceModel,
  createTenancyAllowanceModel,
} from '@/schemas/createTenancyAllowanceModel.generated.tsx'
import { useCreateApiTenanciesIdAllowances } from '@/sections/Tenancies/services/Tenancies.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateTenanciesIdAllowancesProps = {
  id: string
  children: ReactNode
  defaultValues?: CreateTenancyAllowanceModel
}
export const CreateTenanciesIdAllowances = (props: CreateTenanciesIdAllowancesProps) => {
  const methods = useForm<CreateTenancyAllowanceModel>({
    resolver: zodResolver(createTenancyAllowanceModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiTenanciesIdAllowances()

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
