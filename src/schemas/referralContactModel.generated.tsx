import { z } from 'zod'

/** Representation of a contact */
export const referralContactModel =
  /** Representation of a contact */
  z.object({
    id: z.string().optional().nullable(),
    /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().optional().nullable(),
    /** The contact's forename */ forename: z.string().optional().nullable(),
    /** The contact's surname */ surname: z.string().optional().nullable(),
    /** The mobile phone number of the contact */ mobilePhone: z.string().optional().nullable(),
    /** The email address of the contact */ email: z.string().optional().nullable(),
  })
/** Representation of a contact */
export type ReferralContactModel =
  /** Representation of a contact */
  {
    id?: string | null | undefined
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | null | undefined
    forename?: /** The contact's forename */ string | null | undefined
    surname?: /** The contact's surname */ string | null | undefined
    mobilePhone?: /** The mobile phone number of the contact */ string | null | undefined
    email?: /** The email address of the contact */ string | null | undefined
  }
