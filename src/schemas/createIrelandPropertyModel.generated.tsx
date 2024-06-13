import {
  CreateIrelandPropertyBERModel,
  createIrelandPropertyBERModel,
} from '@/schemas/createIrelandPropertyBERModel.generated.tsx'
import { z } from 'zod'

/** Request body used to set the data specific to properties in Ireland */
export type CreateIrelandPropertyModel =
  /** Request body used to set the data specific to properties in Ireland */
  { buildingEnergyRating?: CreateIrelandPropertyBERModel | null | undefined }
/** Request body used to set the data specific to properties in Ireland */
export const createIrelandPropertyModel =
  /** Request body used to set the data specific to properties in Ireland */
  z.object({ buildingEnergyRating: createIrelandPropertyBERModel.optional().nullable() })
