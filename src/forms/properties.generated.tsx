import {
  createPropertyModel,
  CreatePropertyModel,
  createCertificateModel,
  CreateCertificateModel,
  createKeyModel,
  CreateKeyModel,
  createKeyMovementModel,
  CreateKeyMovementModel,
  checkInKeyModel,
  CheckInKeyModel,
  createPropertyCheckModel,
  CreatePropertyCheckModel,
  createPropertyAppraisalModel,
  CreatePropertyAppraisalModel,
} from '@/schemas/index.ts'
import {
  useCreateProperty,
  useCreatePropertyCertificate,
  useCreatePropertyKey,
  useCreatePropertyKeyMovement,
  useUpdatePropertyKeyMovement,
  useCreatePropertyCheck,
  useCreatePropertyAppraisal,
} from '@/services/properties.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreatePropertiesProps = { children: ReactNode }
export type CreatePropertiesIdCertificatesProps = { id: string; children: ReactNode }
export type CreatePropertiesIdKeysProps = { id: string; children: ReactNode }
export type CreatePropertiesIdKeysKeyIdMovementsProps = { id: string; keyId: string; children: ReactNode }
export type UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps = {
  id: string
  keyId: string
  movementId: string
  children: ReactNode
}
export type CreatePropertiesIdChecksProps = { id: string; children: ReactNode }
export type CreatePropertiesIdAppraisalsProps = { id: string; children: ReactNode }

export const CreateProperties = (props: CreatePropertiesProps) => {
  const methods = useForm<CreatePropertyModel>({
    resolver: zodResolver(createPropertyModel),
  })

  const mutator = useCreateProperty()

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

export const CreatePropertiesIdCertificates = (props: CreatePropertiesIdCertificatesProps) => {
  const methods = useForm<CreateCertificateModel>({
    resolver: zodResolver(createCertificateModel),
  })

  const mutator = useCreatePropertyCertificate()

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

export const CreatePropertiesIdKeys = (props: CreatePropertiesIdKeysProps) => {
  const methods = useForm<CreateKeyModel>({
    resolver: zodResolver(createKeyModel),
  })

  const mutator = useCreatePropertyKey()

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

export const CreatePropertiesIdKeysKeyIdMovements = (props: CreatePropertiesIdKeysKeyIdMovementsProps) => {
  const methods = useForm<CreateKeyMovementModel>({
    resolver: zodResolver(createKeyMovementModel),
  })

  const mutator = useCreatePropertyKeyMovement()

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

export const UpdatePropertiesIdKeysKeyIdMovementsMovementId = (
  props: UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps,
) => {
  const methods = useForm<CheckInKeyModel>({
    resolver: zodResolver(checkInKeyModel),
  })

  const mutator = useUpdatePropertyKeyMovement()

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

export const CreatePropertiesIdChecks = (props: CreatePropertiesIdChecksProps) => {
  const methods = useForm<CreatePropertyCheckModel>({
    resolver: zodResolver(createPropertyCheckModel),
  })

  const mutator = useCreatePropertyCheck()

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

export const CreatePropertiesIdAppraisals = (props: CreatePropertiesIdAppraisalsProps) => {
  const methods = useForm<CreatePropertyAppraisalModel>({
    resolver: zodResolver(createPropertyAppraisalModel),
  })

  const mutator = useCreatePropertyAppraisal()

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
