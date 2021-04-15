import logo from './logo.svg';
import './App.css';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


// Configure Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyDGAgesvZAQY81BBKHB-ddegQiblNfj1qw",
  authDomain: "propsheet.firebaseapp.com",
  projectId: "propsheet",
  storageBucket: "propsheet.appspot.com",
  messagingSenderId: "958954615615",
  appId: "1:958954615615:web:675b23574fe49b53bcd98a"
};
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

class SignInScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
      </div>
    );
  }
}


/*
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
*/


class SignIn extends React.Component {

  render(){

    if(this.state.isSignedIn){
      return(
        <SelectContest></SelectContest>
      )
    }      
    
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
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </section>
     </div>
    </div>

    )
  }

    // The component's Local state.
    state = {
      isSignedIn: false // Local signed-in state.
    };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  
}


class SelectContest extends React.Component {
  state = {
    contests: null
  }

  async componentDidMount() {
    const idToken = await firebase.auth().currentUser?.getIdToken()
    const response = await fetch('http://localhost:5000/contests', {
      headers: {
        'Authorization': idToken
      }
    })
    if (response.status === 401) {
      return console.log('unauthorized')
    }
    const contests = await response.json()
    // save it to your components state so you can use it during render
    this.setState({contests: contests})
    console.log(contests)
  }
  render(){
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
                  <span class="icon is-small"><i class="fas fa-football-ball"></i></span>
                  <span>NFL</span>
                </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-baseball-ball"></i></span>
                    <span>MLB</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-basketball-ball"></i></span>
                    <span>NBA</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-hockey-puck"></i></span>
                    <span>NHL</span>
                  </a>
                </li> 
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-golf-ball"></i></span>
                    <span>PGA</span>
                  </a>
                </li> 
              </ul>
            </div>
          </div>
          </section>
          { 
                  this.state.contests && this.state.contests.map(contests => {
                    return (
                      <section class="section">
                        <div class="card">
                          <div class="card-header">
                            <div class="card-header-icon">
                              <span class="icon"><i class="fas fa-football-ball"></i></span>
                            </div>
                            <div class="card-header-title">
                              {contests.ContestName}
                            </div>
                            <div class="card-header-icon is-right">
                            <button class="button is-warning is-rounded">Enter</button>
                            </div>
                          </div>
                          <footer class="card-footer">
                              <a href="#" class="card-footer-item">{contests.Entrants}/{contests.TotalEntries} Entries</a>
                              <a href="#" class="card-footer-item">${contests.EntryFee} Entry</a>
                              <a href="#" class="card-footer-item">${contests.TotalWinnings} Total Winnings</a>
                          </footer>
                          </div>
                      </section> 
                    )
                  })
                }
      </div>
      </div>
    )
   }
}

export default SignIn;
