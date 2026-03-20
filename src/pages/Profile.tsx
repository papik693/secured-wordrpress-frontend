import ChangePasswordForm from '../components/forms/ChangePasswordForm'
import UpdateUserForm from '../components/forms/UpdateUserForm'
import PageTitle from '../components/PageTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Profile = () => {
  useDocumentTitle('Profile')
  return (
    <div className="flex flex-col gap-5 p-6">
      <PageTitle>Profile</PageTitle>
      <div className="flex flex-col gap-10">
        <ChangePasswordForm />
        <UpdateUserForm />
      </div>
    </div>
  )
}

export default Profile
