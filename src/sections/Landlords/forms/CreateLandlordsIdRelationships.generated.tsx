import {
  InsertLandlordContactRelationshipModel,
  insertLandlordContactRelationshipModel,
} from '@/schemas/insertLandlordContactRelationshipModel.generated.tsx'
import { useCreateApiLandlordsIdRelationships } from '@/sections/Landlords/services/Landlords.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateLandlordsIdRelationshipsProps = {
  id: string
  children: ReactNode
  defaultValues?: InsertLandlordContactRelationshipModel
}
export const CreateLandlordsIdRelationships = (props: CreateLandlordsIdRelationshipsProps) => {
  const methods = useForm<InsertLandlordContactRelationshipModel>({
    resolver: zodResolver(insertLandlordContactRelationshipModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiLandlordsIdRelationships()

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
