import { z } from 'zod'

/** Represents a one or more messages for fields that have failed a given validation action */
export const validationErrorModel = z.object({
  statusCode: z
    .union([
      z.literal(100),
      z.literal(101),
      z.literal(102),
      z.literal(103),
      z.literal(200),
      z.literal(201),
      z.literal(202),
      z.literal(203),
      z.literal(204),
      z.literal(205),
      z.literal(206),
      z.literal(207),
      z.literal(208),
      z.literal(226),
      z.literal(300),
      z.literal(301),
      z.literal(302),
      z.literal(303),
      z.literal(304),
      z.literal(305),
      z.literal(306),
      z.literal(307),
      z.literal(308),
      z.literal(400),
      z.literal(401),
      z.literal(402),
      z.literal(403),
      z.literal(404),
      z.literal(405),
      z.literal(406),
      z.literal(407),
      z.literal(408),
      z.literal(409),
      z.literal(410),
      z.literal(411),
      z.literal(412),
      z.literal(413),
      z.literal(414),
      z.literal(415),
      z.literal(416),
      z.literal(417),
      z.literal(421),
      z.literal(422),
      z.literal(423),
      z.literal(424),
      z.literal(426),
      z.literal(428),
      z.literal(429),
      z.literal(431),
      z.literal(451),
      z.literal(500),
      z.literal(501),
      z.literal(502),
      z.literal(503),
      z.literal(504),
      z.literal(505),
      z.literal(506),
      z.literal(507),
      z.literal(508),
      z.literal(510),
      z.literal(511),
    ])
    .nullable()
    .optional(),
  /** The date and time that this error event occurred */ dateTime: z.string().nullable().optional(),
  /** The detailed information regarding this error event */ description: z.string().nullable().optional(),
  /** Gets or sets the list of validation errors. */
  errors: z
    .array(
      /** Model for validation failure */
      z.object({
        /** Gets the field that the message applies to */ field: z.string().nullable().optional(),
        /** Gets the validation failure message to issue to the client */ message: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
