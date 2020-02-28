import { Component } from "react";
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';



class index extends SuperComponent {
    
    static async getInitialProps(){
        //console.log('I am get getInitialProps');
        let userData = {}; // initiated outside try catch block
        try{
            const response = await axios
            .get('https://jsonplaceholder.typicode.com/todos/1');
            //console.log(response.data);
            userData = response.data;
        } catch(err) {
            console.error(err);
        }
        
        //     .then(
        //    (response) => console.log(response.data))
        //    .catch(err => console.error(err)) 
        

        return {initialData: [1,2,3,4], userData};
    }


    constructor(props) {
        super(props);

        this.state = {
            title: 'I am Index Page'
        }
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
        //const initialData = this.props.initialData;
        const { userData, initialData } = this.props;

        
        return(
            <BaseLayout>
                <h1>I am Index page</h1>  
                <h2>{title}</h2>
                <h2>{userData.title}</h2>
                <button onClick={() => this.updateTitle()}>Change Title</button>
            </BaseLayout>
        )
    }
}

export default index;

//<Header title={'I am a header component'}>
//<h1>I am header subtitle</h1>
//</Header>