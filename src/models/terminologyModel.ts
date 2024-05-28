import { z } from 'zod'
import { propertyTerminologyModel } from '@/models/propertyTerminologyModel.ts'

/** Representation of the configuration settings for terminology */
export const terminologyModel = z.object({ properties: propertyTerminologyModel.nullable().optional() })
