import { CreatePropertyCheckModel, createPropertyCheckModel } from '@/schemas/createPropertyCheckModel.generated.tsx'
import { useCreateApiPropertiesIdChecks } from '@/sections/Properties/services/Properties.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreatePropertiesIdChecksProps = {
  id: string
  children: ReactNode
  defaultValues?: CreatePropertyCheckModel
}
export const CreatePropertiesIdChecks = (props: CreatePropertiesIdChecksProps) => {
  const methods = useForm<CreatePropertyCheckModel>({
    resolver: zodResolver(createPropertyCheckModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertiesIdChecks()

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
