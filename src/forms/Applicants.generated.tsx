import { createApplicantModel, CreateApplicantModel, updateApplicantModel, UpdateApplicantModel, insertApplicantContactRelationshipModel, InsertApplicantContactRelationshipModel } from 'schemas/index.ts'
import { usePostApiApplicants, usePatchApiApplicantsId, usePostApiApplicantsIdRelationships } from 'services/Applicants.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateApplicantsProps = {children: ReactNode};
export const CreateApplicants = (props:CreateApplicantsProps) => {
      const methods = useForm<CreateApplicantModel>({
        resolver: zodResolver(createApplicantModel)
      })

      const mutator = usePostApiApplicants()

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
export type PatchApplicantsIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchApplicantsId = (props:PatchApplicantsIdProps) => {
      const methods = useForm<UpdateApplicantModel>({
        resolver: zodResolver(updateApplicantModel)
      })

      const mutator = usePatchApiApplicantsId()

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
export type CreateApplicantsIdRelationshipsProps = {id: string, children: ReactNode};
export const CreateApplicantsIdRelationships = (props:CreateApplicantsIdRelationshipsProps) => {
      const methods = useForm<InsertApplicantContactRelationshipModel>({
        resolver: zodResolver(insertApplicantContactRelationshipModel)
      })

      const mutator = usePostApiApplicantsIdRelationships()

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