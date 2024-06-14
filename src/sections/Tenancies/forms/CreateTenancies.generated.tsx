import { CreateTenancyModel, createTenancyModel } from '@/schemas/createTenancyModel.generated.tsx'
import { useCreateApiTenancies } from '@/sections/Tenancies/services/Tenancies.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateTenanciesProps = { children: ReactNode; defaultValues?: CreateTenancyModel }
export const CreateTenancies = (props: CreateTenanciesProps) => {
  const methods = useForm<CreateTenancyModel>({
    resolver: zodResolver(createTenancyModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiTenancies()

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
