import learningResources from "../data/learning-resources.json"

export interface Course {
  code?: string
  name: string
  credits: number
  // A BOSC-hosted or member-contributed notes link
  notesLink?: string
  // External page with past papers (and usually syllabus) for this subject
  pastQuestionsLink?: string
}

export interface Semester {
  semester: number
  courses: Course[]
  electiveCourses?: Course[]
  // Shown above the course list, e.g. when a curriculum was revised
  note?: string
  semesterLinks?: { name: string; url: string }[]
}

export interface FacultyData {
  facultyInfo: Record<string, string | string[]>
  curriculum: { name: string; issuer: string; url: string }
  studySites: { name: string; desc: string; url: string }[]
  semesters: Semester[]
}

export interface Faculty {
  key: string
  name: string
  fullName: string
  note?: string
}

export const faculties: Faculty[] = [
  {
    key: "csit",
    name: "CSIT",
    fullName: "B.Sc. Computer Science and Information Technology",
  },
  { key: "bit", name: "BIT", fullName: "Bachelor in Information Technology" },
  {
    key: "bca",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    note: "2081 batch and earlier",
  },
  {
    key: "bca-2082",
    name: "BCA (2082+)",
    fullName: "Bachelor of Computer Applications",
    note: "New curriculum, 2082 batch onwards",
  },
  {
    key: "bicte",
    name: "BICTE",
    fullName: "Bachelor of ICT Education",
  },
]

const files = import.meta.glob<FacultyData>("../data/notes-*.json", {
  eager: true,
  import: "default",
})

export function getFaculty(key: string) {
  const faculty = faculties.find((f) => f.key === key)
  const data = files[`../data/notes-${key}.json`]
  if (!faculty || !data) throw new Error(`Unknown faculty: ${key}`)
  return { faculty, data }
}

export interface LearningResource {
  title: string
  provider: string
  url: string
}

const topics: Record<string, LearningResource[]> = learningResources.topics
const rules = learningResources.rules.map((rule) => ({
  pattern: new RegExp(rule.match, "i"),
  topics: rule.topics,
}))

// Free courses, books and docs that match a course by its name
export function resourcesFor(courseName: string): LearningResource[] {
  const found = new Map<string, LearningResource>()
  for (const rule of rules) {
    if (!rule.pattern.test(courseName)) continue
    for (const topic of rule.topics) {
      for (const resource of topics[topic] ?? []) {
        found.set(resource.url, resource)
      }
    }
  }
  return [...found.values()]
}
