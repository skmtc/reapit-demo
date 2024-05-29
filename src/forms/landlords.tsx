import {
  createLandlordModel,
  CreateLandlordModel,
  createLandlordContactRelationshipModel,
  CreateLandlordContactRelationshipModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateLandlord, useCreateLandlordRelationship } from '@/services/landlords.ts'

export type CreateLandlordsProps = { children: ReactNode }
export type CreateLandlordsIdRelationshipsProps = { id: string; children: ReactNode }

export const CreateLandlords = (props: CreateLandlordsProps) => {
  const methods = useForm<CreateLandlordModel>({
    resolver: zodResolver(createLandlordModel),
  })

  const mutator = useCreateLandlord()

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

export const CreateLandlordsIdRelationships = (props: CreateLandlordsIdRelationshipsProps) => {
  const methods = useForm<CreateLandlordContactRelationshipModel>({
    resolver: zodResolver(createLandlordContactRelationshipModel),
  })

  const mutator = useCreateLandlordRelationship()

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
