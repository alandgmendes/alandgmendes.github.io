import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profilePicture from './images/profile.jpeg'
import './HomePage.css'

function HomePage() {
  
  return (
    <div className="App" >
      <body> 
        <div className='main-div'>
          
        <div className='col-card-perfil'>
        <img className="profile-picture" src={profilePicture} alt="Alandouglas"/>
        <p className="itens-profile-card">Alandouglas Godinho Mendes</p>
        <p className="itens-profile-card">Desenvolvedor de software</p>
        <p className="itens-profile-card">Estudante de física</p>
        <p className="itens-profile-card">Apaixonado por análise/ciência de dados!</p>
        <a className="icons-profile-card" href="https://www.linkedin.com/in/alandgmendes/"><span><FontAwesomeIcon className="icons-profile-card" icon={faLinkedin} /></span></a>
        </div>
        <div className='col-center-perfil'>
          <p>at is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.         
          </p>
        </div>
        <div className='col-misc-perfil'>
        <p>at is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum. 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.         
          </p>
        </div>
        </div>                
      </body>
    </div>
  );
}

export default HomePage;
