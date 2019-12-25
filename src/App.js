import React from 'react';
import './App.css';
import HomePage from './components/Page/HomePage'
import ShopPage from './components/Page/ShopPage'
import {Switch,Route} from 'react-router-dom'
import Header from './components/elements/Header'
import  SinInSignUp from './components/Page/SignInSignUpPage'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
class App extends React.Component {


  unsubscribeFromAuth = null;
  componentDidMount() {
    //this make sure we know who sign in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
      //store data into our app, we not only change our state during user loogin or logout, we also change our state when there is a change in database
        userRef.onSnapshot(snapShot => {
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
      
          //console.log(this.state);
        });
      } else{
        this.setState({ currentUser: userAuth });
      }

     
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SinInSignUp} />
        </Switch>
      </div>
    );
  }
}

//dispatch: whatever you pass to me, that gonnna be an action object that pass to every reducer
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
//null because we do not need any state from reducer
export default connect(
  null,
  mapDispatchToProps
)(App);
