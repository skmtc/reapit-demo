import { CreateKeyMovementModel, createKeyMovementModel } from '@/schemas/createKeyMovementModel.generated.tsx'
import { useCreateApiPropertiesIdKeysKeyIdMovements } from '@/services/Properties.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreatePropertiesIdKeysKeyIdMovementsProps = {
  id: string
  keyId: string
  children: ReactNode
  defaultValues?: CreateKeyMovementModel
}
export const CreatePropertiesIdKeysKeyIdMovements = (props: CreatePropertiesIdKeysKeyIdMovementsProps) => {
  const methods = useForm<CreateKeyMovementModel>({
    resolver: zodResolver(createKeyMovementModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiPropertiesIdKeysKeyIdMovements()

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
