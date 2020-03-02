import { Component } from "react";
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class about extends React.Component {
    
    render(){
        return(
            <BaseLayout>
              <BasePage>
              <h1>I am About Page from Class Component</h1>
              </BasePage>                
            </BaseLayout>
            
        )
    }
}

export default about;