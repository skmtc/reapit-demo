import { CreateSourceModel, createSourceModel } from '@/schemas/createSourceModel.generated.tsx'
import { useCreateApiSources } from '@/sections/Sources/services/Sources.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateSourcesProps = { children: ReactNode; defaultValues?: CreateSourceModel }
export const CreateSources = (props: CreateSourcesProps) => {
  const methods = useForm<CreateSourceModel>({
    resolver: zodResolver(createSourceModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiSources()

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
