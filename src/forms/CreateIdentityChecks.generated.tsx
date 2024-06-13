import { CreateIdentityCheckModel, createIdentityCheckModel } from '@/schemas/createIdentityCheckModel.generated.tsx'
import { useCreateApiIdentityChecks } from '@/services/IdentityChecks.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateIdentityChecksProps = { children: ReactNode; defaultValues?: CreateIdentityCheckModel }
export const CreateIdentityChecks = (props: CreateIdentityChecksProps) => {
  const methods = useForm<CreateIdentityCheckModel>({
    resolver: zodResolver(createIdentityCheckModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiIdentityChecks()

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
