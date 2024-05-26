import { createOfferModel, CreateOfferModel } from '@/index.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { usePostApiOffers } from '@/services/offers.ts'

export type CreateOffersProps = { children: (control: Control<CreateOfferModel>) => ReactNode }

export const CreateOffers = (props: CreateOffersProps) => {
  const { control, handleSubmit } = useForm<CreateOfferModel>({
    resolver: zodResolver(createOfferModel),
  })

  const mutator = usePostApiOffers()

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
