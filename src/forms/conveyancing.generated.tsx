import {
  createDownwardLinkModel,
  CreateDownwardLinkModel,
  createUpwardLinkModel,
  CreateUpwardLinkModel,
} from '@/schemas/index.ts'
import { useCreateDownwardChain, useCreateUpwardChain } from '@/services/conveyancing.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateConveyancingIdDownwardProps = { id: string; children: ReactNode }
export type CreateConveyancingIdUpwardProps = { id: string; children: ReactNode }

export const CreateConveyancingIdDownward = (props: CreateConveyancingIdDownwardProps) => {
  const methods = useForm<CreateDownwardLinkModel>({
    resolver: zodResolver(createDownwardLinkModel),
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
  const methods = useForm<CreateUpwardLinkModel>({
    resolver: zodResolver(createUpwardLinkModel),
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
