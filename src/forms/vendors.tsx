import { insertVendorContactRelationshipModel, InsertVendorContactRelationshipModel } from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateVendorRelationship } from '@/services/vendors.ts'

export type CreateVendorsIdRelationshipsProps = { id: string; children: ReactNode }

export const CreateVendorsIdRelationships = (props: CreateVendorsIdRelationshipsProps) => {
  const methods = useForm<InsertVendorContactRelationshipModel>({
    resolver: zodResolver(insertVendorContactRelationshipModel),
  })

  const mutator = useCreateVendorRelationship()

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
