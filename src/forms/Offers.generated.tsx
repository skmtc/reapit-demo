import { createOfferModel, CreateOfferModel, updateOfferModel, UpdateOfferModel } from 'schemas/index.ts'
import { usePostApiOffers, usePatchApiOffersId } from 'services/Offers.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateOffersProps = {children: ReactNode};
export const CreateOffers = (props:CreateOffersProps) => {
      const methods = useForm<CreateOfferModel>({
        resolver: zodResolver(createOfferModel)
      })

      const mutator = usePostApiOffers()

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
export type PatchOffersIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchOffersId = (props:PatchOffersIdProps) => {
      const methods = useForm<UpdateOfferModel>({
        resolver: zodResolver(updateOfferModel)
      })

      const mutator = usePatchApiOffersId()

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