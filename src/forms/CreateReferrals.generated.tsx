import { createReferralModel, CreateReferralModel } from '@/schemas/createReferralModel.generated.tsx'
import { useCreateReferral } from '@/services/Referrals.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateReferralsProps = { children: ReactNode; defaultValues?: CreateReferralModel }
export const CreateReferrals = (props: CreateReferralsProps) => {
  const methods = useForm<CreateReferralModel>({
    resolver: zodResolver(createReferralModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateReferral()

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
