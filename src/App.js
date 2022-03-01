import React, {Component} from 'react'
import "./App.css"
import head from '../src/images/head3.png'
import doguinho from '../src/images/doguinho.png'
import babyCat from '../src/images/catzin.png'
import poodle from '../src/images/poodle.png'
import buldogue from '../src/images/buldogue.png'
import york from '../src/images/york.png'
import pug from '../src/images/pug.png'
import pinscher from '../src/images/pin2.png'
import persa from '../src/images/per2.png'
import siames from '../src/images/siames.png'
import ragdoll from '../src/images/ragdoll.png'
import russo from '../src/images/russo.png'
import somali from '../src/images/somali.png'

class Pet extends Component {

state = {
  dogs: [
  {
    nome: "Luna",
    raça: "Poodle",
    idade: "2 anos",
    figura: <img src={poodle} />
  },
  {
    nome: "Duque",
    raça: "Buldogue",
    idade: "5 anos",
    figura: <img src={buldogue} />
  },
  {
    nome: "Pérola",
    raça: "Yorkshire",
    idade: "1 ano",
    figura: <img src={york} />
  },
  {
    nome: "Thor",
    raça: "Pug",
    idade: "1 ano",
    figura: <img src={pug} />
  },
  {
    nome: "Rex",
    raça: "Pinscher",
    idade: "3 anos",
    figura: <img src={pinscher} />
  }
  ],
  cats: [
    {
      nome: "Princesa",
      raça: "Persa",
      idade: "4 anos",
      figura: <img src={persa} />
    },
    {
      nome: "Félix",
      raça: "Siamês",
      idade: "6 anos",
      figura: <img src={siames} />
    },
    {
      nome: "Nina",
      raça: "Ragdoll",
      idade: "2 anos",
      figura: <img src={ragdoll} />
    },
    {
      nome: "Chris",
      raça: "Azul russo",
      idade: "3 anos",
      figura: <img src={russo} />
    },
    {
      nome: "Bel",
      raça: "Somali",
      idade: "4 anos",
      figura: <img src={somali} />
    }
  ],
  dogList: "",
  catList: ""
}

lis1 = () => {
  if (this.state.dogList == '') {
    this.setState ({
      dogList: this.state.dogs.map((item) => (
        <ul>
          <li><b>Nome:</b> {item.nome}</li>
          <li><b>Raça:</b> {item.raça}</li>
          <li><b>Idade:</b> {item.idade}</li>
          <li>{item.figura}</li>
          <button>ADOTAR</button>
        </ul>        
      ))
    })
  } else {
    this.setState ({
      dogList: ''
    })
  }
}

lis2 = () => {
  if (this.state.catList == '') {
    this.setState ({
      catList: this.state.cats.map((item) => (
        <ul>
          <li><b>Nome:</b> {item.nome}</li>
          <li><b>Raça:</b> {item.raça}</li>
          <li><b>Idade:</b> {item.idade}</li>
          <li>{item.figura}</li>
          <button>ADOTAR</button>
        </ul>
      ))
    })
  } else {
    this.setState ({
      catList: ''
    })
  }
 }

  render(){
    return(
      <div className='box'>
        <div className='box1'>
          <h1>Vai na Web - PetLove Adoption</h1> 
          <img src={head} alt="header"/>   
          <h2>Venha conhecer seu mais novo melhor amigo! O programa <i>Vai Na Web</i>, em parceria com seus alunos, está buscando um novo lar para diversos cães e gatos, e temos certeza que você não irá se arrepender de agregar um de nossos pets em sua família! </h2>     
          <h2>Na seção a seguir, temos diversas opções de pets que certamente irão agradar à todos os gostos! Clique no seu pet preferido, e verifique todas as informações. Ajude-nos a melhorar a vida destes nossos amiguinhos tão especiais!</h2>
        </div> 
        <div className='box2'>
          <img className='dog1' src={doguinho} alt="baby dog" onClick={this.lis1}/>
          <p className='dog2'>{this.state.dogList}</p>  
        </div>
        <div className='box3'>
          <img className='cat1' src={babyCat} alt="baby cat" onClick={this.lis2}/> 
          <p className='cat2'>{this.state.catList}</p>    
        </div>
        <div className='box4'>
          <h4>Mais informações em:</h4>
          <p>https://www.vainaweb.com.br/</p>
          <p><b>Email:</b> ola@vainaweb.com.br</p>
          <p><b>Telefone:</b> (21) 98244-8898</p>
          <p>Rua Gomes Lopes, 12 - Associação de Moradores do Morro dos Prazeres</p>
          <p>Santa Teresa - Rio de Janeiro. CEP: 20241-266</p>
        </div>
        <div className='social'>
          <img src="https://img.icons8.com/ios-glyphs/30/26e07f/facebook.png" alt="icone do facebook" />
          <img src="https://img.icons8.com/glyph-neue/64/26e07f/instagram-new.png" alt="icone do instagram" />
          <img src="https://img.icons8.com/ios-glyphs/30/26e07f/medium-monogram.png" alt="icone monogram" />
        </div>
      </div>
    )
  }
}

export default Pet