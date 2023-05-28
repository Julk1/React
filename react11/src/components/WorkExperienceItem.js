export default function WorkExperienceItem({ title, description, name, link }) {

    return (
      <div className="main-text">
        <p><span className="bold-text">Job title: </span>{title}<br/>
        <span className="bold-text">Name of employer: </span>{name}<br/>
        <span className="bold-text">Project/Role description: </span>{description}<br/>
        <a href={link}>{name}</a>
        </p>
      </div>
    );
  }