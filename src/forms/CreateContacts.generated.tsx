import { CreateContactModel, createContactModel } from '@/schemas/createContactModel.generated.tsx'
import { useCreateApiContacts } from '@/services/Contacts.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateContactsProps = { children: ReactNode; defaultValues?: CreateContactModel }
export const CreateContacts = (props: CreateContactsProps) => {
  const methods = useForm<CreateContactModel>({
    resolver: zodResolver(createContactModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiContacts()

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
