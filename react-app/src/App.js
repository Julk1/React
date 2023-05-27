






import { Contacts } from './Components/Contacts';
import { Experience } from './Components/Experience';
import { Image } from './Components/Image';
import '../src/styles.scss/styles.css'

const photoLink = './Foto.jpg';

function App() {
  return (
    <body className='main-theme'>
    <div className='grid-container'>
     <div className='grid-item-1'>
      <header className='header1'>
        <div className='sidebar-photo'>
            <Image imageLink = {photoLink}/>
        </div>
        
       
        <Contacts/>        
      </header>
   <main>
    <div className='main-content'>
        <Experience/>
    </div>
   </main>
    </div>
    </div>
</body>
)
}

export default App;