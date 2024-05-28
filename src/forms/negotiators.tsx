import { createNegotiatorModel, CreateNegotiatorModel } from '@/models/createNegotiatorModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateNegotiator } from '@/services/negotiators.ts'

export type CreateNegotiatorsProps = { children: (control: Control<CreateNegotiatorModel>) => ReactNode }

export const CreateNegotiators = (props: CreateNegotiatorsProps) => {
  const { control, handleSubmit } = useForm<CreateNegotiatorModel>({
    resolver: zodResolver(createNegotiatorModel),
  })

  const mutator = useCreateNegotiator()

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
