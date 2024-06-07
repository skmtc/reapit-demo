import { z } from 'zod'
import { guernseyModel, GuernseyModel } from '@/schemas/guernseyModel.generated.tsx'
import { irelandPropertyModel, IrelandPropertyModel } from '@/schemas/irelandPropertyModel.generated.tsx'

/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const propertyRegionalModel = /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
z.object({ggy: guernseyModel.optional(), irl: irelandPropertyModel.optional()});
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type PropertyRegionalModel = /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
{ggy?: GuernseyModel | undefined, irl?: IrelandPropertyModel | undefined};