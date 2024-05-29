import { conveyancingModel, ConveyancingModel } from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateDownwardChain, useCreateUpwardChain } from '@/services/conveyancing.ts'

export type CreateConveyancingIdDownwardProps = {
  id: string
  children: (control: Control<ConveyancingModel>) => ReactNode
}
export type CreateConveyancingIdUpwardProps = {
  id: string
  children: (control: Control<ConveyancingModel>) => ReactNode
}

export const CreateConveyancingIdDownward = (props: CreateConveyancingIdDownwardProps) => {
  const { control, handleSubmit } = useForm<ConveyancingModel>({
    resolver: zodResolver(conveyancingModel),
  })

  const mutator = useCreateDownwardChain()

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

export const CreateConveyancingIdUpward = (props: CreateConveyancingIdUpwardProps) => {
  const { control, handleSubmit } = useForm<ConveyancingModel>({
    resolver: zodResolver(conveyancingModel),
  })

  const mutator = useCreateUpwardChain()

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
