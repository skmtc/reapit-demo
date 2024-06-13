import { CreateApplicantModel, createApplicantModel } from '@/schemas/createApplicantModel.generated.tsx'
import { useCreateApiApplicants } from '@/services/Applicants.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateApplicantsProps = { children: ReactNode; defaultValues?: CreateApplicantModel }
export const CreateApplicants = (props: CreateApplicantsProps) => {
  const methods = useForm<CreateApplicantModel>({
    resolver: zodResolver(createApplicantModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiApplicants()

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
