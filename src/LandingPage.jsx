import React from 'react';
import Navigationbar from './Navigationbar';

class LandingPage extends React.Component {
   constructor(props) {
     super(props);
   }
   render() {
     return (
       <div>
         <Navigationbar />
       </div>
     );
   }
 };

 export default LandingPage;