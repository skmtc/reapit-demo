import { CreateKeyModel, createKeyModel } from '@/schemas/createKeyModel.generated.tsx'
import { useCreateApiPropertiesIdKeys } from '@/sections/Properties/services/Properties.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreatePropertiesIdKeysProps = { id: string; children: ReactNode; defaultValues?: CreateKeyModel }
export const CreatePropertiesIdKeys = (props: CreatePropertiesIdKeysProps) => {
  const methods = useForm<CreateKeyModel>({
    resolver: zodResolver(createKeyModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertiesIdKeys()

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
