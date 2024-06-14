import { departmentModelConfig } from '@/sections/Departments/config/departmentModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiDepartments } from '@/sections/Departments/services/Departments.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { DepartmentModel } from '@/schemas/departmentModel.generated.tsx'

export const getDepartmentsTableColumn = (
  property: string,
  modelConfig: ModelConfig<DepartmentModel>,
  row: DepartmentModel,
) => {
  return match(property)
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .with('_embedded', () => ({
      id: '_embedded',
      label: modelConfig['_embedded'].label,
      value: modelConfig['_embedded'].format(row['_embedded']),
    }))
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('name', () => ({
      id: 'name',
      label: modelConfig['name'].label,
      value: modelConfig['name'].format(row['name']),
    }))
    .with('typeOptions', () => ({
      id: 'typeOptions',
      label: modelConfig['typeOptions'].label,
      value: modelConfig['typeOptions'].format(row['typeOptions']),
    }))
    .with('styleOptions', () => ({
      id: 'styleOptions',
      label: modelConfig['styleOptions'].label,
      value: modelConfig['styleOptions'].format(row['styleOptions']),
    }))
    .with('situationOptions', () => ({
      id: 'situationOptions',
      label: modelConfig['situationOptions'].label,
      value: modelConfig['situationOptions'].format(row['situationOptions']),
    }))
    .with('parkingOptions', () => ({
      id: 'parkingOptions',
      label: modelConfig['parkingOptions'].label,
      value: modelConfig['parkingOptions'].format(row['parkingOptions']),
    }))
    .with('ageOptions', () => ({
      id: 'ageOptions',
      label: modelConfig['ageOptions'].label,
      value: modelConfig['ageOptions'].format(row['ageOptions']),
    }))
    .with('localityOptions', () => ({
      id: 'localityOptions',
      label: modelConfig['localityOptions'].label,
      value: modelConfig['localityOptions'].format(row['localityOptions']),
    }))
    .with('specialFeaturesOptions', () => ({
      id: 'specialFeaturesOptions',
      label: modelConfig['specialFeaturesOptions'].label,
      value: modelConfig['specialFeaturesOptions'].format(row['specialFeaturesOptions']),
    }))
    .with('commercialUseClassOptions', () => ({
      id: 'commercialUseClassOptions',
      label: modelConfig['commercialUseClassOptions'].label,
      value: modelConfig['commercialUseClassOptions'].format(row['commercialUseClassOptions']),
    }))
    .with('commercialFloorLevelOptions', () => ({
      id: 'commercialFloorLevelOptions',
      label: modelConfig['commercialFloorLevelOptions'].label,
      value: modelConfig['commercialFloorLevelOptions'].format(row['commercialFloorLevelOptions']),
    }))
    .with('hasBedrooms', () => ({
      id: 'hasBedrooms',
      label: modelConfig['hasBedrooms'].label,
      value: modelConfig['hasBedrooms'].format(row['hasBedrooms']),
    }))
    .with('hasBathrooms', () => ({
      id: 'hasBathrooms',
      label: modelConfig['hasBathrooms'].label,
      value: modelConfig['hasBathrooms'].format(row['hasBathrooms']),
    }))
    .with('hasReceptionRooms', () => ({
      id: 'hasReceptionRooms',
      label: modelConfig['hasReceptionRooms'].label,
      value: modelConfig['hasReceptionRooms'].format(row['hasReceptionRooms']),
    }))
    .with('hasParkingSpaces', () => ({
      id: 'hasParkingSpaces',
      label: modelConfig['hasParkingSpaces'].label,
      value: modelConfig['hasParkingSpaces'].format(row['hasParkingSpaces']),
    }))
    .with('hasFloorLevelEnabled', () => ({
      id: 'hasFloorLevelEnabled',
      label: modelConfig['hasFloorLevelEnabled'].label,
      value: modelConfig['hasFloorLevelEnabled'].format(row['hasFloorLevelEnabled']),
    }))
    .with('hasInternalFloorsEnabled', () => ({
      id: 'hasInternalFloorsEnabled',
      label: modelConfig['hasInternalFloorsEnabled'].label,
      value: modelConfig['hasInternalFloorsEnabled'].format(row['hasInternalFloorsEnabled']),
    }))
    .with('hasTotalFloorsEnabled', () => ({
      id: 'hasTotalFloorsEnabled',
      label: modelConfig['hasTotalFloorsEnabled'].label,
      value: modelConfig['hasTotalFloorsEnabled'].format(row['hasTotalFloorsEnabled']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseDepartmentsTableArgs = {
  id?: Array<string> | null | undefined
  name?: string | null | undefined
  fieldNames: (keyof DepartmentModel)[]
}
export const useDepartmentsTable = (args: UseDepartmentsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiDepartments({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof DepartmentModel => c in row)
        .map((fieldName) => getDepartmentsTableColumn(fieldName, departmentModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
