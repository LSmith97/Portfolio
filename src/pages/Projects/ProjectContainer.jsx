export default function ProjectContainer({ project }) {
  return (
    <div className="project-container">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name}/>
      <div className="buttons">
        <a href={project.git}><button>Github</button></a>
        <a href={project.live}><button>Live</button></a>
      </div>
      
      <p>{project.disc}</p>
    </div>
  );
}
