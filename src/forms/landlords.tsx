import {
  createLandlordModel,
  CreateLandlordModel,
  createLandlordContactRelationshipModel,
  CreateLandlordContactRelationshipModel,
} from '@/index.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { usePostApiLandlords, usePostApiLandlordsIdRelationships } from '@/services/landlords.ts'

export type CreateLandlordsProps = { children: (control: Control<CreateLandlordModel>) => ReactNode }
export type CreateLandlordsIdRelationshipsProps = {
  id: string
  children: (control: Control<CreateLandlordContactRelationshipModel>) => ReactNode
}

export const CreateLandlords = (props: CreateLandlordsProps) => {
  const { control, handleSubmit } = useForm<CreateLandlordModel>({
    resolver: zodResolver(createLandlordModel),
  })

  const mutator = usePostApiLandlords()

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

export const CreateLandlordsIdRelationships = (props: CreateLandlordsIdRelationshipsProps) => {
  const { control, handleSubmit } = useForm<CreateLandlordContactRelationshipModel>({
    resolver: zodResolver(createLandlordContactRelationshipModel),
  })

  const mutator = usePostApiLandlordsIdRelationships()

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
