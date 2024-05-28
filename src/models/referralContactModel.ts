import { z } from 'zod'

/** Representation of a contact */
export const referralContactModel = z.object({
  id: z.string().nullable().optional(),
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().nullable().optional(),
  /** The contact's forename */ forename: z.string().nullable().optional(),
  /** The contact's surname */ surname: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
})
/** Representation of a contact */
export type ReferralContactModel = {
  id?: string | undefined
  title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
  forename?: /** The contact's forename */ string | undefined
  surname?: /** The contact's surname */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact */ string | undefined
  email?: /** The email address of the contact */ string | undefined
}