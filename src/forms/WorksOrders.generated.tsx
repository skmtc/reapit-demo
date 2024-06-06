import { createWorksOrderModel, CreateWorksOrderModel, updateWorksOrderModel, UpdateWorksOrderModel, createWorksOrderItemModel, CreateWorksOrderItemModel, updateWorksOrderItemModel, UpdateWorksOrderItemModel } from 'schemas/index.ts'
import { usePostApiWorksOrders, usePatchApiWorksOrdersId, usePostApiWorksOrdersIdItems, usePatchApiWorksOrdersIdItemsItemId } from 'services/WorksOrders.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateWorksOrdersProps = {children: ReactNode};
export const CreateWorksOrders = (props:CreateWorksOrdersProps) => {
      const methods = useForm<CreateWorksOrderModel>({
        resolver: zodResolver(createWorksOrderModel)
      })

      const mutator = usePostApiWorksOrders()

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
export type PatchWorksOrdersIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchWorksOrdersId = (props:PatchWorksOrdersIdProps) => {
      const methods = useForm<UpdateWorksOrderModel>({
        resolver: zodResolver(updateWorksOrderModel)
      })

      const mutator = usePatchApiWorksOrdersId()

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
export type CreateWorksOrdersIdItemsProps = {id: string, children: ReactNode};
export const CreateWorksOrdersIdItems = (props:CreateWorksOrdersIdItemsProps) => {
      const methods = useForm<CreateWorksOrderItemModel>({
        resolver: zodResolver(createWorksOrderItemModel)
      })

      const mutator = usePostApiWorksOrdersIdItems()

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
export type PatchWorksOrdersIdItemsItemIdProps = {'If-Match'?: string, id: string, itemId: string, children: ReactNode};
export const PatchWorksOrdersIdItemsItemId = (props:PatchWorksOrdersIdItemsItemIdProps) => {
      const methods = useForm<UpdateWorksOrderItemModel>({
        resolver: zodResolver(updateWorksOrderItemModel)
      })

      const mutator = usePatchApiWorksOrdersIdItemsItemId()

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