import { CreateJournalEntryModel, createJournalEntryModel } from '@/schemas/createJournalEntryModel.generated.tsx'
import { useCreateApiJournalEntries } from '@/sections/JournalEntries/services/JournalEntries.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateJournalEntriesProps = { children: ReactNode; defaultValues?: CreateJournalEntryModel }
export const CreateJournalEntries = (props: CreateJournalEntriesProps) => {
  const methods = useForm<CreateJournalEntryModel>({
    resolver: zodResolver(createJournalEntryModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiJournalEntries()

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
