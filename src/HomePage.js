import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ChatBot from 'react-simple-chatbot';
import profilePicture from './images/profile.jpeg'
import React, { useState } from 'react';
import './HomePage.css'

function HomePage() {
  const [urlRequest, setUrlRequest] = useState("");
  const [urlResult, setUrlResult] = useState("");
  const [clientId, setClientId] = useState("");
  var myHeaders = new Headers();
    myHeaders.append("ClientID", clientId);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    
  };
  const inputUrlChange = (e) =>{
    setUrlRequest(e.target.value);
  }
  const inputClientIdChange = (e) =>{
    setClientId(e.target.value);
  }
  const infoUrl = "https://api-v2.seletobank.com.br/contadigital/info";
  const extratoUrl = "https://api-v2.seletobank.com.br/contadigital/recebimentos/transacoes/extrato";
  const transacaoUrl = "https://api-v2.seletobank.com.br/contadigital/transacoes/info/128c1bdb592a4a73a0450d001184ffde";
  const runRequest = () =>{
    fetch(urlRequest, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
        const obj = JSON.parse(result);
        const builder = Object.entries(obj);
        const structure = builder.map(item =><p key={item[0]+item[1]}><span>{item[0] + ": => "+ item[1]}</span></p>);
        setUrlResult(structure);
      })
    .catch(error => console.log('error', error));

  }
  
  return (
    <div className="App" >
      <body> 
        <div >
          <div>
            <p>Info url: </p>
            <p>{infoUrl}</p>
          </div>
          <br />
          <div>
            <p>Extrato url: </p>
            <p>{extratoUrl}</p>
          </div>
          <div>
            <p>Transação url: </p>
            <p>{transacaoUrl}</p>
          </div>
          <div>
            <p>Digite clientId: </p>
            <input value={clientId} id="urlInput" onChange={e => inputClientIdChange(e)}/>        
          </div>
          <div>
            <p>Digite url da request:</p>
            <input value={urlRequest} id="urlInput" onChange={e => inputUrlChange(e)}/>
          </div>
        
        
        <button onClick={runRequest}>Executar</button>
        <div>{urlResult}</div>
          
          {/*<div className='col-card-perfil'>
            <img className="profile-picture" src={profilePicture} alt="Alandouglas"/>
            <p className="itens-profile-card">Alandouglas Godinho Mendes</p>
            <p className="itens-profile-card">Desenvolvedor de software</p>
            <p className="itens-profile-card">Estudante de física</p>
            <p className="itens-profile-card">Apaixonado por análise/ciência de dados!</p>
            <a className="icons-profile-card" href="https://www.linkedin.com/in/alandgmendes/" target="_blank" rel="noreferrer"><span><FontAwesomeIcon className="icons-profile-card" icon={faLinkedin} /></span></a>
            <ChatBot
              steps={[
                {
                  id: '1',
                  message: 'Insira seu CEP:',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  validator: (value) => {
                    if (value !== 38750000) {
                      return 'Fora de Presidente Olegário!';
                    }
                    return true;
                  },
                  trigger: '1',
                },
              ]}
            />
            </div>*/}
          {/*<div>
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
            </p>
          </div>
            </div>*/}
        </div>                
      </body>
    </div>
  );
}

export default HomePage;
