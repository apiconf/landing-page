export type SlideCategory = 'conference' | 'workshop';
export type SlideFileType = 'powerpoint' | 'pdf' | 'google-slides' | 'drive-shortcut';

export type SlideEntry = {
  speaker: string;
  title: string;
  category: SlideCategory;
  fileType: SlideFileType;
  fileId: string;
};

export const slidesFolderUrl =
  'https://drive.google.com/drive/folders/17idGhMkSVk3C3Acuczz8u3ShZxba9rpA';

export function buildSlideUrl(entry: SlideEntry): string {
  if (entry.fileType === 'google-slides') {
    return `https://docs.google.com/presentation/d/${entry.fileId}/edit`;
  }

  if (entry.fileType === 'drive-shortcut') {
    return `https://drive.google.com/open?id=${entry.fileId}`;
  }

  return `https://drive.google.com/file/d/${entry.fileId}/view`;
}

export const slides: SlideEntry[] = [
  {
    speaker: 'Onyedikachi Hope Amaechi-Okorie',
    title: 'Improving API Adoption Through Developer Experience, Not Just Design',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '19M-7TIh7zFn4MxAZSOoWmNnzWQ0eNH_h',
  },
  {
    speaker: 'Jamiu Adam',
    title: 'When Your API Is Slow, It’s Probably SQL: Performance Tuning for Production APIs',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1DyxLp2ME2bAEcqVdO7nvpZeeYGvn4IPc',
  },
  {
    speaker: 'Amarachi Iheanacho',
    title: 'Governance Without the Bureaucracy: How to Enforce API Standards Without Slowing Down Your Team',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1C3c01V-leHi2fXoFeNx-vGpNb471zOM3',
  },
  {
    speaker: 'Somtochi Onyekwere',
    title: 'What API Designers Can Learn from the Kubernetes API',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1Ld29S5Dd6mf6f1rnlSQBbcSNnf_JTCKb',
  },
  {
    speaker: 'Ayomide Ariyo',
    title: 'The Assumptions That Break APIs in Production',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1Ol5htU_dJzE5h9LfXkdx9Z11OlxvRv2l',
  },
  {
    speaker: 'Azeez Elegbede',
    title: 'The AsyncAPI EPIC Guideline',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '13CcC2ZT8f9nwzNQ_WPaZJzUb_Hi3c8aT',
  },
  {
    speaker: 'Chigozie Madubuko',
    title: 'AI Can Write Code. But It Doesn’t Know Your System',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1Jdoy7fkoKFXg9MwER0BX_iP8h5NSxdlp',
  },
  {
    speaker: 'Cindy Shontan',
    title: 'Designing APIs as Products: How Product Thinking Improves Developer Experience',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1xVw9V7rWkLY83QKe8lFTsCP-5Rjl8V0u',
  },
  {
    speaker: 'Ibukun Adedeji',
    title: 'Where Will AI Converge: No Intelligence Without Energy',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1mTV3M6vWnZ65yGywCZxo9WH3ybUG7Snu',
  },
  {
    speaker: 'Ifeanyi Echereobia',
    title: 'The APIs You Don’t Control: Building on NIBSS, CBN & Payment Rails Without Losing Your Mind',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1hbXHoUxX4IvWJ2f0hB5GRMO51q4PpNOH',
  },
  {
    speaker: 'Joel Olawanle',
    title: 'Software Is Going Headless: What the API Becomes When Agents Run Everything',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1zAZk6jW_dUhMLg-N0ZyLS2MYq2EA7P3Z',
  },
  {
    speaker: 'Kelechi Oliver Azorji',
    title: 'From Scattered Docs to Instant Answers: How We Built an Internal Knowledge Graph with LangChain',
    category: 'conference',
    fileType: 'google-slides',
    fileId: '1ScXbrEHg80bujSArUPY_PgGAG1CP_wAet1DQdcYGChM',
  },
  {
    speaker: 'Motunrayo Koyejo',
    title: 'When Payments Fail: Designing Resilient APIs for Fintech Systems',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1vE_PvZiojPJEKRj-CWEkQ1uGs4kkJl1h',
  },
  {
    speaker: 'Nasihudeen Jimoh',
    title: 'Designing Better Developer Experience for Web3 APIs',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1mLJ9LaSzuXQvB6eWblKgdhBqBtTdyoDw',
  },
  {
    speaker: 'Obi Uchenna David',
    title: 'AI Agents Need Guardrails: Securing APIs in the Age of Autonomous Systems',
    category: 'conference',
    fileType: 'pdf',
    fileId: '14GMRKb2_6KMoJPgeV_4OhsY3cStY7Zsx',
  },
  {
    speaker: 'Peterson Nwoko',
    title: 'From Prompts to Autonomous Systems: Architecting Production-Ready AI Agents on Google Cloud',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1FkIkQpWNU8KjTvaDwy37O3MAAQbRyy_C',
  },
  {
    speaker: 'Progress Ochuko Eyaadah (Koxy)',
    title: 'Building Crypto Payment APIs in Africa: Stablecoins, On-Ramps & the Regulatory Tightrope',
    category: 'conference',
    fileType: 'powerpoint',
    fileId: '1NKnq99PPy_LXJl0SVWwRuUNb-dUyTzK5',
  },
  {
    speaker: 'Abdulqudus Abubakre',
    title: 'From REST to MCP: Making Your Backend AI-Ready with FastMCP',
    category: 'workshop',
    fileType: 'drive-shortcut',
    fileId: '13WKNfziajPdxhpQDIyz_zhnFSyMN8aWF',
  },
  {
    speaker: 'Ayooluwa Isaiah',
    title: 'Monitoring APIs with OpenTelemetry',
    category: 'workshop',
    fileType: 'google-slides',
    fileId: '17oaERH1gR5o5-gepSaJQKo72fbBX9STm8M8aAfoPTqk',
  },
  {
    speaker: 'Jamiu Okanlawon',
    title: 'Building Your First AI Agent with Genkit',
    category: 'workshop',
    fileType: 'powerpoint',
    fileId: '1GSJlueNAWuG_Fd34CEpuel6Xbey-Tj0A',
  },
  {
    speaker: 'Chinedu Otutu',
    title: 'Type-Safe APIs with Hono and Zod: Fast, Lightweight, and Bulletproof',
    category: 'workshop',
    fileType: 'google-slides',
    fileId: '1FEBG6xfui_aMevbwRK0fBZoGhMgW93mmSxGgSSma2Vc',
  },
  {
    speaker: 'Oluwadamilola Oshungboye',
    title: 'Stop Re-Prompting: How Reusable AI Skills Make Vibe Coding Actually Work',
    category: 'workshop',
    fileType: 'powerpoint',
    fileId: '1kDu-cxnZFlFogYt5lNfw4AGR4WwSQzcC',
  },
  {
    speaker: 'Alayesanmi Femi',
    title: 'Rethinking Caching: Building APIs for the Unpredictable Traffic from Agentic Systems',
    category: 'workshop',
    fileType: 'powerpoint',
    fileId: '1Olh4YlQXZiSgD2hVVpe7O5_-1AhldPcc',
  },
  {
    speaker: 'Funke Olasupo',
    title: 'Your API Docs Are Breaking AI',
    category: 'workshop',
    fileType: 'powerpoint',
    fileId: '1W8fBdN-kJJrWo_8zH1v4HQd8cHciaHwL',
  },
  {
    speaker: 'Prince Onyeanuna',
    title: 'The Lazy Way to Keep Your API Docs in Sync',
    category: 'workshop',
    fileType: 'powerpoint',
    fileId: '1-zJ6cxcdVZqzuJIp8jjA8p6civBv3EDO',
  },
  {
    speaker: 'Tes Sal',
    title: 'Hacking APIs in the Wild: Finding, Exploiting & Reporting Modern API Vulnerabilities',
    category: 'workshop',
    fileType: 'powerpoint',
    fileId: '1zKZI1tL6efi5OJmzQ7D7Y_sAiDeNcd3l',
  },
  {
    speaker: 'Timothy Ogunwemimo',
    title: 'Building Robust, Secure, and Scalable API Infrastructure with Microsoft Azure Services',
    category: 'workshop',
    fileType: 'powerpoint',
    fileId: '1Pb8QJ2GMEXoQWa4g8fwAySRowl4GICMz',
  },
  {
    speaker: 'Usman Soliu',
    title: 'From Monolith to Microservices: Designing Resilient, Observable APIs with Node.js',
    category: 'workshop',
    fileType: 'powerpoint',
    fileId: '1l-01xKnZM-RckmNY2Bsdsn3aLlPCOnIc',
  },
];

