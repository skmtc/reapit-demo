/** Payload for defining notification targets */
export type CreateNotificationTargetModel =
  /** Payload for defining notification targets */
  {
    negotiatorId?:
      | /** The identifier of the negotiators whom should receive the notification */
      Array<string>
      | null
      | undefined
  }
