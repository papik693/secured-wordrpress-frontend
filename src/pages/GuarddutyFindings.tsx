import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Finding from '../components/Finding'
import PageTitle from '../components/PageTitle'
import { useGetFindings } from '../hooks/useGetFindings'

const GuarddutyFindings = () => {
  const { findings, isLoading } = useGetFindings()

  return (
    <div className="p-6">
      <PageTitle>Guardduty Findings</PageTitle>
      {isLoading && (
        <AiOutlineLoading3Quarters className="animate-spin text-5xl" />
      )}
      <div className="flex flex-col gap-3">
        {findings?.map((finding) => (
          <Finding key={finding.id} finding={finding} />
        ))}
      </div>
    </div>
  )
}

export default GuarddutyFindings
