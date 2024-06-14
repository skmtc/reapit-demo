import { CheckInKeyModel, checkInKeyModel } from '@/schemas/checkInKeyModel.generated.tsx'
import { useUpdateApiPropertiesIdKeysKeyIdMovementsMovementId } from '@/sections/Properties/services/Properties.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps = {
  id: string
  keyId: string
  movementId: string
  children: ReactNode
  defaultValues?: CheckInKeyModel
}
export const UpdatePropertiesIdKeysKeyIdMovementsMovementId = (
  props: UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps,
) => {
  const methods = useForm<CheckInKeyModel>({
    resolver: zodResolver(checkInKeyModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useUpdateApiPropertiesIdKeysKeyIdMovementsMovementId()

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
