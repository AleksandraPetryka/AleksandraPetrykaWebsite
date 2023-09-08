async function getProject(id: string) {
  const res = await fetch("http://localhost:4000/projects/" + id, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}
export default async function ProjectDetails({ params }: any) {
  const project: { [key: string]: string } = await getProject(params.id);
  return (
    <main>
      <nav>
        <h2>Project Details</h2>
      </nav>
      <div className="card">
          <h3>{project.title}</h3>
          <p>{project.body}</p>
          <div className="tools">Tools used for this project: {project.tools}</div>
      </div>
    </main>
  );
}
