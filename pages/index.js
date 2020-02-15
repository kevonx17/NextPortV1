import { Component } from "react";
import Header from '../components/shared/Header';


// const index = ()=> {
    
//     return(

//         <h1>I am Index page</h1>
//     );
    
// }

//Class component
//More functionality
//More stuff
//User lifecycle function
class index extends React.Component {
    
    render(){
        return(
            <div>
                <h1>I am Index page</h1>
                <Header/>
            </div>
        )
    }
}

export default index;