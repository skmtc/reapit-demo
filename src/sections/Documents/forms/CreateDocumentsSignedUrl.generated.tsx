import { CreatePreSignedUrlsModel, createPreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'
import { useCreateApiDocumentsSignedUrl } from '@/sections/Documents/services/Documents.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateDocumentsSignedUrlProps = { children: ReactNode; defaultValues?: CreatePreSignedUrlsModel }
export const CreateDocumentsSignedUrl = (props: CreateDocumentsSignedUrlProps) => {
  const methods = useForm<CreatePreSignedUrlsModel>({
    resolver: zodResolver(createPreSignedUrlsModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiDocumentsSignedUrl()

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
