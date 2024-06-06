import { createEnquiryModel, CreateEnquiryModel, updateEnquiryModel, UpdateEnquiryModel } from 'schemas/index.ts'
import { usePostApiEnquiries, usePatchApiEnquiriesId } from 'services/Enquiries.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateEnquiriesProps = {children: ReactNode};
export const CreateEnquiries = (props:CreateEnquiriesProps) => {
      const methods = useForm<CreateEnquiryModel>({
        resolver: zodResolver(createEnquiryModel)
      })

      const mutator = usePostApiEnquiries()

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
export type PatchEnquiriesIdProps = {'If-Match'?: string, id: number, children: ReactNode};
export const PatchEnquiriesId = (props:PatchEnquiriesIdProps) => {
      const methods = useForm<UpdateEnquiryModel>({
        resolver: zodResolver(updateEnquiryModel)
      })

      const mutator = usePatchApiEnquiriesId()

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