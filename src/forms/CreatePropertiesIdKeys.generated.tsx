import { createKeyModel, CreateKeyModel } from '@/schemas/createKeyModel.generated.tsx'
import { useCreatePropertyKey } from '@/services/Properties.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreatePropertiesIdKeysProps = { id: string; children: ReactNode; defaultValues?: CreateKeyModel }
export const CreatePropertiesIdKeys = (props: CreatePropertiesIdKeysProps) => {
  const methods = useForm<CreateKeyModel>({
    resolver: zodResolver(createKeyModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreatePropertyKey()

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
