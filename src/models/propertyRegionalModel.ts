import { z } from 'zod'
import { guernseyModel, GuernseyModel } from '@/models/guernseyModel.ts'
import { irelandPropertyModel, IrelandPropertyModel } from '@/models/irelandPropertyModel.ts'

/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const propertyRegionalModel = z.object({
  ggy: guernseyModel.nullable().optional(),
  irl: irelandPropertyModel.nullable().optional(),
})
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type PropertyRegionalModel = { ggy?: GuernseyModel | undefined; irl?: IrelandPropertyModel | undefined }
