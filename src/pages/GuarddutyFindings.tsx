import Finding from '../components/Finding'
import Loading from '../components/Loading'
import PageSubtitle from '../components/PageSubtitle'
import PageTitle from '../components/PageTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useGetFindings } from '../hooks/useGetFindings'

const GuarddutyFindings = () => {
  useDocumentTitle('Guardduty Findings')
  const { findings, isLoading } = useGetFindings()

  return (
    <div className="p-6">
      <PageTitle>Guardduty Findings</PageTitle>
      <PageSubtitle>
        Here are the security alerts highlighting suspicious activity or
        potential threats detected in your AWS infrastructure.
      </PageSubtitle>
      {isLoading && <Loading />}
      <div className="flex flex-col gap-3">
        {findings?.map((finding) => (
          <Finding key={finding.id} finding={finding} />
        ))}
      </div>
    </div>
  )
}

export default GuarddutyFindings
