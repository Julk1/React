
import { Contacts } from './components/Contacts';
import { MyPhoto } from './components/MyPhoto';
import { Experience } from './components/Experience';
import '../src/styles/style copy.css'

const photoLink = './my-photo.jpg';

function App() {
  return <div className='main-theme'>
         <div className='grid-container'>
            <div className='grid-item-1'>
    
              <div className='photo'>
                <MyPhoto imageLink = {photoLink} />
                </div>
  
            <Contacts/>
            </div>

         <div className='grid-item-2'>
           <Experience/>

    
      </div>
     </div>
    </div>
  
}

export default App;
