import { createJournalEntryModel, CreateJournalEntryModel } from '@/schemas/createJournalEntryModel.generated.tsx'
import { usePostApiJournalEntries, usePostApiJournalEntriesBulk } from 'services/JournalEntries.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { createBulkJournalEntryModel, CreateBulkJournalEntryModel } from '@/schemas/createBulkJournalEntryModel.generated.tsx'

export type CreateJournalEntriesProps = {children: ReactNode};
export const CreateJournalEntries = (props:CreateJournalEntriesProps) => {
      const methods = useForm<CreateJournalEntryModel>({
        resolver: zodResolver(createJournalEntryModel)
      })

      const mutator = usePostApiJournalEntries()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };
export type CreateJournalEntriesBulkProps = {children: ReactNode};
export const CreateJournalEntriesBulk = (props:CreateJournalEntriesBulkProps) => {
      const methods = useForm<CreateBulkJournalEntryModel>({
        resolver: zodResolver(createBulkJournalEntryModel)
      })

      const mutator = usePostApiJournalEntriesBulk()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };