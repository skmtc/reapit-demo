import { CreatePropertyImageModel, createPropertyImageModel } from '@/schemas/createPropertyImageModel.generated.tsx'
import { useCreateApiPropertyImages } from '@/sections/PropertyImages/services/PropertyImages.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreatePropertyImagesProps = { children: ReactNode; defaultValues?: CreatePropertyImageModel }
export const CreatePropertyImages = (props: CreatePropertyImagesProps) => {
  const methods = useForm<CreatePropertyImageModel>({
    resolver: zodResolver(createPropertyImageModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertyImages()

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
