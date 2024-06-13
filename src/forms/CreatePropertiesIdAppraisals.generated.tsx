import {
  CreatePropertyAppraisalModel,
  createPropertyAppraisalModel,
} from '@/schemas/createPropertyAppraisalModel.generated.tsx'
import { useCreateApiPropertiesIdAppraisals } from '@/services/Properties.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreatePropertiesIdAppraisalsProps = {
  id: string
  children: ReactNode
  defaultValues?: CreatePropertyAppraisalModel
}
export const CreatePropertiesIdAppraisals = (props: CreatePropertiesIdAppraisalsProps) => {
  const methods = useForm<CreatePropertyAppraisalModel>({
    resolver: zodResolver(createPropertyAppraisalModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertiesIdAppraisals()

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
