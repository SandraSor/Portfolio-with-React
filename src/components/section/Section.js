import "./style.css";

import Project from "../project/Project";

import { projects } from "../../helpers/projectList";

const Section = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((el, index) => {
            return (
              <Project
                key={index}
                index={index}
                title={el.title}
                img={el.img}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Section;
