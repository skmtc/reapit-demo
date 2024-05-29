import {
  createApplicantModel,
  CreateApplicantModel,
  createApplicantContactRelationshipModel,
  CreateApplicantContactRelationshipModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateApplicant, useCreateApplicantRelationship } from '@/services/applicants.ts'

export type CreateApplicantsProps = { children: (control: Control<CreateApplicantModel>) => ReactNode }
export type CreateApplicantsIdRelationshipsProps = {
  id: string
  children: (control: Control<CreateApplicantContactRelationshipModel>) => ReactNode
}

export const CreateApplicants = (props: CreateApplicantsProps) => {
  const { control, handleSubmit } = useForm<CreateApplicantModel>({
    resolver: zodResolver(createApplicantModel),
  })

  const mutator = useCreateApplicant()

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

export const CreateApplicantsIdRelationships = (props: CreateApplicantsIdRelationshipsProps) => {
  const { control, handleSubmit } = useForm<CreateApplicantContactRelationshipModel>({
    resolver: zodResolver(createApplicantContactRelationshipModel),
  })

  const mutator = useCreateApplicantRelationship()

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
