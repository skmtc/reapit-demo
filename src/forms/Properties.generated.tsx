import { createPropertyModel, CreatePropertyModel } from '@/schemas/createPropertyModel.generated.tsx'
import { usePostApiProperties, usePatchApiPropertiesId, usePostApiPropertiesIdCertificates, usePatchApiPropertiesIdCertificatesCertificateId, usePatchApiPropertiesIdCertificatesResponsibilities, usePostApiPropertiesIdKeys, usePostApiPropertiesIdKeysKeyIdMovements, usePutApiPropertiesIdKeysKeyIdMovementsMovementId, usePostApiPropertiesIdChecks, usePatchApiPropertiesIdChecksCheckId, usePostApiPropertiesIdAppraisals, usePatchApiPropertiesIdAppraisalsAppraisalId } from 'services/Properties.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { updatePropertyModel, UpdatePropertyModel } from '@/schemas/updatePropertyModel.generated.tsx'
import { createCertificateModel, CreateCertificateModel } from '@/schemas/createCertificateModel.generated.tsx'
import { updateCertificateModel, UpdateCertificateModel } from '@/schemas/updateCertificateModel.generated.tsx'
import { updateCertificateResponsibilitiesModel, UpdateCertificateResponsibilitiesModel } from '@/schemas/updateCertificateResponsibilitiesModel.generated.tsx'
import { createKeyModel, CreateKeyModel } from '@/schemas/createKeyModel.generated.tsx'
import { createKeyMovementModel, CreateKeyMovementModel } from '@/schemas/createKeyMovementModel.generated.tsx'
import { checkInKeyModel, CheckInKeyModel } from '@/schemas/checkInKeyModel.generated.tsx'
import { createPropertyCheckModel, CreatePropertyCheckModel } from '@/schemas/createPropertyCheckModel.generated.tsx'
import { updatePropertyCheckModel, UpdatePropertyCheckModel } from '@/schemas/updatePropertyCheckModel.generated.tsx'
import { createPropertyAppraisalModel, CreatePropertyAppraisalModel } from '@/schemas/createPropertyAppraisalModel.generated.tsx'
import { updatePropertyAppraisalModel, UpdatePropertyAppraisalModel } from '@/schemas/updatePropertyAppraisalModel.generated.tsx'

export type CreatePropertiesProps = {children: ReactNode};
export const CreateProperties = (props:CreatePropertiesProps) => {
      const methods = useForm<CreatePropertyModel>({
        resolver: zodResolver(createPropertyModel)
      })

      const mutator = usePostApiProperties()

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
export type PatchPropertiesIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchPropertiesId = (props:PatchPropertiesIdProps) => {
      const methods = useForm<UpdatePropertyModel>({
        resolver: zodResolver(updatePropertyModel)
      })

      const mutator = usePatchApiPropertiesId()

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
export type CreatePropertiesIdCertificatesProps = {id: string, children: ReactNode};
export const CreatePropertiesIdCertificates = (props:CreatePropertiesIdCertificatesProps) => {
      const methods = useForm<CreateCertificateModel>({
        resolver: zodResolver(createCertificateModel)
      })

      const mutator = usePostApiPropertiesIdCertificates()

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
export type PatchPropertiesIdCertificatesCertificateIdProps = {'If-Match'?: string, id: string, certificateId: string, children: ReactNode};
export const PatchPropertiesIdCertificatesCertificateId = (props:PatchPropertiesIdCertificatesCertificateIdProps) => {
      const methods = useForm<UpdateCertificateModel>({
        resolver: zodResolver(updateCertificateModel)
      })

      const mutator = usePatchApiPropertiesIdCertificatesCertificateId()

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
export type PatchPropertiesIdCertificatesResponsibilitiesProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchPropertiesIdCertificatesResponsibilities = (props:PatchPropertiesIdCertificatesResponsibilitiesProps) => {
      const methods = useForm<UpdateCertificateResponsibilitiesModel>({
        resolver: zodResolver(updateCertificateResponsibilitiesModel)
      })

      const mutator = usePatchApiPropertiesIdCertificatesResponsibilities()

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
export type CreatePropertiesIdKeysProps = {id: string, children: ReactNode};
export const CreatePropertiesIdKeys = (props:CreatePropertiesIdKeysProps) => {
      const methods = useForm<CreateKeyModel>({
        resolver: zodResolver(createKeyModel)
      })

      const mutator = usePostApiPropertiesIdKeys()

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
export type CreatePropertiesIdKeysKeyIdMovementsProps = {id: string, keyId: string, children: ReactNode};
export const CreatePropertiesIdKeysKeyIdMovements = (props:CreatePropertiesIdKeysKeyIdMovementsProps) => {
      const methods = useForm<CreateKeyMovementModel>({
        resolver: zodResolver(createKeyMovementModel)
      })

      const mutator = usePostApiPropertiesIdKeysKeyIdMovements()

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
export type UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps = {id: string, keyId: string, movementId: string, children: ReactNode};
export const UpdatePropertiesIdKeysKeyIdMovementsMovementId = (props:UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps) => {
      const methods = useForm<CheckInKeyModel>({
        resolver: zodResolver(checkInKeyModel)
      })

      const mutator = usePutApiPropertiesIdKeysKeyIdMovementsMovementId()

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
export type CreatePropertiesIdChecksProps = {id: string, children: ReactNode};
export const CreatePropertiesIdChecks = (props:CreatePropertiesIdChecksProps) => {
      const methods = useForm<CreatePropertyCheckModel>({
        resolver: zodResolver(createPropertyCheckModel)
      })

      const mutator = usePostApiPropertiesIdChecks()

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
export type PatchPropertiesIdChecksCheckIdProps = {'If-Match'?: string, id: string, checkId: string, children: ReactNode};
export const PatchPropertiesIdChecksCheckId = (props:PatchPropertiesIdChecksCheckIdProps) => {
      const methods = useForm<UpdatePropertyCheckModel>({
        resolver: zodResolver(updatePropertyCheckModel)
      })

      const mutator = usePatchApiPropertiesIdChecksCheckId()

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
export type CreatePropertiesIdAppraisalsProps = {id: string, children: ReactNode};
export const CreatePropertiesIdAppraisals = (props:CreatePropertiesIdAppraisalsProps) => {
      const methods = useForm<CreatePropertyAppraisalModel>({
        resolver: zodResolver(createPropertyAppraisalModel)
      })

      const mutator = usePostApiPropertiesIdAppraisals()

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
export type PatchPropertiesIdAppraisalsAppraisalIdProps = {'If-Match'?: string, id: string, appraisalId: string, children: ReactNode};
export const PatchPropertiesIdAppraisalsAppraisalId = (props:PatchPropertiesIdAppraisalsAppraisalIdProps) => {
      const methods = useForm<UpdatePropertyAppraisalModel>({
        resolver: zodResolver(updatePropertyAppraisalModel)
      })

      const mutator = usePatchApiPropertiesIdAppraisalsAppraisalId()

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