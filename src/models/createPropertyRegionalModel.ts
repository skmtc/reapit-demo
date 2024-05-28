import { z } from 'zod'
import { createIrelandPropertyModel, CreateIrelandPropertyModel } from '@/models/createIrelandPropertyModel.ts'

/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const createPropertyRegionalModel = z.object({ irl: createIrelandPropertyModel.nullable().optional() })
/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type CreatePropertyRegionalModel = { irl?: CreateIrelandPropertyModel | undefined }
