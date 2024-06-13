import { CreateUpwardLinkModel, createUpwardLinkModel } from '@/schemas/createUpwardLinkModel.generated.tsx'
import { useCreateApiConveyancingIdUpward } from '@/services/Conveyancing.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateConveyancingIdUpwardProps = { id: string; children: ReactNode; defaultValues?: CreateUpwardLinkModel }
export const CreateConveyancingIdUpward = (props: CreateConveyancingIdUpwardProps) => {
  const methods = useForm<CreateUpwardLinkModel>({
    resolver: zodResolver(createUpwardLinkModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiConveyancingIdUpward()

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
