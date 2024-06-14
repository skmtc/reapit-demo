import { Dispatch, FC, SetStateAction, useState } from 'react'
import {
  Button,
  ButtonGroup,
  elMb5,
  elMb8,
  elMl8,
  FlexContainer,
  PageHeader,
  StepsVertical,
  Tile,
  useMediaQuery,
} from '@reapit/elements'
import { useNavigate } from 'react-router'
import { cx } from '@linaria/core'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { navigateRoute } from '@/lib/navigate'
import { CreateContactModel } from '@/schemas/createContactModel.generated'
import { CreateContacts } from '@/sections/Contacts/forms/CreateContacts.generated'
import { WorkflowStep } from '@/components/WorkflowStep'
import { CreateContactsFields } from '@/sections/Contacts/examples/CreateContactsForm.example'
import { CreateContactAddressModel } from '@/schemas/createContactAddressModel.generated'
import { FieldParent } from '@/components/ModelRuntimeConfig'
import { createContactAddressModelConfig } from '@/sections/Contacts/forms/CreateAddressConfig'
import { useFormContext, UseFormTrigger } from 'react-hook-form'

const step1fields = ['title', 'dateOfBirth', 'forename', 'surname'] as const
const step2fields = [
  'homePhone',
  'workPhone',
  'mobilePhone',
  'email',
  'marketingConsent',
  'communicationPreferenceEmail',
  'communicationPreferencePhone',
  'communicationPreferenceLetter',
  'communicationPreferenceSMS',
] as const
const step3fields = ['primaryAddress', 'secondaryAddress', 'workAddress'] as const
const step4fields = ['negotiatorIds', 'officeIds', 'source'] as const

export const handleSwitchStep =
  (
    step: string,
    selectedStep: string,
    trigger: UseFormTrigger<CreateContactModel>,
    setSelectedStep: Dispatch<SetStateAction<string>>,
  ) =>
  () => {
    console.log('VALIDATING')
    const validateStep = async () => {
      let isValid = false

      switch (selectedStep) {
        case '1':
          isValid = await trigger(step1fields)
          break
        case '2':
          isValid = await trigger(step2fields)
          break
        case '3':
          isValid = await trigger(step3fields)
          break
        case '4':
        default:
          isValid = await trigger(step4fields)
          break
      }

      console.log('VALIDATED', isValid)

      if (isValid) {
        setSelectedStep(step)
      }
    }
    validateStep()
  }

export const ContactsNew: FC = () => {
  const [selectedStep, setSelectedStep] = useState<string>('1')
  const navigate = useNavigate()

  const nextStep = String(Number(selectedStep) + 1)

  return (
    <ErrorBoundary>
      <PageHeader
        hasMaxWidth
        pageTitle={{
          children: 'New Contact',
          hasBoldText: true,
        }}
        buttons={[
          {
            children: 'Back To List',
            intent: 'default',
            className: elMb5,
            onClick: navigateRoute(navigate, '/contacts'),
          },
        ]}
      />
      <FlexContainer isFlexColumn hasMaxWidth>
        <Tile>
          <CreateContacts>
            <StepsVertical
              steps={[
                {
                  item: '1',
                  content: (
                    <WorkflowStep title="Provide us with some basic personal information about your contact.">
                      <CreateContactsFields fieldNames={['title', 'forename', 'surname', 'dateOfBirth']} />
                    </WorkflowStep>
                  ),
                },
                {
                  item: '2',
                  content: (
                    <WorkflowStep title="Provide here the communication details and marketing preferences of your contact.">
                      <CreateContactsFields
                        fieldNames={[
                          'homePhone',
                          'workPhone',
                          'mobilePhone',
                          'email',
                          'marketingConsent',
                          'communicationPreferenceLetter',
                          'communicationPreferenceEmail',
                          'communicationPreferencePhone',
                          'communicationPreferenceSMS',
                        ]}
                      />
                    </WorkflowStep>
                  ),
                },
                {
                  item: '3',
                  content: (
                    <WorkflowStep title=" Provide up to three addresses for your contact. All addresses are optional, only primary address is shown by default.">
                      <CreateContactAddressFields
                        fieldNames={[
                          'type',
                          'buildingName',
                          'buildingNumber',
                          'line1',
                          'line2',
                          'line3',
                          'line4',
                          'postcode',
                          'countryId',
                        ]}
                      />
                    </WorkflowStep>
                  ),
                },
                {
                  item: '4',
                  content: (
                    <WorkflowStep title="Provide information here relating to your Reapit organisation & office.">
                      <CreateContactsFields fieldNames={['source', 'negotiatorIds', 'officeIds']} />
                    </WorkflowStep>
                  ),
                },
              ]}
              selectedStep={selectedStep}
              onStepClick={setSelectedStep}
            />
            <Buttons selectedStep={selectedStep} nextStep={nextStep} setSelectedStep={setSelectedStep} />
          </CreateContacts>
        </Tile>
      </FlexContainer>
    </ErrorBoundary>
  )
}

type CreateContactAddressFieldsProps = {
  fieldNames: (keyof CreateContactAddressModel)[]
}

export const CreateContactAddressFields = ({ fieldNames }: CreateContactAddressFieldsProps) => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createContactAddressModelConfig[fieldName]} />
    ))}
  </>
)

type ButtonsProps = {
  selectedStep: string
  nextStep: string
  setSelectedStep: Dispatch<SetStateAction<string>>
}

const Buttons = ({ selectedStep, nextStep, setSelectedStep }: ButtonsProps) => {
  const { isTablet, isMobile } = useMediaQuery()
  const { trigger, formState } = useFormContext<CreateContactModel>()

  const busy = formState.isSubmitting || formState.isLoading

  return (
    <ButtonGroup className={cx(elMb8, !isTablet && !isMobile && elMl8)} alignment="left">
      {selectedStep === '4' ? (
        <Button intent="primary" type="button" disabled={busy} loading={busy}>
          Create
        </Button>
      ) : (
        <Button
          intent="primary"
          onClick={handleSwitchStep(nextStep, selectedStep, trigger, setSelectedStep)}
          type="button"
          disabled={busy}
          loading={busy}
        >
          Next
        </Button>
      )}
    </ButtonGroup>
  )
}
