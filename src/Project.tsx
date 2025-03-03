import React from "react";
import "./Project.css";

type ProjectProps = {
  image: string;
  date_string: string;
  title: string;
  body: string;
  link?: string | undefined;
};

const Project: React.FC<ProjectProps> = ({
  image,
  date_string,
  title,
  body,
  link = undefined,
}) => {
  return (
    <section className="project">
      <img src={image} alt={title} />
      <div className="projectInfo">
        <h2>{link ? <a href={link}>{title}</a> : <span>{title}</span>}</h2>
        <h4>{date_string}</h4>
        <p>{body}</p>
      </div>
    </section>
  );
};
export default Project;
