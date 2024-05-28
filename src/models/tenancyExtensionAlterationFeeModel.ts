import { z } from 'zod'

/** Represents a one off fee associated with tenancy extension or alteration */
export const tenancyExtensionAlterationFeeModel = z.object({
  /** The one fee amount */ amount: z.number().nullable().optional(),
  /** The one of fee summary text */ summary: z.string().nullable().optional(),
  /** The fee type */ type: z.string().nullable().optional(),
})
/** Represents a one off fee associated with tenancy extension or alteration */
export type TenancyExtensionAlterationFeeModel = {
  amount?: /** The one fee amount */ number | undefined
  summary?: /** The one of fee summary text */ string | undefined
  type?: /** The fee type */ string | undefined
}
