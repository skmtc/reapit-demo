import { z } from 'zod'
import { irelandPropertyBERModel, IrelandPropertyBERModel } from '@/models/irelandPropertyBERModel.ts'

/** Any specific details relating to the marketing of a property in Ireland */
export const irelandPropertyModel = z.object({ buildingEnergyRating: irelandPropertyBERModel.nullable().optional() })
/** Any specific details relating to the marketing of a property in Ireland */
export type IrelandPropertyModel = { buildingEnergyRating?: IrelandPropertyBERModel | undefined }
