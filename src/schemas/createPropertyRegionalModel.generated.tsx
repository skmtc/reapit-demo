import {
  CreateIrelandPropertyModel,
  createIrelandPropertyModel,
} from '@/schemas/createIrelandPropertyModel.generated.tsx'
import { z } from 'zod'

/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type CreatePropertyRegionalModel =
  /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  { irl?: CreateIrelandPropertyModel | null | undefined }
/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const createPropertyRegionalModel =
  /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  z.object({ irl: createIrelandPropertyModel.optional().nullable() })
