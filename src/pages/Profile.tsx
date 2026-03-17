import ChangePasswordForm from '../components/forms/ChangePasswordForm'
import UpdateUserForm from '../components/forms/UpdateUserForm'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Profile = () => {
  useDocumentTitle('Profile')
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-3xl">Profile</h2>
      <div className="flex flex-col gap-10">
        <ChangePasswordForm />
        <UpdateUserForm />
      </div>
    </div>
  )
}

export default Profile
