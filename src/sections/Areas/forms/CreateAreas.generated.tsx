import { CreateAreaModel, createAreaModel } from '@/schemas/createAreaModel.generated.tsx'
import { useCreateApiAreas } from '@/sections/Areas/services/Areas.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateAreasProps = { children: ReactNode; defaultValues?: CreateAreaModel }
export const CreateAreas = (props: CreateAreasProps) => {
  const methods = useForm<CreateAreaModel>({
    resolver: zodResolver(createAreaModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiAreas()

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
