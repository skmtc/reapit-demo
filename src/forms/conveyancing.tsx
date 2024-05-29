import { conveyancingModel, ConveyancingModel } from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateDownwardChain, useCreateUpwardChain } from '@/services/conveyancing.ts'

export type CreateConveyancingIdDownwardProps = { id: string; children: ReactNode }
export type CreateConveyancingIdUpwardProps = { id: string; children: ReactNode }

export const CreateConveyancingIdDownward = (props: CreateConveyancingIdDownwardProps) => {
  const methods = useForm<ConveyancingModel>({
    resolver: zodResolver(conveyancingModel),
  })

  const mutator = useCreateDownwardChain()

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

export const CreateConveyancingIdUpward = (props: CreateConveyancingIdUpwardProps) => {
  const methods = useForm<ConveyancingModel>({
    resolver: zodResolver(conveyancingModel),
  })

  const mutator = useCreateUpwardChain()

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
