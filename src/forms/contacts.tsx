import { z } from 'zod'
import { Controller, FieldPath, useForm, Control } from 'react-hook-form'
import { default as FormLabel } from '@mui/joy/FormLabel'
import { default as FormControl } from '@mui/joy/FormControl'
import { default as FormHelperText } from '@mui/joy/FormHelperText'
import { default as Box } from '@mui/joy/Box'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { ConfigItemLookup, FormConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useCreateContact,
  useUpdateContactSubscription
} from '@/services/contacts.ts'

export const createContactsBody = z.object({
  title: z.string().nullable().optional(),
  forename: z.string().nullable().optional(),
  surname: z.string(),
  dateOfBirth: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  marketingConsent: z.string(),
  source: z
    .object({
      id: z.string().nullable().optional(),
      type: z.string().nullable().optional()
    })
    .nullable()
    .optional(),
  homePhone: z.string().nullable().optional(),
  workPhone: z.string().nullable().optional(),
  mobilePhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  officeIds: z.array(z.string()),
  negotiatorIds: z.array(z.string()),
  categoryIds: z.array(z.string()).nullable().optional(),
  primaryAddress: z
    .object({
      type: z.string().nullable().optional(),
      buildingName: z.string().nullable().optional(),
      buildingNumber: z.string().nullable().optional(),
      line1: z.string().nullable().optional(),
      line2: z.string().nullable().optional(),
      line3: z.string().nullable().optional(),
      line4: z.string().nullable().optional(),
      postcode: z.string().nullable().optional(),
      countryId: z.string().nullable().optional()
    })
    .nullable()
    .optional(),
  secondaryAddress: z
    .object({
      type: z.string().nullable().optional(),
      buildingName: z.string().nullable().optional(),
      buildingNumber: z.string().nullable().optional(),
      line1: z.string().nullable().optional(),
      line2: z.string().nullable().optional(),
      line3: z.string().nullable().optional(),
      line4: z.string().nullable().optional(),
      postcode: z.string().nullable().optional(),
      countryId: z.string().nullable().optional()
    })
    .nullable()
    .optional(),
  workAddress: z
    .object({
      type: z.string().nullable().optional(),
      buildingName: z.string().nullable().optional(),
      buildingNumber: z.string().nullable().optional(),
      line1: z.string().nullable().optional(),
      line2: z.string().nullable().optional(),
      line3: z.string().nullable().optional(),
      line4: z.string().nullable().optional(),
      postcode: z.string().nullable().optional(),
      countryId: z.string().nullable().optional()
    })
    .nullable()
    .optional(),
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  communicationPreferencePhone: z.boolean().nullable().optional(),
  communicationPreferenceSMS: z.boolean().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional()
})
export type CreateContactsBody = {
  title?: string | undefined | null
  forename?: string | undefined | null
  surname: string
  dateOfBirth?: string | undefined | null
  active?: boolean | undefined | null
  marketingConsent: string
  source?:
    | { id?: string | undefined | null; type?: string | undefined | null }
    | undefined
    | null
  homePhone?: string | undefined | null
  workPhone?: string | undefined | null
  mobilePhone?: string | undefined | null
  email?: string | undefined | null
  officeIds: Array<string>
  negotiatorIds: Array<string>
  categoryIds?: Array<string> | undefined | null
  primaryAddress?:
    | {
        type?: string | undefined | null
        buildingName?: string | undefined | null
        buildingNumber?: string | undefined | null
        line1?: string | undefined | null
        line2?: string | undefined | null
        line3?: string | undefined | null
        line4?: string | undefined | null
        postcode?: string | undefined | null
        countryId?: string | undefined | null
      }
    | undefined
    | null
  secondaryAddress?:
    | {
        type?: string | undefined | null
        buildingName?: string | undefined | null
        buildingNumber?: string | undefined | null
        line1?: string | undefined | null
        line2?: string | undefined | null
        line3?: string | undefined | null
        line4?: string | undefined | null
        postcode?: string | undefined | null
        countryId?: string | undefined | null
      }
    | undefined
    | null
  workAddress?:
    | {
        type?: string | undefined | null
        buildingName?: string | undefined | null
        buildingNumber?: string | undefined | null
        line1?: string | undefined | null
        line2?: string | undefined | null
        line3?: string | undefined | null
        line4?: string | undefined | null
        postcode?: string | undefined | null
        countryId?: string | undefined | null
      }
    | undefined
    | null
  communicationPreferenceLetter?: boolean | undefined | null
  communicationPreferenceEmail?: boolean | undefined | null
  communicationPreferencePhone?: boolean | undefined | null
  communicationPreferenceSMS?: boolean | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateContactsProps = {
  children: (control: Control<CreateContactsBody, any>) => ReactNode
}

export const updateContactsIdSubscriptionsSubscriptionIdBody = z.object({
  status: z.string().nullable().optional()
})
export type UpdateContactsIdSubscriptionsSubscriptionIdBody = {
  status?: string | undefined | null
}
export type UpdateContactsIdSubscriptionsSubscriptionIdProps = {
  id: string
  subscriptionId: string
  children: ReactNode
}

export const CreateContacts = ({ children, ...props }: CreateContactsProps) => {
  const { control, handleSubmit } = useForm<CreateContactsBody>({
    resolver: zodResolver(createContactsBody)
  })

  const mutator = useCreateContact()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      {children(control)}
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

type GetCreateContactsFieldArgs = {
  fieldName: FieldPath<CreateContactsBody>
  control: Control<CreateContactsBody>
  formConfig: ConfigItemLookup<CreateContactsBody>
}

export const getCreateContactsField = ({
  fieldName,
  control,
  formConfig
}: GetCreateContactsFieldArgs) => {
  return match(fieldName)
    .with('title', () => {
      const label = formConfig.label('title')
      const Input = formConfig.Input

      return (
        <Controller
          key="title"
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input key="title" {...field} />
              {formConfig.Input('title', field)}
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('forename', () => {
      const { label, Input } = formConfig['forename']

      return (
        <Controller
          key="forename"
          name="forename"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('surname', () => {
      const { label, Input } = formConfig['surname']

      return (
        <Controller
          key="surname"
          name="surname"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('dateOfBirth', () => {
      const { label, Input } = formConfig['dateOfBirth']

      return (
        <Controller
          key="dateOfBirth"
          name="dateOfBirth"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('active', () => {
      const { label, Input } = formConfig['active']

      return (
        <Controller
          key="active"
          name="active"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('marketingConsent', () => {
      const { label, Input } = formConfig['marketingConsent']

      return (
        <Controller
          key="marketingConsent"
          name="marketingConsent"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('source', () => {
      const { label, Input } = formConfig['source']

      return (
        <Controller
          key="source"
          name="source"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('homePhone', () => {
      const { label, Input } = formConfig['homePhone']

      return (
        <Controller
          key="homePhone"
          name="homePhone"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('workPhone', () => {
      const { label, Input } = formConfig['workPhone']

      return (
        <Controller
          key="workPhone"
          name="workPhone"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('mobilePhone', () => {
      const { label, Input } = formConfig['mobilePhone']

      return (
        <Controller
          key="mobilePhone"
          name="mobilePhone"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('email', () => {
      const { label, Input } = formConfig['email']

      return (
        <Controller
          key="email"
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('officeIds', () => {
      const { label, Input } = formConfig['officeIds']

      return (
        <Controller
          key="officeIds"
          name="officeIds"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('negotiatorIds', () => {
      const { label, Input } = formConfig['negotiatorIds']

      return (
        <Controller
          key="negotiatorIds"
          name="negotiatorIds"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('categoryIds', () => {
      const { label, Input } = formConfig['categoryIds']

      return (
        <Controller
          key="categoryIds"
          name="categoryIds"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('primaryAddress', () => {
      const { label, Input } = formConfig['primaryAddress']

      return (
        <Controller
          key="primaryAddress"
          name="primaryAddress"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('secondaryAddress', () => {
      const { label, Input } = formConfig['secondaryAddress']

      return (
        <Controller
          key="secondaryAddress"
          name="secondaryAddress"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('workAddress', () => {
      const { label, Input } = formConfig['workAddress']

      return (
        <Controller
          key="workAddress"
          name="workAddress"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('communicationPreferenceLetter', () => {
      const { label, Input } = formConfig['communicationPreferenceLetter']

      return (
        <Controller
          key="communicationPreferenceLetter"
          name="communicationPreferenceLetter"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('communicationPreferenceEmail', () => {
      const { label, Input } = formConfig['communicationPreferenceEmail']

      return (
        <Controller
          key="communicationPreferenceEmail"
          name="communicationPreferenceEmail"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('communicationPreferencePhone', () => {
      const { label, Input } = formConfig['communicationPreferencePhone']

      return (
        <Controller
          key="communicationPreferencePhone"
          name="communicationPreferencePhone"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('communicationPreferenceSMS', () => {
      const { label, Input } = formConfig['communicationPreferenceSMS']

      return (
        <Controller
          key="communicationPreferenceSMS"
          name="communicationPreferenceSMS"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .with('metadata', () => {
      const { label, Input } = formConfig['metadata']

      return (
        <Controller
          key="metadata"
          name="metadata"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}

export const UpdateContactsIdSubscriptionsSubscriptionId = (
  props: UpdateContactsIdSubscriptionsSubscriptionIdProps
) => {
  const { control, handleSubmit } =
    useForm<UpdateContactsIdSubscriptionsSubscriptionIdBody>({
      resolver: zodResolver(updateContactsIdSubscriptionsSubscriptionIdBody)
    })

  const mutator = useUpdateContactSubscription()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
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
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

type GetUpdateContactsIdSubscriptionsSubscriptionIdFieldArgs = {
  fieldName: FieldPath<UpdateContactsIdSubscriptionsSubscriptionIdBody>
  control: Control<UpdateContactsIdSubscriptionsSubscriptionIdBody>
  formConfig: FormConfig<UpdateContactsIdSubscriptionsSubscriptionIdBody>
}

export const getUpdateContactsIdSubscriptionsSubscriptionIdField = ({
  fieldName,
  control,
  formConfig
}: GetUpdateContactsIdSubscriptionsSubscriptionIdFieldArgs) => {
  return match(fieldName)
    .with('status', () => {
      const { label, Input } = formConfig['status']

      return (
        <Controller
          key="status"
          name="status"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              ) : null}
            </FormControl>
          )}
        />
      )
    })
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}
