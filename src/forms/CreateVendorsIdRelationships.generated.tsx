import {
  InsertVendorContactRelationshipModel,
  insertVendorContactRelationshipModel,
} from '@/schemas/insertVendorContactRelationshipModel.generated.tsx'
import { useCreateApiVendorsIdRelationships } from '@/services/Vendors.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateVendorsIdRelationshipsProps = {
  id: string
  children: ReactNode
  defaultValues?: InsertVendorContactRelationshipModel
}
export const CreateVendorsIdRelationships = (props: CreateVendorsIdRelationshipsProps) => {
  const methods = useForm<InsertVendorContactRelationshipModel>({
    resolver: zodResolver(insertVendorContactRelationshipModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiVendorsIdRelationships()

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
