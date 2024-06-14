import {
  InsertApplicantContactRelationshipModel,
  insertApplicantContactRelationshipModel,
} from '@/schemas/insertApplicantContactRelationshipModel.generated.tsx'
import { useCreateApiApplicantsIdRelationships } from '@/sections/Applicants/services/Applicants.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateApplicantsIdRelationshipsProps = {
  id: string
  children: ReactNode
  defaultValues?: InsertApplicantContactRelationshipModel
}
export const CreateApplicantsIdRelationships = (props: CreateApplicantsIdRelationshipsProps) => {
  const methods = useForm<InsertApplicantContactRelationshipModel>({
    resolver: zodResolver(insertApplicantContactRelationshipModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiApplicantsIdRelationships()

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
