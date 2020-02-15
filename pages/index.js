import { Component } from "react";
import BaseLayout from '../components/layouts/BaseLayout';


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
            <BaseLayout>
                <h1>I am Index page</h1>  
            </BaseLayout>
        )
    }
}

export default index;

//<Header title={'I am a header component'}>
//<h1>I am header subtitle</h1>
//</Header>