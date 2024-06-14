import { CreatePropertyModel, createPropertyModel } from '@/schemas/createPropertyModel.generated.tsx'
import { useCreateApiProperties } from '@/sections/Properties/services/Properties.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreatePropertiesProps = { children: ReactNode; defaultValues?: CreatePropertyModel }
export const CreateProperties = (props: CreatePropertiesProps) => {
  const methods = useForm<CreatePropertyModel>({
    resolver: zodResolver(createPropertyModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiProperties()

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
