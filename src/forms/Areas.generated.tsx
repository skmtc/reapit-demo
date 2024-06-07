import { createAreaModel, CreateAreaModel } from '@/schemas/createAreaModel.generated.tsx'
import { usePostApiAreas, usePatchApiAreasId } from 'services/Areas.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { updateAreaModel, UpdateAreaModel } from '@/schemas/updateAreaModel.generated.tsx'

export type CreateAreasProps = {children: ReactNode};
export const CreateAreas = (props:CreateAreasProps) => {
      const methods = useForm<CreateAreaModel>({
        resolver: zodResolver(createAreaModel)
      })

      const mutator = usePostApiAreas()

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
export type PatchAreasIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchAreasId = (props:PatchAreasIdProps) => {
      const methods = useForm<UpdateAreaModel>({
        resolver: zodResolver(updateAreaModel)
      })

      const mutator = usePatchApiAreasId()

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