import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import ls from 'local-storage';
import './App.css';
import CodeFox from './components/CodeFox';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import PocketGP from './components/PocketGP';
import HiveNews from './components/HiveNews';
import Portfolio from './components/Portfolio';

// image imports
import lightThemeIcon from './images/light.png';
import lightGithubIcon from './images/github-logo-light.png';
import lightLinkedInIcon from './images/linkedin-logo-light.png';
import darkThemeIcon from './images/dark.png';
import darkGithubIcon from './images/github-logo-dark.png';
import darkLinkedInIcon from './images/linkedin-logo-dark.png';

class App extends Component {
  state = {
    activePage: ls.get('activePage') || 'CodeFox',
    theme: ls.get('theme') || 'light'
  }

  render() {
    const { activePage, theme } = this.state;
    return (
      <div className={`bg-${theme}`}>
        <nav>
          <header className={`header-${theme} header`}>
          
          {activePage === 'CodeFox'
          ? <Link to="/" className={`active active-${theme} codeFox`}>CodeFox</Link>
          : <span className={`hover hover-${theme}`}><Link to="/" className={`headerLink headerLink-${theme} codeFox`} onClick={() => this.togglePage('CodeFox')}>CodeFox</Link></span>}

          {activePage === 'Projects'
          ? <Link to="/projects" className={`active active-${theme} right`}>Projects</Link>
          : <span className={`hover hover-${theme}`}><Link to="/projects" className={`headerLink headerLink-${theme} right link-${theme}`} onClick={() => this.togglePage('Projects')}>Projects</Link></span>}

          {activePage === 'AboutMe'
          ? <Link to="/about-me" className={`active active-${theme} right`}>About Me</Link>
          : <span className={`hover hover-${theme}`}><Link to="/about-me" className={`headerLink headerLink-${theme} right link-${theme}`} onClick={() => this.togglePage('AboutMe')}>About Me</Link></span>}

          </header>
          <Router tabIndex="">
            <CodeFox
              path="/"
              activePage={activePage}
              togglePage={this.togglePage}
              theme={theme}
              default
            />
            <AboutMe path="/about-me" theme={theme} />
            <Projects path="/projects" theme={theme} />
            
            <PocketGP path="/projects/pocketgp" theme={theme} />
            <HiveNews path="/projects/hivenews" theme={theme} />
            <Portfolio path="/projects/portfolio" theme={theme} />
          </Router>

        <footer className={`footer footer-${theme}`}>

          <button className="theme-button" onClick={() => this.toggleTheme(theme)}>
            <img className={`theme-icon theme-icon-${theme}`} src={theme === "light" ? lightThemeIcon : darkThemeIcon} alt={`${theme} mode icon`} height="29px" width="29px" />
          </button>

          <a href="https://github.com/theCodeFox" target="_blank" rel="noopener noreferrer">
            <img className="footerImages" src={theme === "light" ? lightGithubIcon : darkGithubIcon} alt="GitHub" height="30px" width="30px" />
          </a>
          <a href="https://www.linkedin.com/in/kay-vose-codefox/" target="_blank" rel="noopener noreferrer">
          <img className="footerImages" src={theme === "light" ? lightLinkedInIcon : darkLinkedInIcon} alt="LinkedIn" height="30px" width="30px" />
          </a>

        </footer>

        </nav>

      </div>
    );
  }

  toggleTheme = (theme) => {
    if (theme === 'light') {
      this.setState({ theme: 'dark' })
      ls.set('theme', 'dark')
    } else {
      this.setState({ theme: 'light' })
      ls.set('theme', 'light')
    }
  }

  togglePage = (page) => {
    const { activePage } = this.state;
    if (activePage !== page) {
      this.setState({ activePage: page })
      ls.set('activePage', page)
    }
  }
}

export default App;
