import type { Finding as FindingType } from '../types/finding'

type Props = {
  finding: FindingType
}
const Finding = ({ finding }: Props) => {
  const getSeverityColor = (sev: number) => {
    if (sev >= 7) return `text-red-700`
    if (sev >= 4) return `text-orange-700`
    return `text-blue-300`
  }
  return (
    <div className="bg-[#0F0F0F] border rounded-lg p-4 border-[#FFFFFF16]">
      <p className="text-sm mb-2">Type: {finding.type}</p>
      <h3 className="text-lg font-semibold">{finding.title}</h3>
      <div
        className={`${getSeverityColor(finding.severity)} font-semibold mb-5 text-xl`}
      >
        Severity: {finding.severity}
      </div>
      <p>{finding.description}</p>
    </div>
  )
}

export default Finding
