import { CreateOfferModel, createOfferModel } from '@/schemas/createOfferModel.generated.tsx'
import { useCreateApiOffers } from '@/services/Offers.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateOffersProps = { children: ReactNode; defaultValues?: CreateOfferModel }
export const CreateOffers = (props: CreateOffersProps) => {
  const methods = useForm<CreateOfferModel>({
    resolver: zodResolver(createOfferModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiOffers()

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
