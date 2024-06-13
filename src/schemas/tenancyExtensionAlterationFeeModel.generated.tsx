import { z } from 'zod'

/** Represents a one off fee associated with tenancy extension or alteration */
export type TenancyExtensionAlterationFeeModel =
  /** Represents a one off fee associated with tenancy extension or alteration */
  {
    amount?: /** The one fee amount */ number | null | undefined
    summary?: /** The one of fee summary text */ string | null | undefined
    type?: /** The fee type */ string | null | undefined
  }
/** Represents a one off fee associated with tenancy extension or alteration */
export const tenancyExtensionAlterationFeeModel =
  /** Represents a one off fee associated with tenancy extension or alteration */
  z.object({
    /** The one fee amount */ amount: z.number().optional().nullable(),
    /** The one of fee summary text */ summary: z.string().optional().nullable(),
    /** The fee type */ type: z.string().optional().nullable(),
  })
