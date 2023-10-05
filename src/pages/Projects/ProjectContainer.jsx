export default function ProjectContainer({ project }) {
  return (
    <div className="project-container">
      <h1>{project.name}</h1>
      <p>{project.disc}</p>
      <h4>{project.skills}</h4>
      <hr />
      <img src={project.image} alt={project.name} />
      <hr />
      <div className="buttons">
        <a href={project.git}>
          <img
            src={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-1024.png"}
            alt="github"
          />
          GitHub
        </a>
        <a href={project.live}>
          <img
            src="https://i.imgur.com/9WKKj19.png"
            alt="live"
          />
          Live Site
        </a>
      </div>
    </div>
  );
}
