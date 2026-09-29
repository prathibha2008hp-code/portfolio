export type Project = {
  number: string
  title: string
  category: string
  description: string
  details: string
  technologies: string[]
  accent: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  { number: '01', title: 'AI Resume Reviewer', category: 'Generative AI · Web app', description: 'A calmer, clearer way to understand what your resume is communicating.', details: 'Combines resume analysis with specific feedback and interview preparation prompts, so the next edit feels actionable.', technologies: ['FastAPI', 'React', 'MongoDB', 'LLMs'], accent: 'mint' },
  { number: '02', title: 'Gesture Control Presenter', category: 'Computer vision · Desktop', description: 'Hands-free slide navigation built around a small set of intuitive gestures.', details: 'Uses a webcam and hand landmarks to translate deliberate gestures into presentation controls.', technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'], accent: 'amber' },
  { number: '03', title: 'Wiki Smart Assistant', category: 'Semantic search · AI', description: 'A conversational route into a broad, interconnected body of public knowledge.', details: 'Retrieves relevant context from Wikipedia content using embeddings and a compact vector index.', technologies: ['Python', 'FastAPI', 'FAISS', 'Embeddings'], accent: 'blue' },
  { number: '04', title: 'Water Scarcity Monitor', category: 'IoT · Social impact', description: 'A connected monitoring concept for making local water levels easier to act on.', details: 'Pairs sensor readings with a lightweight dashboard and SMS alerts for water-related events.', technologies: ['Arduino', 'Flask', 'IoT', 'SMS'], accent: 'mint' },
]

export const skills = [
  { name: 'Python', group: 'Languages', mark: 'Py' }, { name: 'Java', group: 'Languages', mark: 'Ja' },
  { name: 'C', group: 'Languages', mark: 'C' }, { name: 'JavaScript', group: 'Languages', mark: 'Js' },
  { name: 'TypeScript', group: 'Languages', mark: 'Ts' }, { name: 'React', group: 'Frontend', mark: 'Re' },
  { name: 'FastAPI', group: 'Backend', mark: 'Fa' }, { name: 'MongoDB', group: 'Data', mark: 'Mo' },
  { name: 'SQL', group: 'Data', mark: 'Sq' }, { name: 'Git & GitHub', group: 'Tools', mark: 'Gi' },
  { name: 'AI / Gen AI', group: 'Exploring', mark: 'AI' }, { name: 'Data Analytics', group: 'Exploring', mark: 'Da' },
]

export const learningPath = [
  { label: 'Computer Science Engineering', note: 'Building strong foundations in computing and problem solving.', period: 'Ongoing', tone: 'mint' },
  { label: 'Python Development', note: 'Practicing with APIs, automation, and computer-vision projects.', period: 'Learning', tone: 'amber' },
  { label: 'Data Analytics', note: 'Turning raw information into more useful questions and insights.', period: 'Learning', tone: 'blue' },
  { label: 'AI & Generative AI', note: 'Exploring practical applications of models, retrieval, and embeddings.', period: 'Exploring', tone: 'mint' },
  { label: 'Open Source Contributions', note: 'Looking for meaningful ways to learn in public and contribute.', period: 'In progress', tone: 'amber' },
  { label: 'Software Engineering', note: 'Preparing for a career built around useful, dependable software.', period: 'Next chapter', tone: 'blue' },
]

export const profileLinks = { email: 'hello@example.com', github: 'https://github.com/', linkedin: 'https://www.linkedin.com/' }