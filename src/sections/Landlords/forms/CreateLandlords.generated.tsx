import { CreateLandlordModel, createLandlordModel } from '@/schemas/createLandlordModel.generated.tsx'
import { useCreateApiLandlords } from '@/sections/Landlords/services/Landlords.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateLandlordsProps = { children: ReactNode; defaultValues?: CreateLandlordModel }
export const CreateLandlords = (props: CreateLandlordsProps) => {
  const methods = useForm<CreateLandlordModel>({
    resolver: zodResolver(createLandlordModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiLandlords()

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
