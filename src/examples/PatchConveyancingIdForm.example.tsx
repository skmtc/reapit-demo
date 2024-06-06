import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchConveyancingId } from '@/examples/PatchConveyancingIdForm.example.tsx'
import { UpdateConveyancingModel } from 'schemas/index.ts'
import { updateConveyancingModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateConveyancingModel>({
          vendorSolicitorId: true,
buyerSolicitorId: true,
fixturesAndFittingsCompleted: true,
deedsRequested: true,
deedsReceived: true,
enquiriesSent: true,
enquiriesAnswered: true,
searchesPaid: true,
searchesApplied: true,
searchesReceived: true,
contractSent: true,
contractReceived: true,
contractApproved: true,
contractVendorSigned: true,
contractBuyerSigned: true,
mortgageRequired: true,
mortgageLoanPercentage: true,
mortgageSubmitted: true,
mortgageOfferReceived: true,
mortgageLenderId: true,
mortgageBrokerId: true,
mortgageSurveyDate: true,
mortgageSurveyorId: true,
additionalSurveyRequired: true,
additionalSurveyDate: true,
additionalSurveyorId: true,
exchangedVendor: true,
exchangedBuyer: true,
completion: true,
metadata: true
        });
export const PatchConveyancingIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateConveyancingModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchConveyancingId id={id}>
              <PatchConveyancingIdFields />
            </PatchConveyancingId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchConveyancingIdFields = () => {
      const formConfig = updateConveyancingModelConfig as ModelConfig<UpdateConveyancingModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;