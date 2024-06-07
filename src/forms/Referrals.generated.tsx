import { createReferralModel, CreateReferralModel } from '@/schemas/createReferralModel.generated.tsx'
import { usePostApiReferrals, usePatchApiReferralsId } from 'services/Referrals.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { updateReferralModel, UpdateReferralModel } from '@/schemas/updateReferralModel.generated.tsx'

export type CreateReferralsProps = {children: ReactNode};
export const CreateReferrals = (props:CreateReferralsProps) => {
      const methods = useForm<CreateReferralModel>({
        resolver: zodResolver(createReferralModel)
      })

      const mutator = usePostApiReferrals()

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
export type PatchReferralsIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchReferralsId = (props:PatchReferralsIdProps) => {
      const methods = useForm<UpdateReferralModel>({
        resolver: zodResolver(updateReferralModel)
      })

      const mutator = usePatchApiReferralsId()

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