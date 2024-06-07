import { createCompanyModel, CreateCompanyModel } from '@/schemas/createCompanyModel.generated.tsx'
import { usePostApiCompanies, usePatchApiCompaniesId } from 'services/Companies.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { updateCompanyModel, UpdateCompanyModel } from '@/schemas/updateCompanyModel.generated.tsx'

export type CreateCompaniesProps = {children: ReactNode};
export const CreateCompanies = (props:CreateCompaniesProps) => {
      const methods = useForm<CreateCompanyModel>({
        resolver: zodResolver(createCompanyModel)
      })

      const mutator = usePostApiCompanies()

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
export type PatchCompaniesIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchCompaniesId = (props:PatchCompaniesIdProps) => {
      const methods = useForm<UpdateCompanyModel>({
        resolver: zodResolver(updateCompanyModel)
      })

      const mutator = usePatchApiCompaniesId()

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