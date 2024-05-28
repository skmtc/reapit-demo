import { createAreaModel, CreateAreaModel } from '@/models/createAreaModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateArea } from '@/services/areas.ts'

export type CreateAreasProps = { children: (control: Control<CreateAreaModel>) => ReactNode }

export const CreateAreas = (props: CreateAreasProps) => {
  const { control, handleSubmit } = useForm<CreateAreaModel>({
    resolver: zodResolver(createAreaModel),
  })

  const mutator = useCreateArea()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
        mutator.mutate({ ...props, body })
      })}
    >
      {props.children(control)}
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white',
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}
