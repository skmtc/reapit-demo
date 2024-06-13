import {
  CreateBulkJournalEntryModel,
  createBulkJournalEntryModel,
} from '@/schemas/createBulkJournalEntryModel.generated.tsx'
import { useCreateApiJournalEntriesBulk } from '@/services/JournalEntries.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
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
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}
