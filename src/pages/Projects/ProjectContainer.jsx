export default function ProjectContainer({ project }) {
  return (
    <div className="project-container">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <a href={project.git}>Github</a>
      <a href={project.live}>Live</a>
      <p>{project.disc}</p>
    </div>
  );
}
