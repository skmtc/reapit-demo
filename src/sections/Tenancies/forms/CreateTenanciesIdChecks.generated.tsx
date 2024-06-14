import { CreateTenancyCheckModel, createTenancyCheckModel } from '@/schemas/createTenancyCheckModel.generated.tsx'
import { useCreateApiTenanciesIdChecks } from '@/sections/Tenancies/services/Tenancies.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateTenanciesIdChecksProps = { id: string; children: ReactNode; defaultValues?: CreateTenancyCheckModel }
export const CreateTenanciesIdChecks = (props: CreateTenanciesIdChecksProps) => {
  const methods = useForm<CreateTenancyCheckModel>({
    resolver: zodResolver(createTenancyCheckModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiTenanciesIdChecks()

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
