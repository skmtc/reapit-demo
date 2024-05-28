import { UpdateLandlordSourceModel } from '@/models/updateLandlordSourceModel.ts'

/** Request body used to update an existing landlord */
export type UpdateLandlordModel = {
  active?: /** A flag determining whether or not the landlord is currently active */ boolean | undefined
  solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */ string | undefined
  officeId?: /** The unique identifier of the office that is associated to the landlord */ string | undefined
  source?: UpdateLandlordSourceModel | undefined
  metadata?: /** App specific metadata that to set against the landlord */
  Record<string, Record<string, never>> | undefined
}
