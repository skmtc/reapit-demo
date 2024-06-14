import { CreateTaskModel, createTaskModel } from '@/schemas/createTaskModel.generated.tsx'
import { useCreateApiTasks } from '@/sections/Tasks/services/Tasks.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateTasksProps = { children: ReactNode; defaultValues?: CreateTaskModel }
export const CreateTasks = (props: CreateTasksProps) => {
  const methods = useForm<CreateTaskModel>({
    resolver: zodResolver(createTaskModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiTasks()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        <FormLayout>{props.children}</FormLayout>

        <Button intent="primary">Submit</Button>
      </form>
    </FormProvider>
  )
}
