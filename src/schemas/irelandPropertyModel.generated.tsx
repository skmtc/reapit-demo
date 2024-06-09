import { z } from 'zod'
import { irelandPropertyBERModel, IrelandPropertyBERModel } from '@/schemas/irelandPropertyBERModel.generated.tsx'

/** Any specific details relating to the marketing of a property in Ireland */
export const irelandPropertyModel =
  /** Any specific details relating to the marketing of a property in Ireland */
  z.object({ buildingEnergyRating: irelandPropertyBERModel.optional() })
/** Any specific details relating to the marketing of a property in Ireland */
export type IrelandPropertyModel =
  /** Any specific details relating to the marketing of a property in Ireland */
  { buildingEnergyRating?: IrelandPropertyBERModel | undefined }
