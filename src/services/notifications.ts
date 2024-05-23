import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UsePostApiNotificationsArgs = {
  body: /** Payload for creating a notification */
  {
    type?: /** The notification type (telephony) */ string | undefined | null
    subType?: /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */ string | undefined | null
    products?: /** The products the notification is associated to, and will be delivered to */
    Array<string> | undefined | null
    targets?: /** Payload for defining notification targets */
    | {
          negotiatorId?: /** The identifier of the negotiators whom should receive the notification */
          Array<string> | undefined | null
        }
      | undefined
      | null
    payload?: /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
    Record<string, never> | undefined | null
  }
}
export const postApiNotificationsFn = async ({ body }: UsePostApiNotificationsArgs) => {
  const res = await fetch(`/notifications/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`, {
    method: 'POST',
    body: JSON.stringify({ body }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
    },
  })

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiNotifications = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiNotificationsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Notifications'] })
    },
  })
}
