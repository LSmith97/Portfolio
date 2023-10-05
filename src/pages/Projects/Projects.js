import { useState, useEffect } from "react";
import "./Projects.css"
import ProjectContainer from "./ProjectContainer";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  // fetch data from projects.json
  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {getProjectsData() }, []);

  const loaded = () => {
    return projects.map((project) => (<ProjectContainer project={project}/>));
  };

  return (
  <main>
    {projects ? loaded() : <h1>Loading...</h1>}
  </main>
  
  )
}

export default Projects;

