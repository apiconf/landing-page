interface ReportingOption {
  method: string;
  description: string;
}

interface ReportingListProps {
  options: ReportingOption[];
}

export const ReportingList = ({ options }: ReportingListProps) => (
  <ul className="space-y-3 text-gray-200 mb-6" role="list">
    {options.map((option, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="text-green-400 font-bold mt-1 flex-shrink-0">•</span>
        <span className="leading-relaxed">
          <strong className="text-white">{option.method}</strong>
          {option.method === "Email" ? (
            <>: <a 
              href="mailto:hello@apiconf.net" 
              className="text-blue-300 hover:text-blue-200 transition-colors underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded"
              aria-label="Send email to report violations"
            >
              hello@apiconf.net
            </a></>
          ) : (
            <span className="text-gray-300"> {option.description}</span>
          )}
        </span>
      </li>
    ))}
  </ul>
);