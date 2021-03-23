import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App box">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ross <code>src/App.js</code> and save to reload.
        </p>
        <button class="button is-warning">
          Sign In
        </button>
        <SignedIn/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function SignedIn(){
  return(

    <div class="container is-fluid">
      <div class="notification is-primary">
        <section class="hero is-info">
        <div class="hero-body">
          <p class="title">
          Prop Sheet
          </p>
        </div>
        </section>
        <section class="section">
          <h1 class="title">Let's Get Started</h1>
        </section>
        <section class="section is-medium">
          <h1 class="title">Medium section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
          </h2>
      </section>
     </div>
    </div>

    )
}

function SelectContest(){
  return(

    <div class="container is-fluid">
      <div class="notification is-primary">
        <section class="hero is-info">
        <div class="hero-body">
          <p class="title">
          Prop Sheet
          </p>
          <p
            class="title">
            Select a contest
          </p>
          <div class="tabs is-toggle is-toggle-rounded has-text-black is-fullwidth tabs-link-active-border-bottom-color">
          
            <ul>
              <li class="is-active">
              <a>
                <span class="icon is-small"><i class="football-ball"></i></span>
                <span>NFL</span>
              </a>
              </li>
              <li>
                <a>
                  <span class="icon is-small"><i class="baseball-ball"></i></span>
                  <span>MLB</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon is-small"><i class="basket-ball"></i></span>
                  <span>NBA</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="icon is-small"><i class="hockey-puck"></i></span>
                  <span>NHL</span>
                </a>
              </li> 
              <li>
                <a>
                  <span class="icon is-small"><i class="golf-ball"></i></span>
                  <span>PGA</span>
                </a>
              </li> 
            </ul>
          </div>
        </div>
        </section>
        <section class="section">
          <div class="card">
            <div class="card-header">
              <div class="card-header-icon">
                <span class="icon"><i class="football-ball"></i></span>
              </div>
              <div class="card-header-title">
                Super Bowl Sunday!
              </div>
              <div class="card-header-icon is-right">
              <button class="button is-warning is-rounded">Enter</button>
              </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">233/500 Entries</a>
                <a href="#" class="card-footer-item">$30 Entry</a>
                <a href="#" class="card-footer-item">$12,000 Total Winnings</a>
            </footer>
            </div>
        </section>
        <section class="section">
          <div class="card">
            <div class="card-header">
              <div class="card-header-icon">
                <span class="icon"><i class="football-ball"></i></span>
              </div>
              <div class="card-header-title">
                Hardcore Super Bowl!
              </div>
              <div class="card-header-icon is-right">
              <button class="button is-warning is-rounded">Enter</button>
              </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">233/250 Entries</a>
                <a href="#" class="card-footer-item">$100 Entry</a>
                <a href="#" class="card-footer-item">$20,000 Total Winnings</a>
            </footer>
          </div>
        </section>
        <section class="section">
          <div class="card">
            <div class="card-header">
              <div class="card-header-icon">
                <span class="icon"><i class="golf-ball"></i></span>
              </div>
              <div class="card-header-title">
                Masters Challenge!
              </div>
              <div class="card-header-icon is-right">
              <button class="button is-warning is-rounded">Enter</button>
              </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">233/500 Entries</a>
                <a href="#" class="card-footer-item">$30 Entry</a>
                <a href="#" class="card-footer-item">$12,000 Total Winnings</a>
            </footer>
          </div>
      </section>
     </div>
    </div>

    )
}

export default SignedIn;
