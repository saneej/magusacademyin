import Link from "next/link"
import { FileText, Download, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"

interface SemesterPageProps {
  params: {
    branch: string
    semester: string
  }
}

export default function SemesterPage({ params }: SemesterPageProps) {
  const { branch, semester } = params

  const branchNames: Record<string, string> = {
    civil: "Civil Engineering",
    mechanical: "Mechanical Engineering",
    electronics: "Electronics Engineering",
    electrical: "Electrical Engineering",
    "computer-science": "Computer Science",
  }

  const branchName = branchNames[branch] || branch
  const semesterNumber = semester.replace("semester-", "")

  // Sample subjects based on branch
  const getSubjects = (branch: string, semester: string) => {
    const semNum = Number.parseInt(semester.replace("semester-", ""))

    const commonSubjects = [
      { name: "Engineering Mathematics", code: `MA${semNum}01` },
      { name: "Professional Ethics", code: `HU${semNum}01` },
    ]

    const branchSubjects: Record<string, any[]> = {
      civil: [
        { name: "Structural Analysis", code: `CE${semNum}01` },
        { name: "Geotechnical Engineering", code: `CE${semNum}02` },
        { name: "Transportation Engineering", code: `CE${semNum}03` },
        { name: "Environmental Engineering", code: `CE${semNum}04` },
      ],
      mechanical: [
        { name: "Thermodynamics", code: `ME${semNum}01` },
        { name: "Fluid Mechanics", code: `ME${semNum}02` },
        { name: "Manufacturing Processes", code: `ME${semNum}03` },
        { name: "Machine Design", code: `ME${semNum}04` },
      ],
      electronics: [
        { name: "Digital Electronics", code: `EC${semNum}01` },
        { name: "Signals and Systems", code: `EC${semNum}02` },
        { name: "Microprocessors", code: `EC${semNum}03` },
        { name: "Communication Systems", code: `EC${semNum}04` },
      ],
      electrical: [
        { name: "Electric Circuits", code: `EE${semNum}01` },
        { name: "Power Systems", code: `EE${semNum}02` },
        { name: "Control Systems", code: `EE${semNum}03` },
        { name: "Electrical Machines", code: `EE${semNum}04` },
      ],
      "computer-science": [
        { name: "Data Structures", code: `CS${semNum}01` },
        { name: "Operating Systems", code: `CS${semNum}02` },
        { name: "Database Management", code: `CS${semNum}03` },
        { name: "Computer Networks", code: `CS${semNum}04` },
      ],
    }

    return [...commonSubjects, ...(branchSubjects[branch] || [])]
  }

  const subjects = getSubjects(branch, semester)

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href={`/notes/btech/${branch}`} className="text-zinc-400 hover:text-white flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to {branchName} Semesters</span>
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {branchName} - Semester {semesterNumber}
            </h1>
            <p className="text-zinc-300 mb-12">
              Download subject-wise notes, question papers, and study materials for Semester {semesterNumber} of{" "}
              {branchName}.
            </p>

            <div className="space-y-6">
              {subjects.map((subject) => (
                <div key={subject.code} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start md:items-center gap-3">
                      <FileText className="h-6 w-6 text-purple-400 mt-1 md:mt-0" />
                      <div>
                        <h2 className="text-xl font-medium text-white">{subject.name}</h2>
                        <p className="text-zinc-400 text-sm">Course Code: {subject.code}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                      >
                        <Download className="mr-1 h-3 w-3" />
                        Notes
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                      >
                        <Download className="mr-1 h-3 w-3" />
                        Question Papers
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

