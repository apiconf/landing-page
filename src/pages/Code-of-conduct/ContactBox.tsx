export const ContactBox = () => (
  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-8 backdrop-blur-sm">
    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
    <p className="text-gray-200 mb-6">For questions about this Code of Conduct or to report violations:</p>
    <div className="space-y-3 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <span className="font-semibold text-purple-300 min-w-20">Email:</span>
        <a 
          href="mailto:hello@apiconf.net" 
          className="text-blue-300 hover:text-blue-200 transition-colors underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded"
          aria-label="Send email to conference organizers"
        >
          hello@apiconf.net
        </a>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <span className="font-semibold text-purple-300 min-w-20">Website:</span>
        <a 
          href="https://apiconf.net" 
          className="text-blue-300 hover:text-blue-200 transition-colors underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit API Conference website"
        >
          apiconf.net
        </a>
      </div>
    </div>
    <p className="text-gray-200 text-sm leading-relaxed">
      Conference organizers will be clearly identified at the event and available to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe during the conference.
    </p>
  </div>
);