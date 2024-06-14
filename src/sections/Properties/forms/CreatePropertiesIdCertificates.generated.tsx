import { CreateCertificateModel, createCertificateModel } from '@/schemas/createCertificateModel.generated.tsx'
import { useCreateApiPropertiesIdCertificates } from '@/sections/Properties/services/Properties.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreatePropertiesIdCertificatesProps = {
  id: string
  children: ReactNode
  defaultValues?: CreateCertificateModel
}
export const CreatePropertiesIdCertificates = (props: CreatePropertiesIdCertificatesProps) => {
  const methods = useForm<CreateCertificateModel>({
    resolver: zodResolver(createCertificateModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertiesIdCertificates()

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
