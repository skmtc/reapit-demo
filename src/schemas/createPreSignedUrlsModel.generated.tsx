import { z } from 'zod'

/** Request body used to create pre signed urls to upload files between 6MB and 30MB */
export const createPreSignedUrlsModel =
  /** Request body used to create pre signed urls to upload files between 6MB and 30MB */
  z.object({ /** The number of pre signed urls to create */ amount: z.number().int() })
/** Request body used to create pre signed urls to upload files between 6MB and 30MB */
export type CreatePreSignedUrlsModel =
  /** Request body used to create pre signed urls to upload files between 6MB and 30MB */
  { amount: /** The number of pre signed urls to create */ number }
