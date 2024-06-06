import { updateVendorModel, UpdateVendorModel, insertVendorContactRelationshipModel, InsertVendorContactRelationshipModel } from 'schemas/index.ts'
import { usePatchApiVendorsId, usePostApiVendorsIdRelationships } from 'services/Vendors.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type PatchVendorsIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchVendorsId = (props:PatchVendorsIdProps) => {
      const methods = useForm<UpdateVendorModel>({
        resolver: zodResolver(updateVendorModel)
      })

      const mutator = usePatchApiVendorsId()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };
export type CreateVendorsIdRelationshipsProps = {id: string, children: ReactNode};
export const CreateVendorsIdRelationships = (props:CreateVendorsIdRelationshipsProps) => {
      const methods = useForm<InsertVendorContactRelationshipModel>({
        resolver: zodResolver(insertVendorContactRelationshipModel)
      })

      const mutator = usePostApiVendorsIdRelationships()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };