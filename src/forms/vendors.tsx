import {
  insertVendorContactRelationshipModel,
  InsertVendorContactRelationshipModel,
} from '@/models/insertVendorContactRelationshipModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateVendorRelationship } from '@/services/vendors.ts'

export type CreateVendorsIdRelationshipsProps = {
  id: string
  children: (control: Control<InsertVendorContactRelationshipModel>) => ReactNode
}

export const CreateVendorsIdRelationships = (props: CreateVendorsIdRelationshipsProps) => {
  const { control, handleSubmit } = useForm<InsertVendorContactRelationshipModel>({
    resolver: zodResolver(insertVendorContactRelationshipModel),
  })

  const mutator = useCreateVendorRelationship()

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
