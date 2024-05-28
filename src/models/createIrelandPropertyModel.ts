import { z } from 'zod'
import { createIrelandPropertyBERModel, CreateIrelandPropertyBERModel } from '@/models/createIrelandPropertyBERModel.ts'

/** Request body used to set the data specific to properties in Ireland */
export const createIrelandPropertyModel = z.object({
  buildingEnergyRating: createIrelandPropertyBERModel.nullable().optional(),
})
/** Request body used to set the data specific to properties in Ireland */
export type CreateIrelandPropertyModel = { buildingEnergyRating?: CreateIrelandPropertyBERModel | undefined }
