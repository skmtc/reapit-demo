import { createLandlordModel, CreateLandlordModel } from '@/schemas/createLandlordModel.generated.tsx'
import { useCreateLandlord } from '@/services/Landlords.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateLandlordsProps = { children: ReactNode; defaultValues?: CreateLandlordModel }
export const CreateLandlords = (props: CreateLandlordsProps) => {
  const methods = useForm<CreateLandlordModel>({
    resolver: zodResolver(createLandlordModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateLandlord()

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
