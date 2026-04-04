import Finding from '../components/Finding'
import PageTitle from '../components/PageTitle'
import { useGetFindings } from '../hooks/useGetFindings'

const GuarddutyFindings = () => {
  const { findings } = useGetFindings()
  console.log(findings)

  return (
    <div className="p-6">
      <PageTitle>Guardduty Findings</PageTitle>
      <div className="flex flex-col gap-3">
        {findings?.map((finding) => (
          <Finding key={finding.id} finding={finding} />
        ))}
      </div>
    </div>
  )
}

export default GuarddutyFindings
