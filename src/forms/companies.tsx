import { createCompanyModel, CreateCompanyModel } from '@/models/createCompanyModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateCompany } from '@/services/companies.ts'

export type CreateCompaniesProps = { children: (control: Control<CreateCompanyModel>) => ReactNode }

export const CreateCompanies = (props: CreateCompaniesProps) => {
  const { control, handleSubmit } = useForm<CreateCompanyModel>({
    resolver: zodResolver(createCompanyModel),
  })

  const mutator = useCreateCompany()

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
