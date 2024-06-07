import { createSourceModel, CreateSourceModel } from '@/schemas/createSourceModel.generated.tsx'
import { usePostApiSources, usePatchApiSourcesId } from 'services/Sources.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { updateSourceModel, UpdateSourceModel } from '@/schemas/updateSourceModel.generated.tsx'

export type CreateSourcesProps = {children: ReactNode};
export const CreateSources = (props:CreateSourcesProps) => {
      const methods = useForm<CreateSourceModel>({
        resolver: zodResolver(createSourceModel)
      })

      const mutator = usePostApiSources()

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
export type PatchSourcesIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchSourcesId = (props:PatchSourcesIdProps) => {
      const methods = useForm<UpdateSourceModel>({
        resolver: zodResolver(updateSourceModel)
      })

      const mutator = usePatchApiSourcesId()

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