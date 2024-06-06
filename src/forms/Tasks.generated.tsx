import { createTaskModel, CreateTaskModel, updateTaskModel, UpdateTaskModel } from 'schemas/index.ts'
import { usePostApiTasks, usePatchApiTasksId } from 'services/Tasks.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateTasksProps = {children: ReactNode};
export const CreateTasks = (props:CreateTasksProps) => {
      const methods = useForm<CreateTaskModel>({
        resolver: zodResolver(createTaskModel)
      })

      const mutator = usePostApiTasks()

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
export type PatchTasksIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchTasksId = (props:PatchTasksIdProps) => {
      const methods = useForm<UpdateTaskModel>({
        resolver: zodResolver(updateTaskModel)
      })

      const mutator = usePatchApiTasksId()

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