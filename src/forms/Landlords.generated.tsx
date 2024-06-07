import { createLandlordModel, CreateLandlordModel } from '@/schemas/createLandlordModel.generated.tsx'
import { usePostApiLandlords, usePatchApiLandlordsId, usePostApiLandlordsIdRelationships } from 'services/Landlords.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { updateLandlordModel, UpdateLandlordModel } from '@/schemas/updateLandlordModel.generated.tsx'
import { insertLandlordContactRelationshipModel, InsertLandlordContactRelationshipModel } from '@/schemas/insertLandlordContactRelationshipModel.generated.tsx'

export type CreateLandlordsProps = {children: ReactNode};
export const CreateLandlords = (props:CreateLandlordsProps) => {
      const methods = useForm<CreateLandlordModel>({
        resolver: zodResolver(createLandlordModel)
      })

      const mutator = usePostApiLandlords()

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
export type PatchLandlordsIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchLandlordsId = (props:PatchLandlordsIdProps) => {
      const methods = useForm<UpdateLandlordModel>({
        resolver: zodResolver(updateLandlordModel)
      })

      const mutator = usePatchApiLandlordsId()

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
export type CreateLandlordsIdRelationshipsProps = {id: string, children: ReactNode};
export const CreateLandlordsIdRelationships = (props:CreateLandlordsIdRelationshipsProps) => {
      const methods = useForm<InsertLandlordContactRelationshipModel>({
        resolver: zodResolver(insertLandlordContactRelationshipModel)
      })

      const mutator = usePostApiLandlordsIdRelationships()

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