import { ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate, useParams } from 'react-router-dom'
import { ContactModel } from '@/schemas/index.ts'
import { contactModelConfig } from '@/config/contactModel.example.tsx'
import invariant from 'tiny-invariant'
import { useGetApiContactsId } from '@/services/contacts.generated'
import Box from '@mui/joy/Box'
import { Typography } from '@mui/joy'

const fieldNames = fieldsConfig<ContactModel>({
  title: true,
  forename: true,
  surname: true,
  dateOfBirth: true,
  active: true,
  marketingConsent: true,
  source: true,
  homePhone: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  officeIds: true,
  negotiatorIds: true,
  categoryIds: true,
  primaryAddress: true,
  secondaryAddress: true,
  workAddress: true,
  communicationPreferenceLetter: true,
  communicationPreferenceEmail: true,
  communicationPreferencePhone: true,
  communicationPreferenceSMS: true,
  metadata: true,
})

export const ViewContactDetails = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="View contact" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <ViewContactFields />
      </DialogContent>
    </Drawer>
  )
}

export const ViewContactFields = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const queryResult = useGetApiContactsId({ id })

  const formConfig = contactModelConfig as ModelConfig<ContactModel>

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {fieldNames.map((fieldName) => {
        const { format, label } = formConfig[fieldName]

        console.log('row', queryResult)

        const value = queryResult.data?.[fieldName]

        return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Typography fontWeight={600} fontSize="14px">
                {label}
              </Typography>
            </Box>
            <Box>
              <Typography>{format(value)}</Typography>
            </Box>
          </Box>
        )
        // return (
        //   <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
        // )
      })}
    </Box>
  )
}
