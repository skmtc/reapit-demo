import { RouteObject } from 'react-router-dom'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { NavItem } from '@/components/Root'

export const Routes = [{
      path: 'applicants',
      element: <ApplicantsTable />,
      children: [{
      path: 'new',
      element: <CreateApplicantsForm />,
      
    }]
    }
,{
      path: 'areas',
      element: <AreasTable />,
      children: [{
      path: 'new',
      element: <CreateAreasForm />,
      
    }]
    }
,{
      path: 'appointments',
      element: <AppointmentsTable />,
      children: [{
      path: 'new',
      element: <CreateAppointmentsForm />,
      
    }]
    }
,{
      path: 'companies',
      element: <CompaniesTable />,
      children: [{
      path: 'new',
      element: <CreateCompaniesForm />,
      
    }]
    }
,{
      path: 'contacts',
      element: <ContactsTable />,
      children: [{
      path: 'new',
      element: <CreateContactsForm />,
      
    }]
    }
,{
      path: 'conveyancing',
      element: <ConveyancingTable />,
      
    }
,{
      path: 'departments',
      element: <DepartmentsTable />,
      
    }
,{
      path: 'documents',
      element: <DocumentsTable />,
      children: [{
      path: 'new',
      element: <CreateDocumentsForm />,
      
    }]
    }
,{
      path: 'enquiries',
      element: <EnquiriesTable />,
      children: [{
      path: 'new',
      element: <CreateEnquiriesForm />,
      
    }]
    }
,{
      path: 'invoices',
      element: <InvoicesTable />,
      
    }
,{
      path: 'landlords',
      element: <LandlordsTable />,
      children: [{
      path: 'new',
      element: <CreateLandlordsForm />,
      
    }]
    }
,{
      path: 'metadata',
      element: <MetadataTable />,
      children: [{
      path: 'new',
      element: <CreateMetadataForm />,
      
    }]
    }
,{
      path: 'negotiators',
      element: <NegotiatorsTable />,
      children: [{
      path: 'new',
      element: <CreateNegotiatorsForm />,
      
    }]
    }
,{
      path: 'offers',
      element: <OffersTable />,
      children: [{
      path: 'new',
      element: <CreateOffersForm />,
      
    }]
    }
,{
      path: 'offices',
      element: <OfficesTable />,
      children: [{
      path: 'new',
      element: <CreateOfficesForm />,
      
    }]
    }
,{
      path: 'properties',
      element: <PropertiesTable />,
      children: [{
      path: 'new',
      element: <CreatePropertiesForm />,
      
    }]
    }
,{
      path: 'referrals',
      element: <ReferralsTable />,
      children: [{
      path: 'new',
      element: <CreateReferralsForm />,
      
    }]
    }
,{
      path: 'resthooks',
      element: <ResthooksTable />,
      children: [{
      path: 'new',
      element: <CreateResthooksForm />,
      
    }]
    }
,{
      path: 'sources',
      element: <SourcesTable />,
      children: [{
      path: 'new',
      element: <CreateSourcesForm />,
      
    }]
    }
,{
      path: 'tasks',
      element: <TasksTable />,
      children: [{
      path: 'new',
      element: <CreateTasksForm />,
      
    }]
    }
,{
      path: 'tenancies',
      element: <TenanciesTable />,
      children: [{
      path: 'new',
      element: <CreateTenanciesForm />,
      
    }]
    }
,{
      path: 'transactions',
      element: <TransactionsTable />,
      
    }
,{
      path: 'vendors',
      element: <VendorsTable />,
      
    }];
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
      );