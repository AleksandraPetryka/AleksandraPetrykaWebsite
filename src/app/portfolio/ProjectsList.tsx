import Link from "next/link";

async function getProjects() {
    const res = await fetch('http://localhost:4000/projects', {
        next: {
            revalidate: 0
        }
    })
    return res.json()
}
export default async function ProjectsList() {
    const projects = await getProjects()
    console.log(projects);
    return (
        <>
            {projects.map((project: any) => (
                <div key={project.id} className="card">
                    <Link href={`/portfolio/${project.id}`}>
                    <h3>{project.title}</h3>
                    <p>{project.body.slice(0, 200)}...</p>
                    <div className='tools'>Tools used: {project.tools}</div>
                    </Link>
                </div>

            ))}
            {projects.length === 0 && (
                <p>No projects found.</p>
            )}
        </>
    )
}