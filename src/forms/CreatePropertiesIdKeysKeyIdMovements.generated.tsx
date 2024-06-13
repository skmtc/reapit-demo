import { CreateKeyMovementModel, createKeyMovementModel } from '@/schemas/createKeyMovementModel.generated.tsx'
import { useCreateApiPropertiesIdKeysKeyIdMovements } from '@/services/Properties.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreatePropertiesIdKeysKeyIdMovementsProps = {
  id: string
  keyId: string
  children: ReactNode
  defaultValues?: CreateKeyMovementModel
}
export const CreatePropertiesIdKeysKeyIdMovements = (props: CreatePropertiesIdKeysKeyIdMovementsProps) => {
  const methods = useForm<CreateKeyMovementModel>({
    resolver: zodResolver(createKeyMovementModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertiesIdKeysKeyIdMovements()

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
