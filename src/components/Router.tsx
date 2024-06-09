import { ApplicantsTable } from '@/examples/ApplicantsTable.example.tsx'
import { CreateApplicantsForm } from '@/examples/CreateApplicantsForm.example.tsx'
import { AreasTable } from '@/examples/AreasTable.example.tsx'
import { CreateAreasForm } from '@/examples/CreateAreasForm.example.tsx'
import { AppointmentsTable } from '@/examples/AppointmentsTable.example.tsx'
import { CreateAppointmentsForm } from '@/examples/CreateAppointmentsForm.example.tsx'
import { CompaniesTable } from '@/examples/CompaniesTable.example.tsx'
import { CreateCompaniesForm } from '@/examples/CreateCompaniesForm.example.tsx'
import { ContactsTable } from '@/examples/ContactsTable.example.tsx'
import { CreateContactsForm } from '@/examples/CreateContactsForm.example.tsx'
import { ConveyancingTable } from '@/examples/ConveyancingTable.example.tsx'
import { DepartmentsTable } from '@/examples/DepartmentsTable.example.tsx'
import { DocumentsTable } from '@/examples/DocumentsTable.example.tsx'
import { CreateDocumentsForm } from '@/examples/CreateDocumentsForm.example.tsx'
import { EnquiriesTable } from '@/examples/EnquiriesTable.example.tsx'
import { CreateEnquiriesForm } from '@/examples/CreateEnquiriesForm.example.tsx'
import { InvoicesTable } from '@/examples/InvoicesTable.example.tsx'
import { LandlordsTable } from '@/examples/LandlordsTable.example.tsx'
import { CreateLandlordsForm } from '@/examples/CreateLandlordsForm.example.tsx'
import { MetadataTable } from '@/examples/MetadataTable.example.tsx'
import { CreateMetadataForm } from '@/examples/CreateMetadataForm.example.tsx'
import { NegotiatorsTable } from '@/examples/NegotiatorsTable.example.tsx'
import { CreateNegotiatorsForm } from '@/examples/CreateNegotiatorsForm.example.tsx'
import { CreateNotificationsForm } from '@/examples/CreateNotificationsForm.example.tsx'
import { OffersTable } from '@/examples/OffersTable.example.tsx'
import { CreateOffersForm } from '@/examples/CreateOffersForm.example.tsx'
import { OfficesTable } from '@/examples/OfficesTable.example.tsx'
import { CreateOfficesForm } from '@/examples/CreateOfficesForm.example.tsx'
import { PropertiesTable } from '@/examples/PropertiesTable.example.tsx'
import { CreatePropertiesForm } from '@/examples/CreatePropertiesForm.example.tsx'
import { ReferralsTable } from '@/examples/ReferralsTable.example.tsx'
import { CreateReferralsForm } from '@/examples/CreateReferralsForm.example.tsx'
import { ResthooksTable } from '@/examples/ResthooksTable.example.tsx'
import { CreateResthooksForm } from '@/examples/CreateResthooksForm.example.tsx'
import { SourcesTable } from '@/examples/SourcesTable.example.tsx'
import { CreateSourcesForm } from '@/examples/CreateSourcesForm.example.tsx'
import { TasksTable } from '@/examples/TasksTable.example.tsx'
import { CreateTasksForm } from '@/examples/CreateTasksForm.example.tsx'
import { TenanciesTable } from '@/examples/TenanciesTable.example.tsx'
import { CreateTenanciesForm } from '@/examples/CreateTenanciesForm.example.tsx'
import { TransactionsTable } from '@/examples/TransactionsTable.example.tsx'
import { VendorsTable } from '@/examples/VendorsTable.example.tsx'
import { RouteObject } from 'react-router-dom'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { NavItem } from '@/components/Root'

export const Routes = [
  {
    path: 'applicants',
    element: <ApplicantsTable />,
    children: [
      {
        path: 'new',
        element: <CreateApplicantsForm />,
      },
    ],
  },
  {
    path: 'areas',
    element: <AreasTable />,
    children: [
      {
        path: 'new',
        element: <CreateAreasForm />,
      },
    ],
  },
  {
    path: 'appointments',
    element: <AppointmentsTable />,
    children: [
      {
        path: 'new',
        element: <CreateAppointmentsForm />,
      },
    ],
  },
  {
    path: 'companies',
    element: <CompaniesTable />,
    children: [
      {
        path: 'new',
        element: <CreateCompaniesForm />,
      },
    ],
  },
  {
    path: 'contacts',
    element: <ContactsTable />,
    children: [
      {
        path: 'new',
        element: <CreateContactsForm />,
      },
    ],
  },
  {
    path: 'conveyancing',
    element: <ConveyancingTable />,
  },
  {
    path: 'departments',
    element: <DepartmentsTable />,
  },
  {
    path: 'documents',
    element: <DocumentsTable />,
    children: [
      {
        path: 'new',
        element: <CreateDocumentsForm />,
      },
    ],
  },
  {
    path: 'enquiries',
    element: <EnquiriesTable />,
    children: [
      {
        path: 'new',
        element: <CreateEnquiriesForm />,
      },
    ],
  },
  {
    path: 'invoices',
    element: <InvoicesTable />,
  },
  {
    path: 'landlords',
    element: <LandlordsTable />,
    children: [
      {
        path: 'new',
        element: <CreateLandlordsForm />,
      },
    ],
  },
  {
    path: 'metadata',
    element: <MetadataTable />,
    children: [
      {
        path: 'new',
        element: <CreateMetadataForm />,
      },
    ],
  },
  {
    path: 'negotiators',
    element: <NegotiatorsTable />,
    children: [
      {
        path: 'new',
        element: <CreateNegotiatorsForm />,
      },
    ],
  },
  {
    path: 'offers',
    element: <OffersTable />,
    children: [
      {
        path: 'new',
        element: <CreateOffersForm />,
      },
    ],
  },
  {
    path: 'offices',
    element: <OfficesTable />,
    children: [
      {
        path: 'new',
        element: <CreateOfficesForm />,
      },
    ],
  },
  {
    path: 'properties',
    element: <PropertiesTable />,
    children: [
      {
        path: 'new',
        element: <CreatePropertiesForm />,
      },
    ],
  },
  {
    path: 'referrals',
    element: <ReferralsTable />,
    children: [
      {
        path: 'new',
        element: <CreateReferralsForm />,
      },
    ],
  },
  {
    path: 'resthooks',
    element: <ResthooksTable />,
    children: [
      {
        path: 'new',
        element: <CreateResthooksForm />,
      },
    ],
  },
  {
    path: 'sources',
    element: <SourcesTable />,
    children: [
      {
        path: 'new',
        element: <CreateSourcesForm />,
      },
    ],
  },
  {
    path: 'tasks',
    element: <TasksTable />,
    children: [
      {
        path: 'new',
        element: <CreateTasksForm />,
      },
    ],
  },
  {
    path: 'tenancies',
    element: <TenanciesTable />,
    children: [
      {
        path: 'new',
        element: <CreateTenanciesForm />,
      },
    ],
  },
  {
    path: 'transactions',
    element: <TransactionsTable />,
  },
  {
    path: 'vendors',
    element: <VendorsTable />,
  },
]
export const NavLinks = () => (
  <>
    <NavItem label="ApplicantsTable" to="/ApplicantsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="AreasTable" to="/AreasTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="AppointmentsTable" to="/AppointmentsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="CompaniesTable" to="/CompaniesTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="ContactsTable" to="/ContactsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="ConveyancingTable" to="/ConveyancingTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="DepartmentsTable" to="/DepartmentsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="DocumentsTable" to="/DocumentsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="EnquiriesTable" to="/EnquiriesTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="InvoicesTable" to="/InvoicesTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="LandlordsTable" to="/LandlordsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="MetadataTable" to="/MetadataTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="NegotiatorsTable" to="/NegotiatorsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="OffersTable" to="/OffersTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="OfficesTable" to="/OfficesTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="PropertiesTable" to="/PropertiesTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="ReferralsTable" to="/ReferralsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="ResthooksTable" to="/ResthooksTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="SourcesTable" to="/SourcesTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="TasksTable" to="/TasksTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="TenanciesTable" to="/TenanciesTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="TransactionsTable" to="/TransactionsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
    <NavItem label="VendorsTable" to="/VendorsTable" icon={<GlobeAltIcon width="24px" height="24px" />} />
  </>
)
