import { CreateIdentityCheckModel, createIdentityCheckModel } from '@/schemas/createIdentityCheckModel.generated.tsx'
import { useCreateApiIdentityChecks } from '@/services/IdentityChecks.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateIdentityChecksProps = { children: ReactNode; defaultValues?: CreateIdentityCheckModel }
export const CreateIdentityChecks = (props: CreateIdentityChecksProps) => {
  const methods = useForm<CreateIdentityCheckModel>({
    resolver: zodResolver(createIdentityCheckModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiIdentityChecks()

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
