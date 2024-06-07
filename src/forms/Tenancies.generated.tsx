import { createTenancyModel, CreateTenancyModel } from '@/schemas/createTenancyModel.generated.tsx'
import { usePostApiTenancies, usePatchApiTenanciesId, usePostApiTenanciesIdChecks, usePatchApiTenanciesIdChecksCheckId, usePostApiTenanciesIdBreakClauses, usePatchApiTenanciesIdBreakClausesClauseId, usePostApiTenanciesIdAllowances, usePatchApiTenanciesIdAllowancesAllowanceId, usePostApiTenanciesIdResponsibilities, usePatchApiTenanciesIdResponsibilitiesResponsibilityId, usePostApiTenanciesIdRenewalNegotiations, usePatchApiTenanciesIdRenewalNegotiationsRenewalId, usePostApiTenanciesIdRenewalNegotiationsRenewalIdChecks, usePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId } from 'services/Tenancies.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { updateTenancyModel, UpdateTenancyModel } from '@/schemas/updateTenancyModel.generated.tsx'
import { createTenancyCheckModel, CreateTenancyCheckModel } from '@/schemas/createTenancyCheckModel.generated.tsx'
import { updateTenancyCheckModel, UpdateTenancyCheckModel } from '@/schemas/updateTenancyCheckModel.generated.tsx'
import { createTenancyBreakClauseModel, CreateTenancyBreakClauseModel } from '@/schemas/createTenancyBreakClauseModel.generated.tsx'
import { updateTenancyBreakClauseModel, UpdateTenancyBreakClauseModel } from '@/schemas/updateTenancyBreakClauseModel.generated.tsx'
import { createTenancyAllowanceModel, CreateTenancyAllowanceModel } from '@/schemas/createTenancyAllowanceModel.generated.tsx'
import { updateTenancyAllowanceModel, UpdateTenancyAllowanceModel } from '@/schemas/updateTenancyAllowanceModel.generated.tsx'
import { createTenancyResponsibilityModel, CreateTenancyResponsibilityModel } from '@/schemas/createTenancyResponsibilityModel.generated.tsx'
import { updateTenancyResponsibilityModel, UpdateTenancyResponsibilityModel } from '@/schemas/updateTenancyResponsibilityModel.generated.tsx'
import { createTenancyRenewalModel, CreateTenancyRenewalModel } from '@/schemas/createTenancyRenewalModel.generated.tsx'
import { updateTenancyRenewalModel, UpdateTenancyRenewalModel } from '@/schemas/updateTenancyRenewalModel.generated.tsx'
import { createTenancyRenewalCheckModel, CreateTenancyRenewalCheckModel } from '@/schemas/createTenancyRenewalCheckModel.generated.tsx'
import { updateTenancyRenewalCheckModel, UpdateTenancyRenewalCheckModel } from '@/schemas/updateTenancyRenewalCheckModel.generated.tsx'

export type CreateTenanciesProps = {children: ReactNode};
export const CreateTenancies = (props:CreateTenanciesProps) => {
      const methods = useForm<CreateTenancyModel>({
        resolver: zodResolver(createTenancyModel)
      })

      const mutator = usePostApiTenancies()

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
export type PatchTenanciesIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchTenanciesId = (props:PatchTenanciesIdProps) => {
      const methods = useForm<UpdateTenancyModel>({
        resolver: zodResolver(updateTenancyModel)
      })

      const mutator = usePatchApiTenanciesId()

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
export type CreateTenanciesIdChecksProps = {id: string, children: ReactNode};
export const CreateTenanciesIdChecks = (props:CreateTenanciesIdChecksProps) => {
      const methods = useForm<CreateTenancyCheckModel>({
        resolver: zodResolver(createTenancyCheckModel)
      })

      const mutator = usePostApiTenanciesIdChecks()

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
export type PatchTenanciesIdChecksCheckIdProps = {'If-Match'?: string, id: string, checkId: string, children: ReactNode};
export const PatchTenanciesIdChecksCheckId = (props:PatchTenanciesIdChecksCheckIdProps) => {
      const methods = useForm<UpdateTenancyCheckModel>({
        resolver: zodResolver(updateTenancyCheckModel)
      })

      const mutator = usePatchApiTenanciesIdChecksCheckId()

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
export type CreateTenanciesIdBreakClausesProps = {id: string, children: ReactNode};
export const CreateTenanciesIdBreakClauses = (props:CreateTenanciesIdBreakClausesProps) => {
      const methods = useForm<CreateTenancyBreakClauseModel>({
        resolver: zodResolver(createTenancyBreakClauseModel)
      })

      const mutator = usePostApiTenanciesIdBreakClauses()

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
export type PatchTenanciesIdBreakClausesClauseIdProps = {'If-Match'?: string, id: string, clauseId: string, children: ReactNode};
export const PatchTenanciesIdBreakClausesClauseId = (props:PatchTenanciesIdBreakClausesClauseIdProps) => {
      const methods = useForm<UpdateTenancyBreakClauseModel>({
        resolver: zodResolver(updateTenancyBreakClauseModel)
      })

      const mutator = usePatchApiTenanciesIdBreakClausesClauseId()

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
export type CreateTenanciesIdAllowancesProps = {id: string, children: ReactNode};
export const CreateTenanciesIdAllowances = (props:CreateTenanciesIdAllowancesProps) => {
      const methods = useForm<CreateTenancyAllowanceModel>({
        resolver: zodResolver(createTenancyAllowanceModel)
      })

      const mutator = usePostApiTenanciesIdAllowances()

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
export type PatchTenanciesIdAllowancesAllowanceIdProps = {'If-Match'?: string, id: string, allowanceId: string, children: ReactNode};
export const PatchTenanciesIdAllowancesAllowanceId = (props:PatchTenanciesIdAllowancesAllowanceIdProps) => {
      const methods = useForm<UpdateTenancyAllowanceModel>({
        resolver: zodResolver(updateTenancyAllowanceModel)
      })

      const mutator = usePatchApiTenanciesIdAllowancesAllowanceId()

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
export type CreateTenanciesIdResponsibilitiesProps = {id: string, children: ReactNode};
export const CreateTenanciesIdResponsibilities = (props:CreateTenanciesIdResponsibilitiesProps) => {
      const methods = useForm<CreateTenancyResponsibilityModel>({
        resolver: zodResolver(createTenancyResponsibilityModel)
      })

      const mutator = usePostApiTenanciesIdResponsibilities()

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
export type PatchTenanciesIdResponsibilitiesResponsibilityIdProps = {'If-Match'?: string, id: string, responsibilityId: string, children: ReactNode};
export const PatchTenanciesIdResponsibilitiesResponsibilityId = (props:PatchTenanciesIdResponsibilitiesResponsibilityIdProps) => {
      const methods = useForm<UpdateTenancyResponsibilityModel>({
        resolver: zodResolver(updateTenancyResponsibilityModel)
      })

      const mutator = usePatchApiTenanciesIdResponsibilitiesResponsibilityId()

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
export type CreateTenanciesIdRenewalNegotiationsProps = {id: string, children: ReactNode};
export const CreateTenanciesIdRenewalNegotiations = (props:CreateTenanciesIdRenewalNegotiationsProps) => {
      const methods = useForm<CreateTenancyRenewalModel>({
        resolver: zodResolver(createTenancyRenewalModel)
      })

      const mutator = usePostApiTenanciesIdRenewalNegotiations()

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
export type PatchTenanciesIdRenewalNegotiationsRenewalIdProps = {'If-Match'?: string, id: string, renewalId: string, children: ReactNode};
export const PatchTenanciesIdRenewalNegotiationsRenewalId = (props:PatchTenanciesIdRenewalNegotiationsRenewalIdProps) => {
      const methods = useForm<UpdateTenancyRenewalModel>({
        resolver: zodResolver(updateTenancyRenewalModel)
      })

      const mutator = usePatchApiTenanciesIdRenewalNegotiationsRenewalId()

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
export type CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps = {id: string, renewalId: string, children: ReactNode};
export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecks = (props:CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps) => {
      const methods = useForm<CreateTenancyRenewalCheckModel>({
        resolver: zodResolver(createTenancyRenewalCheckModel)
      })

      const mutator = usePostApiTenanciesIdRenewalNegotiationsRenewalIdChecks()

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
export type PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdProps = {'If-Match'?: string, id: string, renewalId: string, checkId: string, children: ReactNode};
export const PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = (props:PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdProps) => {
      const methods = useForm<UpdateTenancyRenewalCheckModel>({
        resolver: zodResolver(updateTenancyRenewalCheckModel)
      })

      const mutator = usePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId()

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