import { createJournalEntryModel, CreateJournalEntryModel } from '@/models/createJournalEntryModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateJournalEntry, useCreateBulkJournalEntry } from '@/services/journalentries.ts'
import { createBulkJournalEntryModel, CreateBulkJournalEntryModel } from '@/models/createBulkJournalEntryModel.ts'

export type CreateJournalEntriesProps = { children: (control: Control<CreateJournalEntryModel>) => ReactNode }
export type CreateJournalEntriesBulkProps = { children: (control: Control<CreateBulkJournalEntryModel>) => ReactNode }

export const CreateJournalEntries = (props: CreateJournalEntriesProps) => {
  const { control, handleSubmit } = useForm<CreateJournalEntryModel>({
    resolver: zodResolver(createJournalEntryModel),
  })

  const mutator = useCreateJournalEntry()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
        mutator.mutate({ ...props, body })
      })}
    >
      {props.children(control)}
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white',
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateJournalEntriesBulk = (props: CreateJournalEntriesBulkProps) => {
  const { control, handleSubmit } = useForm<CreateBulkJournalEntryModel>({
    resolver: zodResolver(createBulkJournalEntryModel),
  })

  const mutator = useCreateBulkJournalEntry()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
        mutator.mutate({ ...props, body })
      })}
    >
      {props.children(control)}
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white',
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}
