import React from "react";
import "./Project.css";

type ProjectProps = {
  image?: string;
  date_string: string;
  title: string;
  body: string;
  href?: string | undefined;
};

const Project: React.FC<ProjectProps> = ({
  image,
  date_string,
  title,
  body,
  href = undefined,
}) => {
  return (
    <section className="project">
      <div className="leftProj">
        <div className="date">{date_string}</div>
        <img className="image" alt="" src={image} />
      </div>
      <div className="rightProj">
        <a className="title" href={href}>
          {title}
        </a>
        <p className="description">{body}</p>
      </div>
    </section>
  );
};
export default Project;
