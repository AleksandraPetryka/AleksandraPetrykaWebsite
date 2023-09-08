import './globals.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className='main'>
      <h2>Dashboard</h2>
      <p>Hi, I'm Aleksandra Petryka. I'm a software engineer. I'm currently working on my final project <Link href="">Aleksandra Petryka website</Link>. My favorite programming language is JavaScript.</p>
      <div>
      <Link href="/portfolio">
        <button className='btn-primary'>View Projects</button>
      </Link>
      </div>
      <h2>Recent Updates</h2>

    <div className="card">
        <h3>Learning new tool...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
    </div>
    <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
    </div>
    </main>
  )
}
