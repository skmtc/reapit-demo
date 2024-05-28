import { UpdateOfficeAddressModel } from '@/models/updateOfficeAddressModel.ts'

/** Request body used to update an existing office */
export type UpdateOfficeModel = {
  name?: /** The name of the office */ string | undefined
  active?: /** A flag denoting whether or not this office is active */ boolean | undefined
  manager?: /** The name of the office manager */ string | undefined
  address?: UpdateOfficeAddressModel | undefined
  workPhone?: /** The work phone number of the office */ string | undefined
  email?: /** The email address of the office */ string | undefined
  metadata?: /** App specific metadata to set against the office */ Record<string, Record<string, never>> | undefined
}
