import { createEnquiryModel, CreateEnquiryModel } from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateEnquiry } from '@/services/enquiries.ts'

export type CreateEnquiriesProps = { children: (control: Control<CreateEnquiryModel>) => ReactNode }

export const CreateEnquiries = (props: CreateEnquiriesProps) => {
  const { control, handleSubmit } = useForm<CreateEnquiryModel>({
    resolver: zodResolver(createEnquiryModel),
  })

  const mutator = useCreateEnquiry()

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
