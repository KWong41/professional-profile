import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Dashboard from '../components/Navigationbar';
import Footer from '../components/Footer';

class LandingPage extends React.Component {

   render() {
     return (
       <div>
         <Navigationbar />
         I am a Landing Page
       </div>
     );
   }
 };

 export default LandingPage;