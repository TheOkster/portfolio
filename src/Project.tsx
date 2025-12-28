import React, { useEffect, useRef } from "react";
import "./Project.css";
import vector from "./vector.svg";
import hyperlink1 from "./hyperlink-1.png";
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

  useEffect(() => {
    if (!rightRef.current || !imageRef.current) return;

    let rafId: number | null = null;
    const clamp = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!rightRef.current || !imageRef.current) return;

        const availableHeight =
          rightRef.current.offsetHeight -
          (dateRef.current?.offsetHeight ?? 0);

        if (availableHeight <= 0) return;

        const img = imageRef.current;

        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;

        if (!naturalWidth || !naturalHeight) return;

        const scale = availableHeight / naturalHeight;
        const limit = 0.8;

        img.style.height = availableHeight * limit + "px";
        img.style.width = naturalWidth * scale * limit + "px";
      });
    };

    const observer = new ResizeObserver(clamp);
    observer.observe(rightRef.current);

    // run once immediately
    clamp();

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
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
