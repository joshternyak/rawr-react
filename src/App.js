import React, { useState } from 'react';
import './App.scss';
import ComponentDetails from './ComponentDetails';
import { componentsList } from './componentsList';
import Grid from './ComponentsDirectory/Grid';
import { ThemeContext } from './contexts/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  const navbarLinkStyle = { color: dark ? '#fff' : 'black' };

  return (
    <Router>
      <div className="App" style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}>
        <div className="App__navbar">
          <ul className="App__navbar-list">
            <li className="App__navbar-list-item">
              <Link
                style={navbarLinkStyle}
                exact to='/'
                className="App__navbar-list-item-link"
              >
                Home
              </Link>
            </li>
            <li className="App__navbar-list-item">
              <Link
                style={navbarLinkStyle}
                to='/about'
                className="App__navbar-list-item-link"
              >
                About
              </Link>
            </li>
            <li className="App__navbar-list-item">
              <Link
                style={navbarLinkStyle}
                to='/contact'
                className="App__navbar-list-item-link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button className="App__toggle-theme-btn" onClick={toggle}>
            {!dark ? '🔦' : '💡'}
          </button>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Grid justifyContent={'space-between'} alignItems={'start'}>
      <ComponentTabsList
        title={' < Rawr /> React Components'}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      {componentsList.map((componentItem, index) => {
        const isActiveTab = activeTab === index;
        return isActiveTab &&
          <div key={index}>
            <ComponentDetails
              description={componentItem.description}
              name={componentItem.name}
              whenToUse={componentItem.whenToUse}
              howToUse={componentItem.howToUse}
              examples={componentItem.examples}
            />
          </div>
          ;
      })}
    </Grid>
  );
}

function ComponentTabsList({ setActiveTab, activeTab, title }) {
  const { dark } = React.useContext(ThemeContext);

  return (
    <div className="ComponentTabsList">
      <h3 className="ComponentTabsList__title">{title}</h3>
      {componentsList.map((componentItem, index) => {
        const isActive = activeTab === index;
        return (
          <div
            className={isActive ? 'Component' : 'Component Component--inactive'}
            style={{ color: dark && isActive ? 'black' : 'inherit' }}
            onClick={() => setActiveTab(index)}
            key={index}
          >
            {componentItem.name}
          </div>
        );
      })}
    </div>
  );
}

function About() {
  return (
    <div className="App__info-page">
      <h2>About Us</h2>
      <p>Hey! I'm <a href="https://joshternyak.com">Josh
        Ternyak</a>, a front-end web developer. I built this react component
        library to teach myself React.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="App__info-page">
      <h2>Contact</h2>
      <p><p>You can contact me on my <a
        href="https://joshternyak.com/contact">personal website</a> or <a
        href="mailto:joshternyak@gmail.com">email Josh Ternyak</a>.</p>
      </p>
    </div>
  );
}

export default App;
