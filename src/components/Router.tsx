import { Applicants } from '@/examples/ApplicantsPage.example.tsx'
import { CreateApplicantsForm } from '@/examples/CreateApplicants.example.tsx'
import { Areas } from '@/examples/AreasPage.example.tsx'
import { CreateAreasForm } from '@/examples/CreateAreas.example.tsx'
import { Appointments } from '@/examples/AppointmentsPage.example.tsx'
import { CreateAppointmentsForm } from '@/examples/CreateAppointments.example.tsx'
import { Companies } from '@/examples/CompaniesPage.example.tsx'
import { CreateCompaniesForm } from '@/examples/CreateCompanies.example.tsx'
import { Contacts } from '@/examples/ContactsPage.example.tsx'
import { CreateContactsForm } from '@/examples/CreateContacts.example.tsx'
import { Conveyancing } from '@/examples/ConveyancingPage.example.tsx'
import { Departments } from '@/examples/DepartmentsPage.example.tsx'
import { Documents } from '@/examples/DocumentsPage.example.tsx'
import { CreateDocumentsForm } from '@/examples/CreateDocuments.example.tsx'
import { Enquiries } from '@/examples/EnquiriesPage.example.tsx'
import { CreateEnquiriesForm } from '@/examples/CreateEnquiries.example.tsx'
import { Invoices } from '@/examples/InvoicesPage.example.tsx'
import { Landlords } from '@/examples/LandlordsPage.example.tsx'
import { CreateLandlordsForm } from '@/examples/CreateLandlords.example.tsx'
import { Metadata } from '@/examples/MetadataPage.example.tsx'
import { Negotiators } from '@/examples/NegotiatorsPage.example.tsx'
import { CreateNegotiatorsForm } from '@/examples/CreateNegotiators.example.tsx'
import { CreateNotificationsForm } from '@/examples/CreateNotifications.example.tsx'
import { Offers } from '@/examples/OffersPage.example.tsx'
import { CreateOffersForm } from '@/examples/CreateOffers.example.tsx'
import { Offices } from '@/examples/OfficesPage.example.tsx'
import { CreateOfficesForm } from '@/examples/CreateOffices.example.tsx'
import { Properties } from '@/examples/PropertiesPage.example.tsx'
import { CreatePropertiesForm } from '@/examples/CreateProperties.example.tsx'
import { Referrals } from '@/examples/ReferralsPage.example.tsx'
import { CreateReferralsForm } from '@/examples/CreateReferrals.example.tsx'
import { Resthooks } from '@/examples/ResthooksPage.example.tsx'
import { CreateResthooksForm } from '@/examples/CreateResthooks.example.tsx'
import { Sources } from '@/examples/SourcesPage.example.tsx'
import { CreateSourcesForm } from '@/examples/CreateSources.example.tsx'
import { Tasks } from '@/examples/TasksPage.example.tsx'
import { CreateTasksForm } from '@/examples/CreateTasks.example.tsx'
import { Tenancies } from '@/examples/TenanciesPage.example.tsx'
import { CreateTenanciesForm } from '@/examples/CreateTenancies.example.tsx'
import { Transactions } from '@/examples/TransactionsPage.example.tsx'
import { Vendors } from '@/examples/VendorsPage.example.tsx'
import { RouteObject } from 'react-router-dom'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { NavItem } from '@/components/Root'

export const Routes: RouteObject[] = [
  {
    path: 'applicants',
    element: <Applicants />,
    children: [
      {
        path: 'new',
        element: <CreateApplicantsForm />,
      },
    ],
  },
  {
    path: 'areas',
    element: <Areas />,
    children: [
      {
        path: 'new',
        element: <CreateAreasForm />,
      },
    ],
  },
  {
    path: 'appointments',
    element: <Appointments />,
    children: [
      {
        path: 'new',
        element: <CreateAppointmentsForm />,
      },
    ],
  },
  {
    path: 'companies',
    element: <Companies />,
    children: [
      {
        path: 'new',
        element: <CreateCompaniesForm />,
      },
    ],
  },
  {
    path: 'contacts',
    element: <Contacts />,
    children: [
      {
        path: 'new',
        element: <CreateContactsForm />,
      },
    ],
  },
  {
    path: 'conveyancing',
    element: <Conveyancing />,
  },
  {
    path: 'departments',
    element: <Departments />,
  },
  {
    path: 'documents',
    element: <Documents />,
    children: [
      {
        path: 'new',
        element: <CreateDocumentsForm />,
      },
    ],
  },
  {
    path: 'enquiries',
    element: <Enquiries />,
    children: [
      {
        path: 'new',
        element: <CreateEnquiriesForm />,
      },
    ],
  },
  {
    path: 'invoices',
    element: <Invoices />,
  },
  {
    path: 'landlords',
    element: <Landlords />,
    children: [
      {
        path: 'new',
        element: <CreateLandlordsForm />,
      },
    ],
  },
  {
    path: 'metadata',
    element: <Metadata />,
  },
  {
    path: 'negotiators',
    element: <Negotiators />,
    children: [
      {
        path: 'new',
        element: <CreateNegotiatorsForm />,
      },
    ],
  },
  {
    path: 'offers',
    element: <Offers />,
    children: [
      {
        path: 'new',
        element: <CreateOffersForm />,
      },
    ],
  },
  {
    path: 'offices',
    element: <Offices />,
    children: [
      {
        path: 'new',
        element: <CreateOfficesForm />,
      },
    ],
  },
  {
    path: 'properties',
    element: <Properties />,
    children: [
      {
        path: 'new',
        element: <CreatePropertiesForm />,
      },
    ],
  },
  {
    path: 'referrals',
    element: <Referrals />,
    children: [
      {
        path: 'new',
        element: <CreateReferralsForm />,
      },
    ],
  },
  {
    path: 'resthooks',
    element: <Resthooks />,
    children: [
      {
        path: 'new',
        element: <CreateResthooksForm />,
      },
    ],
  },
  {
    path: 'sources',
    element: <Sources />,
    children: [
      {
        path: 'new',
        element: <CreateSourcesForm />,
      },
    ],
  },
  {
    path: 'tasks',
    element: <Tasks />,
    children: [
      {
        path: 'new',
        element: <CreateTasksForm />,
      },
    ],
  },
  {
    path: 'tenancies',
    element: <Tenancies />,
    children: [
      {
        path: 'new',
        element: <CreateTenanciesForm />,
      },
    ],
  },
  {
    path: 'transactions',
    element: <Transactions />,
  },
  {
    path: 'vendors',
    element: <Vendors />,
  },
]

export const NavLinks = () => {
  return (
    <>
      <NavItem label="Applicants" to="/Applicants" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Areas" to="/Areas" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Appointments" to="/Appointments" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Companies" to="/Companies" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Contacts" to="/Contacts" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Conveyancing" to="/Conveyancing" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Departments" to="/Departments" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Documents" to="/Documents" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Enquiries" to="/Enquiries" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Invoices" to="/Invoices" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Landlords" to="/Landlords" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Metadata" to="/Metadata" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Negotiators" to="/Negotiators" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Offers" to="/Offers" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Offices" to="/Offices" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Properties" to="/Properties" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Referrals" to="/Referrals" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Resthooks" to="/Resthooks" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Sources" to="/Sources" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Tasks" to="/Tasks" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Tenancies" to="/Tenancies" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Transactions" to="/Transactions" icon={<GlobeAltIcon width="24px" height="24px" />} />
      <NavItem label="Vendors" to="/Vendors" icon={<GlobeAltIcon width="24px" height="24px" />} />
    </>
  )
}
