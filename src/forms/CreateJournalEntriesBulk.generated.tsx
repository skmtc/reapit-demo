import {
  CreateBulkJournalEntryModel,
  createBulkJournalEntryModel,
} from '@/schemas/createBulkJournalEntryModel.generated.tsx'
import { useCreateApiJournalEntriesBulk } from '@/services/JournalEntries.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateJournalEntriesBulkProps = { children: ReactNode; defaultValues?: CreateBulkJournalEntryModel }
export const CreateJournalEntriesBulk = (props: CreateJournalEntriesBulkProps) => {
  const methods = useForm<CreateBulkJournalEntryModel>({
    resolver: zodResolver(createBulkJournalEntryModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiJournalEntriesBulk()

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
