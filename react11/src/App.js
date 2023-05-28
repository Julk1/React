
import { useState } from 'react';
import { Contacts } from './components/Contacts';
import { MyPhoto } from './components/MyPhoto';
import { Experience } from './components/Experience';
import WorkExperienceItem from './components/WorkExperienceItem';
import WorkExperienceForm from './components/WorkExperienceForm';
import { Counter } from './components/Counter';





import '../src/styles/style copy.css'

const photoLink = './my-photo.jpg';

function App() {

    const [workExperienceItems, setWorkExperienceItems] = useState([]);

    function addWorkExperience(newItem) {
    setWorkExperienceItems([...workExperienceItems, newItem]);

  }

  return (

   <div className='main-theme'>
         <div className='grid-container'>
            <div className='grid-item-1'>
    
              <div className='photo'>
                <MyPhoto imageLink = {photoLink} />
                </div>
  
            <Contacts/>
            </div>

       
          <div className='grid-item-2'>


           <Experience/>


           {workExperienceItems.map(item => (
          <WorkExperienceItem key={item.name} {...item} />
        ))}
          <WorkExperienceForm onAddItem={addWorkExperience} />
           
          <Counter/>

   
  
    
      </div>
     </div>
     </div>
   
  )
}

export default App;
