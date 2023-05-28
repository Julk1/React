import React, { useState } from "react";
import WorkExperienceDetails from "./WorkExperienceDetails";

 export function Experience() {

  const [workExperience] = useState([
    {
      title: "BIM Engineer",
      name: "Strabag",
      description: "Work with Estimating and Proposal departments to develop BIM modeling for estimates and proposal submittals.",
      link: "https://www.strabag.com/"

    },
    
 ]);


    return (
            

<div className="work">
<h2 className="header">Work experience</h2>
<div className="work-descr">


        {Experience.map((item, index) => (
          <WorkExperienceDetails
            key={index}
            title={item.title}
            name={item.name}
            description={item.description}
            link={item.link}
          />
          ))}
        </div>
      </div>
    );
  }