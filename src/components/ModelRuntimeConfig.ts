import { ColumnDef } from '@tanstack/react-table'
import type {
  FieldValues,
  FieldPath,
  ControllerRenderProps
} from 'react-hook-form'
import { ReactNode } from 'react'

export type ColumnsMap<Model> = {
  [Property in keyof Model]: ColumnDef<Model, Model[Property]>
}

type NotUndefined<T> = T extends undefined ? never : T

export type ValueOf<T> = T[keyof T]

export type ColumnsList<Model> = NotUndefined<ValueOf<ColumnsMap<Model>>>[]

export type ConfigItemLookup<Model> = {
  label: (key: string & keyof Model) => string
  format: <Property extends keyof Model>(
    value: Model[Property],
    key: keyof Model
  ) => React.ReactNode
}

export type RuntimeConfig<Model> = Partial<{
  [Property in keyof Model]: {
    label: string
    format: (value: Model[Property]) => React.ReactNode
  }
}>

export type RuntimeConfigMap<Model> = Record<
  string | 'model',
  RuntimeConfig<Model>
>

export const createRuntimeConfig = <Model extends Record<string, unknown>>(
  config: RuntimeConfigMap<Model> | undefined,
  transformerId: string | undefined
): ConfigItemLookup<Model> => ({
  label: key => {
    const transformerLabel = transformerId
      ? config?.[transformerId]?.[key]?.label
      : undefined

    const modelLabel = config?.model?.[key]?.label

    return transformerLabel ?? modelLabel ?? key
  },
  format: (value, key) => {
    const transformerFormattedValue = transformerId
      ? config?.[transformerId]?.[key]?.format(value)
      : undefined

    const modelFormattedValue = config?.model?.[key]?.format(value)

    return transformerFormattedValue ?? modelFormattedValue ?? `${value}`
  }
})

type StringOnly<T> = T extends string ? T : never

type StringKeys<T> = StringOnly<keyof T>

type TopKeys<T extends FieldValues> = Extract<FieldPath<T>, StringKeys<T>>

export type KeysOf<T> = (keyof T)[]

export type FormConfig<Model extends FieldValues> = {
  [FormPath in TopKeys<Model>]: {
    key: FormPath
    label: string
    Input: (props: ControllerRenderProps<Model, FormPath>) => ReactNode
  }
}
