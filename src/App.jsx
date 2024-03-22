import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/avatar.jpg" />

        <Title title="Sanhanat  Pimyo (Alex)">
          <h3>Position : IT Support</h3>
        </Title>

        <Title title="Contact">
     
          <p>current date: {moment().format("D MMM YYYY")}</p>
          <p>Date of Birth: {moment("2002/05/30").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66834327965
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'hide'}
          </button>
          <p>Email : s64122202042@ssru.ac.th</p>
          <p>www.sanhanatpimyo.com</p>
        </Title>
    
        <Title title="Education">
          <p>Bachelor of Science in Information Technology (IT)</p>
          <p>Suan Sunandha Rajabhat University</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Creative Graphic Designer with a strong portfolio in logo design, print media, digital media, user interface, and website design.</p>
        </Title>

        <Title title="Experience">
          <p>Project: Graphic Design video game rpg maker</p>
        </Title>

        <Title title="Skills">
          <p>• Adobe Photoshop</p>
          <p>• Adobe Illustrator</p>
          <p>• Canva</p>
          <p>• Adobe Premiere Pro</p>
          <p>• Microsoft Office</p>
          <p>• Visual Studio</p>
        </Title>
      </div>
    </main>
  )
}

export default App
