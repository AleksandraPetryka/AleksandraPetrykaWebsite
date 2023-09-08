import ProjectsList from "@/app/portfolio/ProjectsList";

export default function Portfolio() {
    return (
        <main>
        <nav>
          <div>
              <h2>Projects</h2>
              <p><small>These apps are made with React interacting with store data on Firebase or local storage.</small></p>
          </div>
        </nav>
            <ProjectsList />
        </main>
    )
}