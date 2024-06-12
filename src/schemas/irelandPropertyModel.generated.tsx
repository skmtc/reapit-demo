import { IrelandPropertyBERModel, irelandPropertyBERModel } from '@/schemas/irelandPropertyBERModel.generated.tsx'
import { z } from 'zod'

/** Any specific details relating to the marketing of a property in Ireland */
export type IrelandPropertyModel =
  /** Any specific details relating to the marketing of a property in Ireland */
  { buildingEnergyRating?: IrelandPropertyBERModel | null | undefined }
/** Any specific details relating to the marketing of a property in Ireland */
export const irelandPropertyModel =
  /** Any specific details relating to the marketing of a property in Ireland */
  z.object({ buildingEnergyRating: irelandPropertyBERModel.optional().nullable() })
