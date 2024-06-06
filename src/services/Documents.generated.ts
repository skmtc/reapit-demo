import { CreateDocumentModel, UpdateDocumentModel, CreatePreSignedUrlsModel, createPreSignedUrlsModel, documentModelPagedResult } from 'schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UsePostApiDocumentsArgs = {body: CreateDocumentModel};
export const postApiDocumentsFn = async ({body}: UsePostApiDocumentsArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiDocuments = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiDocumentsFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Documents'] })
        }
      })
    };
export type UsePatchApiDocumentsIdArgs = {'If-Match'?: string, id: string, body: UpdateDocumentModel};
export const patchApiDocumentsIdFn = async ({'If-Match': IfMatch, id, body}: UsePatchApiDocumentsIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiDocumentsId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiDocumentsIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Documents'] })
        }
      })
    };
export type UsePostApiDocumentsSignedUrlArgs = {body: CreatePreSignedUrlsModel};
export const postApiDocumentsSignedUrlFn = async ({body}: UsePostApiDocumentsSignedUrlArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/documents/signedUrl${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
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
    
      return createPreSignedUrlsModel.parse(data)
    };
export const usePostApiDocumentsSignedUrl = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiDocumentsSignedUrlFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Documents'] })
        }
      })
    };
export type UseGetApiDocumentsArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined, embed?: Array<'documentType'> | undefined, id?: Array<string> | undefined, associatedId?: Array<string> | undefined, associatedType?: Array<'appliance' | 'applicant' | 'bankStatement' | 'batch' | 'certificate' | 'contact' | 'depositCertificate' | 'estate' | 'estateUnit' | 'idCheck' | 'keySet' | 'landlord' | 'nominalTransaction' | 'property' | 'tenancy' | 'tenancyCheck' | 'tenancyRenewal' | 'worksOrder'> | undefined, typeId?: Array<string> | undefined, includeRoleDocuments?: boolean | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, metadata?: Array<string> | undefined};
export const getApiDocumentsFn = async ({pageSize, pageNumber, sortBy, embed, id, associatedId, associatedType, typeId, includeRoleDocuments, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata}: UseGetApiDocumentsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/documents/${querySerialiser({args:{ pageSize, pageNumber, sortBy, embed, id, associatedId, associatedType, typeId, includeRoleDocuments, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata}, options: defaultQuerySerialiserOptions })}`,
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
    
      return documentModelPagedResult.parse(data)
    };
export const useGetApiDocuments = (args: UseGetApiDocumentsArgs) => {
      const result = useQuery({
        queryKey: ['Documents'],
        queryFn: () => getApiDocumentsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };