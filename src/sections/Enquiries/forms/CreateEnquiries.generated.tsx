import { CreateEnquiryModel, createEnquiryModel } from '@/schemas/createEnquiryModel.generated.tsx'
import { useCreateApiEnquiries } from '@/sections/Enquiries/services/Enquiries.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateEnquiriesProps = { children: ReactNode; defaultValues?: CreateEnquiryModel }
export const CreateEnquiries = (props: CreateEnquiriesProps) => {
  const methods = useForm<CreateEnquiryModel>({
    resolver: zodResolver(createEnquiryModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiEnquiries()

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
