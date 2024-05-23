import { z } from 'zod'

/** Request body used to create pre signed urls to upload files between 6MB and 30MB */
export const createPreSignedUrlsModel = z.object({
  /** The number of pre signed urls to create */ amount: z.number().int(),
})
