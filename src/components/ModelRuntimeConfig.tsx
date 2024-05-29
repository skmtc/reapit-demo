import { ColumnDef } from '@tanstack/react-table'
import {
  type FieldValues,
  type FieldPath,
  type ControllerRenderProps,
  Controller,
  Control,
  useFormContext,
} from 'react-hook-form'
import { FC, ReactNode } from 'react'
import { default as JoyInput } from '@mui/joy/Input'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import invariant from 'tiny-invariant'
import Box from '@mui/joy/Box'

export type ColumnsMap<Model> = {
  [Property in keyof Model]: ColumnDef<Model, Model[Property]>
}

type NotUndefined<T> = T extends undefined ? never : T

export type ValueOf<T> = T[keyof T]

export type ColumnsList<Model> = NotUndefined<ValueOf<ColumnsMap<Model>>>[]

export type ModelConfig<Model extends FieldValues> = {
  [Property in KeyPath<Model>]: ConfigValue<Model, Property>
}

// type FieldSelected<UiModel extends FieldValues> = {
//   [Property in KeyPath<UiModel>]?: boolean
// }

type CreateConfigArgs<UiModel extends FieldValues, Model extends FieldValues> = {
  fields: Partial<Record<keyof UiModel, boolean>>
  displayConfig: ModelConfig<UiModel>
  modelConfig?: ModelConfig<Model>
}

type UiConfig<Model extends FieldValues> = {
  [Property in KeyPath<Model>]: boolean
}

export type FixedUiConfig<Model extends FieldValues> = RestoreOptional<UiConfig<Model>, Model>

export const fieldsConfig = <Model extends FieldValues>(formFields: FixedUiConfig<Model>) => {
  return Object.keys(formFields)
    .filter((fieldName): fieldName is keyof FixedUiConfig<Model> => fieldName in formFields)
    .filter((fieldName) => formFields[fieldName])
}

// type AA<
// FieldsSelected extends Record<string, boolean>,
// UiModel extends FieldValues,
// Model extends FieldValues | undefined,
// Property extends keyof FieldsSelected
// > = FieldsSelected[Property] extends true
//       ? Property extends KeyPath<UiModel>
//         ? Model extends undefined
//           ? ModelConfig<UiModel>[Property]
//           : Property
//         : Property extends KeyPath<Model>
//       : never
//     ? ModelConfig<Model>[Property] extends ModelConfig<UiModel>[Property] ? Property  : never

type AA<
  FieldsSelectedX extends Partial<Record<keyof UiModel, boolean>>,
  UiModel extends FieldValues,
  Model extends FieldValues | undefined,
  Property extends keyof UiModel,
> = Property extends keyof FieldsSelectedX
  ? FieldsSelectedX[Property] extends true
    ? Property extends KeyPath<UiModel>
      ? Model extends FieldValues
        ? Property extends KeyPath<Model>
          ? ModelConfig<Model>[Property] extends ModelConfig<UiModel>[Property]
            ? Property
            : never
          : never
        : Property
      : never
    : never
  : never

type Unifier<
  FieldsSelectedX extends Partial<Record<keyof UiModel, boolean>>,
  UiModel extends FieldValues,
  Model extends FieldValues | undefined,
> = {
  [Property in keyof UiModel as AA<
    FieldsSelectedX,
    UiModel,
    Model,
    Property
  >]: Property extends keyof ModelConfig<UiModel> ? ModelConfig<UiModel>[Property] : never
}

export const createConfig = <UiModel extends FieldValues, Model extends FieldValues>({
  fields,
  displayConfig,
  modelConfig,
}: CreateConfigArgs<UiModel, Model>): Unifier<typeof fields, UiModel, Model> => {
  return Object.fromEntries(
    Object.keys(fields).map((k) => {
      invariant(modelConfig && k in modelConfig, 'Unknown key')
      invariant(k in displayConfig, 'Unknown key')

      const key = k as KeyPath<Model>

      return [
        key as KeyPath<Model>,
        {
          key,
          label: displayConfig[key]?.label ?? modelConfig[key]?.label,
          format: displayConfig[key]?.format ?? modelConfig[key]?.format,
          Input: displayConfig[key]?.Input ?? modelConfig[key].Input,
        },
      ]
    }),
  ) as Unifier<typeof fields, UiModel, Model>
}

export type KeysOf<T> = (keyof T)[]

export type OptionalKeys<T> = keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P]
}

export type RequiredKeys<T> = keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}

export type ConfigValue<Model extends FieldValues, FormPath extends KeyPath<Model>> = {
  key: FormPath
  label: string
  Input: FC<ControllerRenderProps<Model, FormPath>>
  format: (value: Model[FormPath]) => ReactNode
}

export type RestoreOptional<T, KeySource> = Partial<Pick<T, OptionalKeys<KeySource>>> & Pick<T, RequiredKeys<KeySource>>

export type KeyPath<T extends FieldValues> = Extract<FieldPath<T>, keyof T>

type FieldControllerProps<Model extends FieldValues, Key extends KeyPath<Model>> = {
  fieldName: Key
  fieldConfig: ModelConfig<Model>[Key]
  control: Control<Model, any>
}

type ContextFieldControllerProps<Model extends FieldValues, Key extends KeyPath<Model>> = {
  fieldName: Key
  fieldConfig: ModelConfig<Model>[Key]
}

export const FieldController = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName,
  fieldConfig: { label, Input },
  control,
}: FieldControllerProps<Model, Key>) => (
  <Controller
    key={fieldName}
    name={fieldName}
    control={control}
    render={({ field, fieldState }) => (
      <FormControl error={Boolean(fieldState.error?.message)}>
        <FormLabel>{label}</FormLabel>
        <Input {...field} />

        {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
      </FormControl>
    )}
  />
)

export const ContextFieldController = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName,
  fieldConfig: { label, Input },
}: ContextFieldControllerProps<Model, Key>) => {
  const { control } = useFormContext()

  return (
    <Controller
      key={fieldName}
      name={fieldName}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={Boolean(fieldState.error?.message)}>
          <FormLabel>{label}</FormLabel>
          <Input {...field} />

          {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
        </FormControl>
      )}
    />
  )
}

export type ConfigValue2<Model extends FieldValues, FormPath extends KeyPath<Model>> = {
  key: FormPath
  label: string
  Input: FC<ContextInputProps<Model, FormPath>>
  format: (value: Model[FormPath]) => ReactNode
}

export type ModelConfig2<Model extends FieldValues> = {
  [Property in KeyPath<Model>]: ConfigValue2<Model, Property>
}

type FieldParentProps<Model extends FieldValues, Key extends KeyPath<Model>> = {
  fieldName: Key
  fieldConfig: ModelConfig2<Model>[Key]
}

export const FieldParent = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName,
  fieldConfig: { label, Input },
}: FieldParentProps<Model, Key>) => <Input fieldName={fieldName} label={label} />

type ContextInputProps<Model extends FieldValues, Key extends KeyPath<Model>> = {
  fieldName: Key
  label: string
}

export const ContextInput = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName,
  label,
}: ContextInputProps<Model, Key>) => {
  const { control } = useFormContext()

  return (
    <Controller
      key={fieldName}
      name={fieldName}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={Boolean(fieldState.error?.message)}>
          <FormLabel>{label}</FormLabel>
          <JoyInput {...field} />

          {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
        </FormControl>
      )}
    />
  )
}

export const NotImplemented = () => <Box>Not implemented</Box>

// type ActualFormFields = (typeof formFields)[number]

// type MyMappedType = {
//   [K in ActualFormFields]: ConfigValue<CreateContactModel, K>
// }

// type A = KeyPath<CreateContactModel>

// type TempForm = {
//   name: string
//   title?: string
//   email: string | undefined
// }

// type RequiredFormKeys<T> = RequiredKeys<T>
// type OptionalFormKeys = OptionalKeys<TempForm>

// type C = RequiredMap<TempForm>
// type D = Array<keyof C>

// export type RequiredMap<T> = {
//   [P in keyof T]: T[P] extends Required<T>[P] ? true : false
// }

// const contactTableConfig: RestoreOptional<ModelConfig<CreateContactModel>, CreateContactModel> = createConfig<
//   CreateContactModel,
//   ContactModel
// >({
//   fields: {
//     surname: true,
//     source: true,
//     title: true,
//     forename: true,
//     marketingConsent: true,
//     officeIds: true,
//     negotiatorIds: true,
//   },
//   displayConfig: contactModelConfig,
//   modelConfig: contactModelConfig,
// })
