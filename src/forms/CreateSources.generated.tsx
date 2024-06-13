import { createSourceModel, CreateSourceModel } from '@/schemas/createSourceModel.generated.tsx'
import { useCreateSource } from '@/services/Sources.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateSourcesProps = { children: ReactNode; defaultValues?: CreateSourceModel }
export const CreateSources = (props: CreateSourcesProps) => {
  const methods = useForm<CreateSourceModel>({
    resolver: zodResolver(createSourceModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateSource()

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
