import { createOfficeModel, CreateOfficeModel, updateOfficeModel, UpdateOfficeModel } from 'schemas/index.ts'
import { usePostApiOffices, usePatchApiOfficesId } from 'services/Offices.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateOfficesProps = {children: ReactNode};
export const CreateOffices = (props:CreateOfficesProps) => {
      const methods = useForm<CreateOfficeModel>({
        resolver: zodResolver(createOfficeModel)
      })

      const mutator = usePostApiOffices()

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
export type PatchOfficesIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchOfficesId = (props:PatchOfficesIdProps) => {
      const methods = useForm<UpdateOfficeModel>({
        resolver: zodResolver(updateOfficeModel)
      })

      const mutator = usePatchApiOfficesId()

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