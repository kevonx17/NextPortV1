import { Component } from "react";
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';



class index extends SuperComponent {
    
    constructor(props) {
        super(props);

        this.state = {
            title: 'I am Index Page'
        }

        console.log('constructor');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }
    
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

updateTitle(){
    debugger;
    //console.log("I am update title")
    this.setState({title: 'I am updated index page'});
}

    render(){
        //const title = this.state.title;
        const { title } = this.state;
        
        
        return(
            <BaseLayout>
                <h1>I am Index page</h1>  
                <h2>{this.state.title}</h2>
                <button onClick={() => this.updateTitle()}>Change Title</button>
            </BaseLayout>
        )
    }
}

export default index;

//<Header title={'I am a header component'}>
//<h1>I am header subtitle</h1>
//</Header>