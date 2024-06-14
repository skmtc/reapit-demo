import { CreateOfficeModel, createOfficeModel } from '@/schemas/createOfficeModel.generated.tsx'
import { useCreateApiOffices } from '@/sections/Offices/services/Offices.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
