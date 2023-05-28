
import { Contacts } from './components/Contacts';
import { MyPhoto } from './components/MyPhoto';
import { Experience } from './components/Experience';
import { Counter } from './components/Counter';
import WorkExperienceDetails from './components/WorkExperienceDetails';
import AddExperienceForm from './components/AddExperienceForm';



import '../src/styles/style copy.css'

const photoLink = './my-photo.jpg';

function App() {

    const [workExperienceItems, setWorkExperienceItems] = useState([]);

    function addWorkExperience(newItem) {
    setWorkExperienceItems([...workExperienceItems, newItem]);

  }

  return <div className='main-theme'>
         <div className='grid-container'>
            <div className='grid-item-1'>
    
              <div className='photo'>
                <MyPhoto imageLink = {photoLink} />
                </div>
  
            <Contacts/>
            </div>

       

           <Experience/>

           {workExperienceItems.map(item => (
          <WorkExperienceItem key={item.name} {...item} />
        ))}
        <WorkExperienceForm onAddItem={addWorkExperience} />


    <Counter/>
  
    
      </div>
     </div>
   
  
}

export default App;
