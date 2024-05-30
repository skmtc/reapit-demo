import {
  createApplicantModel,
  CreateApplicantModel,
  createApplicantContactRelationshipModel,
  CreateApplicantContactRelationshipModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateApplicant, useCreateApplicantRelationship } from '@/services/applicants.generated.ts'

export type CreateApplicantsProps = { children: ReactNode }
export type CreateApplicantsIdRelationshipsProps = { id: string; children: ReactNode }

export const CreateApplicants = (props: CreateApplicantsProps) => {
  const methods = useForm<CreateApplicantModel>({
    resolver: zodResolver(createApplicantModel),
  })

  const mutator = useCreateApplicant()

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

export const CreateApplicantsIdRelationships = (props: CreateApplicantsIdRelationshipsProps) => {
  const methods = useForm<CreateApplicantContactRelationshipModel>({
    resolver: zodResolver(createApplicantContactRelationshipModel),
  })

  const mutator = useCreateApplicantRelationship()

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
