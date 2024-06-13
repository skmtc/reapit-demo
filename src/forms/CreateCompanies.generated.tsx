import { CreateCompanyModel, createCompanyModel } from '@/schemas/createCompanyModel.generated.tsx'
import { useCreateApiCompanies } from '@/services/Companies.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateCompaniesProps = { children: ReactNode; defaultValues?: CreateCompanyModel }
export const CreateCompanies = (props: CreateCompaniesProps) => {
  const methods = useForm<CreateCompanyModel>({
    resolver: zodResolver(createCompanyModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiCompanies()

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
