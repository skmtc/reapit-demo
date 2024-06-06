import { CreatePropertyModel, UpdatePropertyModel, CreateCertificateModel, UpdateCertificateModel, UpdateCertificateResponsibilitiesModel, CreateKeyModel, CreateKeyMovementModel, CheckInKeyModel, CreatePropertyCheckModel, UpdatePropertyCheckModel, CreatePropertyAppraisalModel, UpdatePropertyAppraisalModel, propertyModelPagedResult, certificateModelPagedResult, keysModelPagedResult, keyMovementModelPagedResult, propertyCheckModelPagedResult, propertyAppraisalModelPagedResult } from 'schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UsePostApiPropertiesArgs = {body: CreatePropertyModel};
export const postApiPropertiesFn = async ({body}: UsePostApiPropertiesArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiProperties = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiPropertiesFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePatchApiPropertiesIdArgs = {'If-Match'?: string, id: string, body: UpdatePropertyModel};
export const patchApiPropertiesIdFn = async ({'If-Match': IfMatch, id, body}: UsePatchApiPropertiesIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiPropertiesIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePostApiPropertiesIdCertificatesArgs = {id: string, body: CreateCertificateModel};
export const postApiPropertiesIdCertificatesFn = async ({id, body}: UsePostApiPropertiesIdCertificatesArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdCertificates = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiPropertiesIdCertificatesFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePatchApiPropertiesIdCertificatesCertificateIdArgs = {'If-Match'?: string, id: string, certificateId: string, body: UpdateCertificateModel};
export const patchApiPropertiesIdCertificatesCertificateIdFn = async ({'If-Match': IfMatch, id, certificateId, body}: UsePatchApiPropertiesIdCertificatesCertificateIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates/${certificateId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesIdCertificatesCertificateId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiPropertiesIdCertificatesCertificateIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePatchApiPropertiesIdCertificatesResponsibilitiesArgs = {'If-Match'?: string, id: string, body: UpdateCertificateResponsibilitiesModel};
export const patchApiPropertiesIdCertificatesResponsibilitiesFn = async ({'If-Match': IfMatch, id, body}: UsePatchApiPropertiesIdCertificatesResponsibilitiesArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates/responsibilities${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesIdCertificatesResponsibilities = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiPropertiesIdCertificatesResponsibilitiesFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePostApiPropertiesIdKeysArgs = {id: string, body: CreateKeyModel};
export const postApiPropertiesIdKeysFn = async ({id, body}: UsePostApiPropertiesIdKeysArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdKeys = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiPropertiesIdKeysFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePostApiPropertiesIdKeysKeyIdMovementsArgs = {id: string, keyId: string, body: CreateKeyMovementModel};
export const postApiPropertiesIdKeysKeyIdMovementsFn = async ({id, keyId, body}: UsePostApiPropertiesIdKeysKeyIdMovementsArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdKeysKeyIdMovements = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiPropertiesIdKeysKeyIdMovementsFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePutApiPropertiesIdKeysKeyIdMovementsMovementIdArgs = {id: string, keyId: string, movementId: string, body: CheckInKeyModel};
export const putApiPropertiesIdKeysKeyIdMovementsMovementIdFn = async ({id, keyId, movementId, body}: UsePutApiPropertiesIdKeysKeyIdMovementsMovementIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements/${movementId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PUT',
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
export const usePutApiPropertiesIdKeysKeyIdMovementsMovementId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: putApiPropertiesIdKeysKeyIdMovementsMovementIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePostApiPropertiesIdChecksArgs = {id: string, body: CreatePropertyCheckModel};
export const postApiPropertiesIdChecksFn = async ({id, body}: UsePostApiPropertiesIdChecksArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdChecks = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiPropertiesIdChecksFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePatchApiPropertiesIdChecksCheckIdArgs = {'If-Match'?: string, id: string, checkId: string, body: UpdatePropertyCheckModel};
export const patchApiPropertiesIdChecksCheckIdFn = async ({'If-Match': IfMatch, id, checkId, body}: UsePatchApiPropertiesIdChecksCheckIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks/${checkId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesIdChecksCheckId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiPropertiesIdChecksCheckIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePostApiPropertiesIdAppraisalsArgs = {id: string, body: CreatePropertyAppraisalModel};
export const postApiPropertiesIdAppraisalsFn = async ({id, body}: UsePostApiPropertiesIdAppraisalsArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/appraisals${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdAppraisals = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiPropertiesIdAppraisalsFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UsePatchApiPropertiesIdAppraisalsAppraisalIdArgs = {'If-Match'?: string, id: string, appraisalId: string, body: UpdatePropertyAppraisalModel};
export const patchApiPropertiesIdAppraisalsAppraisalIdFn = async ({'If-Match': IfMatch, id, appraisalId, body}: UsePatchApiPropertiesIdAppraisalsAppraisalIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/appraisals/${appraisalId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesIdAppraisalsAppraisalId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiPropertiesIdAppraisalsAppraisalIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Properties'] })
        }
      })
    };
export type UseGetApiPropertiesArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined, embed?: Array<'appointments' | 'area' | 'certificates' | 'department' | 'documents' | 'images' | 'keys' | 'landlord' | 'negotiator' | 'offers' | 'offices' | 'tenancies' | 'vendor'> | undefined, id?: Array<string> | undefined, age?: Array<'period' | 'new' | 'modern' | 'old'> | undefined, agentRole?: Array<'managed' | 'rentCollection' | 'collectFirstPayment' | 'collectRentToDate' | 'lettingOnly' | 'introducingTenant'> | undefined, areaId?: Array<string> | undefined, excludeAreaId?: Array<string> | undefined, landlordId?: Array<string> | undefined, lettingStatus?: Array<'valuation' | 'toLet' | 'toLetUnavailable' | 'underOffer' | 'underOfferUnavailable' | 'arrangingTenancyUnavailable' | 'arrangingTenancy' | 'tenancyCurrentUnavailable' | 'tenancyCurrent' | 'tenancyFinished' | 'tenancyCancelled' | 'sold' | 'letByOtherAgent' | 'letPrivately' | 'provisional' | 'withdrawn'> | undefined, locality?: Array<'rural' | 'village' | 'townCity'> | undefined, marketingMode?: Array<'selling' | 'letting' | 'sellingAndLetting'> | undefined, masterId?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, officeId?: Array<string> | undefined, parking?: Array<'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'> | undefined, sellingStatus?: Array<'preAppraisal' | 'valuation' | 'paidValuation' | 'forSale' | 'forSaleUnavailable' | 'underOffer' | 'underOfferUnavailable' | 'reserved' | 'exchanged' | 'completed' | 'soldExternally' | 'withdrawn'> | undefined, situation?: Array<'garden' | 'land' | 'patio' | 'roofTerrace' | 'conservatory' | 'balcony' | 'communalGardens' | 'outsideSpace'> | undefined, style?: Array<'terraced' | 'endTerrace' | 'detached' | 'semiDetached' | 'linkDetached' | 'mews' | 'basement' | 'lowerGroundFloor' | 'groundFloor' | 'firstFloor' | 'upperFloor' | 'upperFloorWithLift' | 'penthouse' | 'duplex'> | undefined, type?: Array<'house' | 'bungalow' | 'flatApartment' | 'maisonette' | 'land' | 'farm' | 'cottage' | 'studio' | 'townhouse' | 'developmentPlot'> | undefined, market?: Array<'local' | 'openA' | 'openB' | 'openC' | 'openD'> | undefined, address?: string | undefined, countryId?: string | undefined, departmentId?: string | undefined, bedroomsFrom?: number | undefined, bedroomsTo?: number | undefined, priceFrom?: number | undefined, priceTo?: number | undefined, priceFiltersCurrency?: string | undefined, rentFrom?: number | undefined, rentTo?: number | undefined, rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | undefined, internetAdvertising?: boolean | undefined, isExternal?: boolean | undefined, fromArchive?: boolean | undefined, availableFrom?: string | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, metadata?: Array<string> | undefined, extrasField?: Array<string> | undefined};
export const getApiPropertiesFn = async ({pageSize, pageNumber, sortBy, embed, id, age, agentRole, areaId, excludeAreaId, landlordId, lettingStatus, locality, marketingMode, masterId, negotiatorId, officeId, parking, sellingStatus, situation, style, type, market, address, countryId, departmentId, bedroomsFrom, bedroomsTo, priceFrom, priceTo, priceFiltersCurrency, rentFrom, rentTo, rentFrequency, internetAdvertising, isExternal, fromArchive, availableFrom, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField}: UseGetApiPropertiesArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${querySerialiser({args:{ pageSize, pageNumber, sortBy, embed, id, age, agentRole, areaId, excludeAreaId, landlordId, lettingStatus, locality, marketingMode, masterId, negotiatorId, officeId, parking, sellingStatus, situation, style, type, market, address, countryId, departmentId, bedroomsFrom, bedroomsTo, priceFrom, priceTo, priceFiltersCurrency, rentFrom, rentTo, rentFrequency, internetAdvertising, isExternal, fromArchive, availableFrom, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField}, options: defaultQuerySerialiserOptions })}`,
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
    
      return propertyModelPagedResult.parse(data)
    };
export const useGetApiProperties = (args: UseGetApiPropertiesArgs) => {
      const result = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getApiPropertiesFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiPropertiesIdCertificatesArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined, category?: Array<'safetyCertificate' | 'insurancePolicy' | 'warranty'> | undefined};
export const getApiPropertiesIdCertificatesFn = async ({id, pageSize, pageNumber, category}: UseGetApiPropertiesIdCertificatesArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates${querySerialiser({args:{ pageSize, pageNumber, category}, options: defaultQuerySerialiserOptions })}`,
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
    
      return certificateModelPagedResult.parse(data)
    };
export const useGetApiPropertiesIdCertificates = (args: UseGetApiPropertiesIdCertificatesArgs) => {
      const result = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getApiPropertiesIdCertificatesFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiPropertiesIdKeysArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiPropertiesIdKeysFn = async ({id, pageSize, pageNumber}: UseGetApiPropertiesIdKeysArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
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
    
      return keysModelPagedResult.parse(data)
    };
export const useGetApiPropertiesIdKeys = (args: UseGetApiPropertiesIdKeysArgs) => {
      const result = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getApiPropertiesIdKeysFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiPropertiesIdKeysKeyIdMovementsArgs = {id: string, keyId: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiPropertiesIdKeysKeyIdMovementsFn = async ({id, keyId, pageSize, pageNumber}: UseGetApiPropertiesIdKeysKeyIdMovementsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
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
    
      return keyMovementModelPagedResult.parse(data)
    };
export const useGetApiPropertiesIdKeysKeyIdMovements = (args: UseGetApiPropertiesIdKeysKeyIdMovementsArgs) => {
      const result = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getApiPropertiesIdKeysKeyIdMovementsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiPropertiesIdChecksArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined, type?: string | undefined};
export const getApiPropertiesIdChecksFn = async ({id, pageSize, pageNumber, type}: UseGetApiPropertiesIdChecksArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks${querySerialiser({args:{ pageSize, pageNumber, type}, options: defaultQuerySerialiserOptions })}`,
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
    
      return propertyCheckModelPagedResult.parse(data)
    };
export const useGetApiPropertiesIdChecks = (args: UseGetApiPropertiesIdChecksArgs) => {
      const result = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getApiPropertiesIdChecksFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiPropertiesCertificatesArgs = {pageNumber?: number | undefined, pageSize?: number | undefined, sortBy?: string | undefined, expiryDateFrom?: string | undefined, expiryDateTo?: string | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, categories?: Array<string> | undefined, typeIds?: Array<string> | undefined, propertyIds?: Array<string> | undefined, embed?: Array<'property'> | undefined};
export const getApiPropertiesCertificatesFn = async ({pageNumber, pageSize, sortBy, expiryDateFrom, expiryDateTo, createdFrom, createdTo, modifiedFrom, modifiedTo, categories, typeIds, propertyIds, embed}: UseGetApiPropertiesCertificatesArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/properties/certificates${querySerialiser({args:{ pageNumber, pageSize, sortBy, expiryDateFrom, expiryDateTo, createdFrom, createdTo, modifiedFrom, modifiedTo, categories, typeIds, propertyIds, embed}, options: defaultQuerySerialiserOptions })}`,
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
    
      return certificateModelPagedResult.parse(data)
    };
export const useGetApiPropertiesCertificates = (args: UseGetApiPropertiesCertificatesArgs) => {
      const result = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getApiPropertiesCertificatesFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiPropertiesIdAppraisalsArgs = {id: string, pageNumber?: number | undefined, pageSize?: number | undefined};
export const getApiPropertiesIdAppraisalsFn = async ({id, pageNumber, pageSize}: UseGetApiPropertiesIdAppraisalsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/appraisals${querySerialiser({args:{ pageNumber, pageSize}, options: defaultQuerySerialiserOptions })}`,
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
    
      return propertyAppraisalModelPagedResult.parse(data)
    };
export const useGetApiPropertiesIdAppraisals = (args: UseGetApiPropertiesIdAppraisalsArgs) => {
      const result = useQuery({
        queryKey: ['Properties'],
        queryFn: () => getApiPropertiesIdAppraisalsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };