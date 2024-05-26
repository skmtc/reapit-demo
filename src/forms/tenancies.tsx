import {
  createTenancyModel,
  CreateTenancyModel,
  createTenancyCheckModel,
  CreateTenancyCheckModel,
  createTenancyBreakClauseModel,
  CreateTenancyBreakClauseModel,
  createTenancyAllowanceModel,
  CreateTenancyAllowanceModel,
  createTenancyResponsibilityModel,
  CreateTenancyResponsibilityModel,
  createTenancyRenewalModel,
  CreateTenancyRenewalModel,
  createTenancyRenewalCheckModel,
  CreateTenancyRenewalCheckModel,
} from '@/index.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import {
  usePostApiTenancies,
  usePostApiTenanciesIdChecks,
  usePostApiTenanciesIdBreakClauses,
  usePostApiTenanciesIdAllowances,
  usePostApiTenanciesIdResponsibilities,
  usePostApiTenanciesIdRenewalNegotiations,
  usePostApiTenanciesIdRenewalNegotiationsRenewalIdChecks,
} from '@/services/tenancies.ts'

export type CreateTenanciesProps = { children: (control: Control<CreateTenancyModel>) => ReactNode }
export type CreateTenanciesIdChecksProps = {
  id: string
  children: (control: Control<CreateTenancyCheckModel>) => ReactNode
}
export type CreateTenanciesIdBreakClausesProps = {
  id: string
  children: (control: Control<CreateTenancyBreakClauseModel>) => ReactNode
}
export type CreateTenanciesIdAllowancesProps = {
  id: string
  children: (control: Control<CreateTenancyAllowanceModel>) => ReactNode
}
export type CreateTenanciesIdResponsibilitiesProps = {
  id: string
  children: (control: Control<CreateTenancyResponsibilityModel>) => ReactNode
}
export type CreateTenanciesIdRenewalNegotiationsProps = {
  id: string
  children: (control: Control<CreateTenancyRenewalModel>) => ReactNode
}
export type CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps = {
  id: string
  renewalId: string
  children: (control: Control<CreateTenancyRenewalCheckModel>) => ReactNode
}

export const CreateTenancies = (props: CreateTenanciesProps) => {
  const { control, handleSubmit } = useForm<CreateTenancyModel>({
    resolver: zodResolver(createTenancyModel),
  })

  const mutator = usePostApiTenancies()

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

export const CreateTenanciesIdChecks = (props: CreateTenanciesIdChecksProps) => {
  const { control, handleSubmit } = useForm<CreateTenancyCheckModel>({
    resolver: zodResolver(createTenancyCheckModel),
  })

  const mutator = usePostApiTenanciesIdChecks()

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

export const CreateTenanciesIdBreakClauses = (props: CreateTenanciesIdBreakClausesProps) => {
  const { control, handleSubmit } = useForm<CreateTenancyBreakClauseModel>({
    resolver: zodResolver(createTenancyBreakClauseModel),
  })

  const mutator = usePostApiTenanciesIdBreakClauses()

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

export const CreateTenanciesIdAllowances = (props: CreateTenanciesIdAllowancesProps) => {
  const { control, handleSubmit } = useForm<CreateTenancyAllowanceModel>({
    resolver: zodResolver(createTenancyAllowanceModel),
  })

  const mutator = usePostApiTenanciesIdAllowances()

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

export const CreateTenanciesIdResponsibilities = (props: CreateTenanciesIdResponsibilitiesProps) => {
  const { control, handleSubmit } = useForm<CreateTenancyResponsibilityModel>({
    resolver: zodResolver(createTenancyResponsibilityModel),
  })

  const mutator = usePostApiTenanciesIdResponsibilities()

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

export const CreateTenanciesIdRenewalNegotiations = (props: CreateTenanciesIdRenewalNegotiationsProps) => {
  const { control, handleSubmit } = useForm<CreateTenancyRenewalModel>({
    resolver: zodResolver(createTenancyRenewalModel),
  })

  const mutator = usePostApiTenanciesIdRenewalNegotiations()

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

export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecks = (
  props: CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps,
) => {
  const { control, handleSubmit } = useForm<CreateTenancyRenewalCheckModel>({
    resolver: zodResolver(createTenancyRenewalCheckModel),
  })

  const mutator = usePostApiTenanciesIdRenewalNegotiationsRenewalIdChecks()

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
