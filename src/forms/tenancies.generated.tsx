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
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import {
  useCreateTenancy,
  useCreateTenancyCheck,
  useCreateTenancyBreakClause,
  useCreateTenancyAllowance,
  useCreateTenancyResponsibility,
  useCreateTenancyRenewalNegotiation,
  useCreateTenancyRenewalNegotiationCheck,
} from '@/services/tenancies.generated.ts'

export type CreateTenanciesProps = { children: ReactNode }
export type CreateTenanciesIdChecksProps = { id: string; children: ReactNode }
export type CreateTenanciesIdBreakClausesProps = { id: string; children: ReactNode }
export type CreateTenanciesIdAllowancesProps = { id: string; children: ReactNode }
export type CreateTenanciesIdResponsibilitiesProps = { id: string; children: ReactNode }
export type CreateTenanciesIdRenewalNegotiationsProps = { id: string; children: ReactNode }
export type CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps = {
  id: string
  renewalId: string
  children: ReactNode
}

export const CreateTenancies = (props: CreateTenanciesProps) => {
  const methods = useForm<CreateTenancyModel>({
    resolver: zodResolver(createTenancyModel),
  })

  const mutator = useCreateTenancy()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}

export const CreateTenanciesIdChecks = (props: CreateTenanciesIdChecksProps) => {
  const methods = useForm<CreateTenancyCheckModel>({
    resolver: zodResolver(createTenancyCheckModel),
  })

  const mutator = useCreateTenancyCheck()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}

export const CreateTenanciesIdBreakClauses = (props: CreateTenanciesIdBreakClausesProps) => {
  const methods = useForm<CreateTenancyBreakClauseModel>({
    resolver: zodResolver(createTenancyBreakClauseModel),
  })

  const mutator = useCreateTenancyBreakClause()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}

export const CreateTenanciesIdAllowances = (props: CreateTenanciesIdAllowancesProps) => {
  const methods = useForm<CreateTenancyAllowanceModel>({
    resolver: zodResolver(createTenancyAllowanceModel),
  })

  const mutator = useCreateTenancyAllowance()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}

export const CreateTenanciesIdResponsibilities = (props: CreateTenanciesIdResponsibilitiesProps) => {
  const methods = useForm<CreateTenancyResponsibilityModel>({
    resolver: zodResolver(createTenancyResponsibilityModel),
  })

  const mutator = useCreateTenancyResponsibility()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}

export const CreateTenanciesIdRenewalNegotiations = (props: CreateTenanciesIdRenewalNegotiationsProps) => {
  const methods = useForm<CreateTenancyRenewalModel>({
    resolver: zodResolver(createTenancyRenewalModel),
  })

  const mutator = useCreateTenancyRenewalNegotiation()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}

export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecks = (
  props: CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps,
) => {
  const methods = useForm<CreateTenancyRenewalCheckModel>({
    resolver: zodResolver(createTenancyRenewalCheckModel),
  })

  const mutator = useCreateTenancyRenewalNegotiationCheck()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
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
    </FormProvider>
  )
}
