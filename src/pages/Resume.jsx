import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

class Resume extends React.Component {

   render() {
     return (
       <div>
         <Navigationbar />
         I am a Resume
         <Dashboard/>
         <Footer/>
       </div>
     );
   }
 };

 export default Resume;