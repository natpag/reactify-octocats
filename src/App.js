import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Cat from './components/Cat'
import Header from './components/Header'

import GithubLogo from './images/GithubLogo.jpg'
import adventureCat from './images/adventure-cat.png'
import chelloCat from './images/chellocat.jpg'
import luchadorCat from './images/luchadortocat.png'
import megaCat from './images/megacat.jpg'
import megaCat2 from './images/megacat-2.png'
import linkToCat from './images/linktocat.jpg'
import octobiwan from './images/octobiwan.jpg'
import plumber from './images/plumber.jpg'
import octocatDeLosMuertos from './images/octocat-de-los-muertos.jpg'
import original from './images/original.png'
import xToCat from './images/xtocat.jpg'
import waldoCat from './images/waldocat.png'

class App extends React.Component {
  render() {
    return (
      <>
        <header class="header">
          <nav>
            <ul>
              <li>
                <img src={GithubLogo} alt="GithubLogo" />
              </li>
              <li class="octodex">Octodex</li>
              <Header
                headerClass="home"
                href={'https://octodex.github.com/'}
                headerTitle={'Home'}
              />
              <Header
                headerClass="faq"
                href={'https://octodex.github.com/faq/'}
                headerTitle={'FAQ'}
              />
              <Header
                headerClass="twitter"
                href={'https://twitter.com/githubdesign'}
                headerTitle={'Follow us onTwitter'}
              />
            </ul>
          </nav>
        </header>
        <main>
          <section class="images">
            <ul>
              <Cat catName="Adventure Cat" imageUrl={adventureCat} />
              <Cat catName="Chello Cat" imageUrl={chelloCat} />
              <Cat catName="Luchador Cat" imageUrl={luchadorCat} />
              <Cat catName="Megacat" imageUrl={megaCat} />
              <Cat catName="Megacat v2" imageUrl={megaCat2} />
              <Cat catName="Linktocat" imageUrl={linkToCat} />
              <Cat catName="Octobiwan" imageUrl={octobiwan} />
              <Cat
                catName="Octocat De Los Muertos"
                imageUrl={octocatDeLosMuertos}
              />
              <Cat catName="Plumber" imageUrl={plumber} />
              <Cat catName="Original" imageUrl={original} />
              <Cat catName="Waldo Cat" imageUrl={waldoCat} />
              <Cat catName="X-tocat" imageUrl={xToCat} />
            </ul>
          </section>
        </main>
      </>
    )
  }
}

export default App
