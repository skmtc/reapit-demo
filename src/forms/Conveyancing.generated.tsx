import { updateConveyancingModel, UpdateConveyancingModel, createDownwardLinkModel, CreateDownwardLinkModel, createUpwardLinkModel, CreateUpwardLinkModel } from 'schemas/index.ts'
import { usePatchApiConveyancingId, usePostApiConveyancingIdDownward, usePostApiConveyancingIdUpward } from 'services/Conveyancing.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type PatchConveyancingIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchConveyancingId = (props:PatchConveyancingIdProps) => {
      const methods = useForm<UpdateConveyancingModel>({
        resolver: zodResolver(updateConveyancingModel)
      })

      const mutator = usePatchApiConveyancingId()

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
export type CreateConveyancingIdDownwardProps = {id: string, children: ReactNode};
export const CreateConveyancingIdDownward = (props:CreateConveyancingIdDownwardProps) => {
      const methods = useForm<CreateDownwardLinkModel>({
        resolver: zodResolver(createDownwardLinkModel)
      })

      const mutator = usePostApiConveyancingIdDownward()

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
export type CreateConveyancingIdUpwardProps = {id: string, children: ReactNode};
export const CreateConveyancingIdUpward = (props:CreateConveyancingIdUpwardProps) => {
      const methods = useForm<CreateUpwardLinkModel>({
        resolver: zodResolver(createUpwardLinkModel)
      })

      const mutator = usePostApiConveyancingIdUpward()

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