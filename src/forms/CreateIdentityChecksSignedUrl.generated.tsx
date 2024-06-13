import { createPreSignedUrlsModel, CreatePreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'
import { useCreateIdentityCheckSignedUrl } from '@/services/IdentityChecks.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateIdentityChecksSignedUrlProps = { children: ReactNode; defaultValues?: CreatePreSignedUrlsModel }
export const CreateIdentityChecksSignedUrl = (props: CreateIdentityChecksSignedUrlProps) => {
  const methods = useForm<CreatePreSignedUrlsModel>({
    resolver: zodResolver(createPreSignedUrlsModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateIdentityCheckSignedUrl()

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
