import React from 'react';
import Directory from '../elements/Directory';
import { HomePageContainer} from '../styles/homepage.styles'
//only Homepage have history props passed in by route
const HomePage = () => (
  <HomePageContainer>
  <Directory/>
  </HomePageContainer>   
);


export default HomePage;