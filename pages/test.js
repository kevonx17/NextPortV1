
import { Component } from "react";
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router'

class Test extends React.Component {
    /*Getting posts from server*/
    static async getInitialProps({query}){
       const testId = query.id
        return {testId};
    }

    render(){
        const {testId} = this.props //put post in curly braces because props.post is similar
        //debugger;
        //console.log(this.props);
        return(
            <BaseLayout>
                <h1>I am test page id = {testId}</h1>
            </BaseLayout>   
        )
    }
}
export default withRouter(Test);