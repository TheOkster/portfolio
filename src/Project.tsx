import React, { useEffect, useRef } from "react";
import "./Project.css";
import vector from "./images/GitHub.svg";
import hyperlink1 from "./images/hyperlink.png";
type ProjectProps = {
  image?: string;
  date_string: string;
  title: string;
  body: string;
  github?: string | undefined;
  other_links?: string | undefined;
};

const Project: React.FC<ProjectProps> = ({
  image,
  date_string,
  title,
  body,
  github = undefined,
  other_links = undefined,
}) => {

  const rightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);


  return (
    <section className="project">
      <div className="leftProj">
        <div className="date" ref={dateRef}>{date_string}</div>
        <img className="image" alt="" src={image} ref={imageRef} />
      </div>
      <div className="rightProj" ref={rightRef}>
        <a className="title" href={other_links}>
          {title}
        </a>
        <p className="description">{body}</p>
        <div className="links"> {other_links && <a href={other_links}><img className="image" alt="Link" src={hyperlink1} /></a>} {github && <a href={github}><img className="image" alt="GitHub" src={vector} /></a>} </div>
      </div>
    </section>
  );
};
export default Project;
