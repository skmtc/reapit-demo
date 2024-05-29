import { createReferralModel, CreateReferralModel } from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateReferral } from '@/services/referrals.ts'

export type CreateReferralsProps = { children: (control: Control<CreateReferralModel>) => ReactNode }

export const CreateReferrals = (props: CreateReferralsProps) => {
  const { control, handleSubmit } = useForm<CreateReferralModel>({
    resolver: zodResolver(createReferralModel),
  })

  const mutator = useCreateReferral()

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
