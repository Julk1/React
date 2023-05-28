export default function WorkExperienceDetails({ title, description, name, link }) {
  return (
    <div className="work-descr">
     <p> <span className="bold-text">Name of employer:</span> {name} <br />
      <span className="bold-text">Job title:</span> {title} <br />
      <span className="bold-text">Description:</span> {description} <br />
      <a href={link} className="link-description">Link:</a>
      </p>
    </div>
  );
};