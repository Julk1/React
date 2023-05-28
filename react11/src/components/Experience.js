import React, { useState } from "react";
import  WorkExperienceItem from "./WorkExperienceItem";


 export function Experience() {

  const [workExperience,setWorkExperience ] = useState([
    {
      title: "BIM Engineer",
      name: "Strabag",
      description: "Work with Estimating and Proposal departments to develop BIM modeling for estimates and proposal submittals.",
      link: "https://www.strabag.com/"

    },
    {
      title: "Research assistant",
      name: "Wiener Linien",
      description: "Participate in Sales and Marketing process for design build work.",
      link:"https://www.wienerlinien.at/",
    },
    
 ]);


    return (
            

<div className="work">
<h2 className="header">Work experience</h2>
<div className="main-text">
        {workExperience.map((item, index) => (
          <WorkExperienceItem
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