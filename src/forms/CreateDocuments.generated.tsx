import { CreateDocumentModel, createDocumentModel } from '@/schemas/createDocumentModel.generated.tsx'
import { useCreateApiDocuments } from '@/services/Documents.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateDocumentsProps = { children: ReactNode; defaultValues?: CreateDocumentModel }
export const CreateDocuments = (props: CreateDocumentsProps) => {
  const methods = useForm<CreateDocumentModel>({
    resolver: zodResolver(createDocumentModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiDocuments()

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
