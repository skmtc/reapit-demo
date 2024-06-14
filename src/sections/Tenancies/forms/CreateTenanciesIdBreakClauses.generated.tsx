import {
  CreateTenancyBreakClauseModel,
  createTenancyBreakClauseModel,
} from '@/schemas/createTenancyBreakClauseModel.generated.tsx'
import { useCreateApiTenanciesIdBreakClauses } from '@/sections/Tenancies/services/Tenancies.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateTenanciesIdBreakClausesProps = {
  id: string
  children: ReactNode
  defaultValues?: CreateTenancyBreakClauseModel
}
export const CreateTenanciesIdBreakClauses = (props: CreateTenanciesIdBreakClausesProps) => {
  const methods = useForm<CreateTenancyBreakClauseModel>({
    resolver: zodResolver(createTenancyBreakClauseModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiTenanciesIdBreakClauses()

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
