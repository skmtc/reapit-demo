import {
  createPropertyModel,
  CreatePropertyModel,
  createCertificateModel,
  CreateCertificateModel,
  createKeyModel,
  CreateKeyModel,
  createKeyMovementModel,
  CreateKeyMovementModel,
  keyMovementModel,
  KeyMovementModel,
  createPropertyCheckModel,
  CreatePropertyCheckModel,
  createPropertyAppraisalModel,
  CreatePropertyAppraisalModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import {
  useCreateProperty,
  useCreatePropertyCertificate,
  useCreatePropertyKey,
  useCreatePropertyKeyMovement,
  useUpdatePropertyKeyMovement,
  useCreatePropertyCheck,
  useCreatePropertyAppraisal,
} from '@/services/properties.ts'

export type CreatePropertiesProps = { children: (control: Control<CreatePropertyModel>) => ReactNode }
export type CreatePropertiesIdCertificatesProps = {
  id: string
  children: (control: Control<CreateCertificateModel>) => ReactNode
}
export type CreatePropertiesIdKeysProps = { id: string; children: (control: Control<CreateKeyModel>) => ReactNode }
export type CreatePropertiesIdKeysKeyIdMovementsProps = {
  id: string
  keyId: string
  children: (control: Control<CreateKeyMovementModel>) => ReactNode
}
export type UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps = {
  id: string
  keyId: string
  movementId: string
  children: (control: Control<KeyMovementModel>) => ReactNode
}
export type CreatePropertiesIdChecksProps = {
  id: string
  children: (control: Control<CreatePropertyCheckModel>) => ReactNode
}
export type CreatePropertiesIdAppraisalsProps = {
  id: string
  children: (control: Control<CreatePropertyAppraisalModel>) => ReactNode
}

export const CreateProperties = (props: CreatePropertiesProps) => {
  const { control, handleSubmit } = useForm<CreatePropertyModel>({
    resolver: zodResolver(createPropertyModel),
  })

  const mutator = useCreateProperty()

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

export const CreatePropertiesIdCertificates = (props: CreatePropertiesIdCertificatesProps) => {
  const { control, handleSubmit } = useForm<CreateCertificateModel>({
    resolver: zodResolver(createCertificateModel),
  })

  const mutator = useCreatePropertyCertificate()

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

export const CreatePropertiesIdKeys = (props: CreatePropertiesIdKeysProps) => {
  const { control, handleSubmit } = useForm<CreateKeyModel>({
    resolver: zodResolver(createKeyModel),
  })

  const mutator = useCreatePropertyKey()

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

export const CreatePropertiesIdKeysKeyIdMovements = (props: CreatePropertiesIdKeysKeyIdMovementsProps) => {
  const { control, handleSubmit } = useForm<CreateKeyMovementModel>({
    resolver: zodResolver(createKeyMovementModel),
  })

  const mutator = useCreatePropertyKeyMovement()

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

export const UpdatePropertiesIdKeysKeyIdMovementsMovementId = (
  props: UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps,
) => {
  const { control, handleSubmit } = useForm<KeyMovementModel>({
    resolver: zodResolver(keyMovementModel),
  })

  const mutator = useUpdatePropertyKeyMovement()

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

export const CreatePropertiesIdChecks = (props: CreatePropertiesIdChecksProps) => {
  const { control, handleSubmit } = useForm<CreatePropertyCheckModel>({
    resolver: zodResolver(createPropertyCheckModel),
  })

  const mutator = useCreatePropertyCheck()

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

export const CreatePropertiesIdAppraisals = (props: CreatePropertiesIdAppraisalsProps) => {
  const { control, handleSubmit } = useForm<CreatePropertyAppraisalModel>({
    resolver: zodResolver(createPropertyAppraisalModel),
  })

  const mutator = useCreatePropertyAppraisal()

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
