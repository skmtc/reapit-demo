import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateJournalEntries } from '@/forms/journalentries.generated.tsx'
import { CreateJournalEntryModel } from '@/schemas/index.ts'
import { journalEntryModelConfig } from '@/config/journalEntryModel.example.tsx'

const fieldNames = fieldsConfig<CreateJournalEntryModel>({
  typeId: true,
  propertyId: true,
  associatedType: true,
  associatedId: true,
  description: true,
  negotiatorId: true,
})

export const CreateJournalEntriesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new journalEntry" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateJournalEntries>
          <CreateJournalEntriesFields />
        </CreateJournalEntries>
      </DialogContent>
    </Drawer>
  )
}

export const CreateJournalEntriesFields = () => {
  const formConfig = journalEntryModelConfig as ModelConfig<CreateJournalEntryModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
