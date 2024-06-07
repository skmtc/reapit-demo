import { CreateAppointmentModel } from '@/schemas/createAppointmentModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { UpdateAppointmentModel } from '@/schemas/updateAppointmentModel.generated.tsx'
import { CreateOpenHouseAttendeeModel } from '@/schemas/createOpenHouseAttendeeModel.generated.tsx'
import { UpdateOpenHouseAttendeeModel } from '@/schemas/updateOpenHouseAttendeeModel.generated.tsx'
import { appointmentModelPagedResult } from '@/schemas/appointmentModelPagedResult.generated.tsx'
import { openHouseAttendeeModelPagedResult } from '@/schemas/openHouseAttendeeModelPagedResult.generated.tsx'

export type UsePostApiAppointmentsArgs = {body: CreateAppointmentModel};
export const postApiAppointmentsFn = async ({body}: UsePostApiAppointmentsArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiAppointments = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiAppointmentsFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
        }
      })
    };
export type UsePatchApiAppointmentsIdArgs = {'If-Match'?: string, id: string, body: UpdateAppointmentModel};
export const patchApiAppointmentsIdFn = async ({'If-Match': IfMatch, id, body}: UsePatchApiAppointmentsIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiAppointmentsId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiAppointmentsIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
        }
      })
    };
export type UsePostApiAppointmentsIdOpenHouseAttendeesArgs = {id: string, body: CreateOpenHouseAttendeeModel};
export const postApiAppointmentsIdOpenHouseAttendeesFn = async ({id, body}: UsePostApiAppointmentsIdOpenHouseAttendeesArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiAppointmentsIdOpenHouseAttendees = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiAppointmentsIdOpenHouseAttendeesFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
        }
      })
    };
export type UsePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs = {'If-Match'?: string, id: string, openHouseAttendeeId: string, body: UpdateOpenHouseAttendeeModel};
export const patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn = async ({'If-Match': IfMatch, id, openHouseAttendeeId, body}: UsePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees/${openHouseAttendeeId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
        }
      })
    };
export type UseGetApiAppointmentsArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined, embed?: Array<'negotiators' | 'offices' | 'organiser' | 'property' | 'type'> | undefined, id?: Array<string> | undefined, typeId?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, officeId?: Array<string> | undefined, propertyId?: Array<string> | undefined, attendeeId?: Array<string> | undefined, attendeeType?: Array<'applicant' | 'contact' | 'landlord' | 'tenancy'> | undefined, start?: string | undefined, end?: string | undefined, includeCancelled?: boolean | undefined, includeUnconfirmed?: boolean | undefined, fromArchive?: boolean | undefined, followUpFrom?: string | undefined, followUpTo?: string | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, extrasField?: Array<string> | undefined, metadata?: Array<string> | undefined};
export const getApiAppointmentsFn = async ({pageSize, pageNumber, sortBy, embed, id, typeId, negotiatorId, officeId, propertyId, attendeeId, attendeeType, start, end, includeCancelled, includeUnconfirmed, fromArchive, followUpFrom, followUpTo, createdFrom, createdTo, modifiedFrom, modifiedTo, extrasField, metadata}: UseGetApiAppointmentsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${querySerialiser({args:{ pageSize, pageNumber, sortBy, embed, id, typeId, negotiatorId, officeId, propertyId, attendeeId, attendeeType, start, end, includeCancelled, includeUnconfirmed, fromArchive, followUpFrom, followUpTo, createdFrom, createdTo, modifiedFrom, modifiedTo, extrasField, metadata}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return appointmentModelPagedResult.parse(data)
    };
export const useGetApiAppointments = (args: UseGetApiAppointmentsArgs) => {
      const result = useQuery({
        queryKey: ['Appointments'],
        queryFn: () => getApiAppointmentsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiAppointmentsIdOpenHouseAttendeesArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiAppointmentsIdOpenHouseAttendeesFn = async ({id, pageSize, pageNumber}: UseGetApiAppointmentsIdOpenHouseAttendeesArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return openHouseAttendeeModelPagedResult.parse(data)
    };
export const useGetApiAppointmentsIdOpenHouseAttendees = (args: UseGetApiAppointmentsIdOpenHouseAttendeesArgs) => {
      const result = useQuery({
        queryKey: ['Appointments'],
        queryFn: () => getApiAppointmentsIdOpenHouseAttendeesFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };