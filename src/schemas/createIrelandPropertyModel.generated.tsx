import { z } from 'zod'
import { createIrelandPropertyBERModel, CreateIrelandPropertyBERModel } from '@/schemas/createIrelandPropertyBERModel.generated.tsx'

/** Request body used to set the data specific to properties in Ireland */
export const createIrelandPropertyModel = /** Request body used to set the data specific to properties in Ireland */
z.object({buildingEnergyRating: createIrelandPropertyBERModel.optional()});
/** Request body used to set the data specific to properties in Ireland */
export type CreateIrelandPropertyModel = /** Request body used to set the data specific to properties in Ireland */
{buildingEnergyRating?: CreateIrelandPropertyBERModel | undefined};