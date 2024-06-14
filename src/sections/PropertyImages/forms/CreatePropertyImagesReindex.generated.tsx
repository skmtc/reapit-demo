import {
  ReindexPropertyImagesModel,
  reindexPropertyImagesModel,
} from '@/schemas/reindexPropertyImagesModel.generated.tsx'
import { useCreateApiPropertyImagesReindex } from '@/sections/PropertyImages/services/PropertyImages.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreatePropertyImagesReindexProps = { children: ReactNode; defaultValues?: ReindexPropertyImagesModel }
export const CreatePropertyImagesReindex = (props: CreatePropertyImagesReindexProps) => {
  const methods = useForm<ReindexPropertyImagesModel>({
    resolver: zodResolver(reindexPropertyImagesModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertyImagesReindex()

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
