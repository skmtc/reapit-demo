import { CreateReferralModel, createReferralModel } from '@/schemas/createReferralModel.generated.tsx'
import { useCreateApiReferrals } from '@/sections/Referrals/services/Referrals.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateReferralsProps = { children: ReactNode; defaultValues?: CreateReferralModel }
export const CreateReferrals = (props: CreateReferralsProps) => {
  const methods = useForm<CreateReferralModel>({
    resolver: zodResolver(createReferralModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiReferrals()

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
