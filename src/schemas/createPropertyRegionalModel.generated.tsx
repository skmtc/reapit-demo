import { z } from 'zod'
import { createIrelandPropertyModel, CreateIrelandPropertyModel } from '@/schemas/createIrelandPropertyModel.generated.tsx'

/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const createPropertyRegionalModel = /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
z.object({irl: createIrelandPropertyModel.optional()});
/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type CreatePropertyRegionalModel = /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
{irl?: CreateIrelandPropertyModel | undefined};