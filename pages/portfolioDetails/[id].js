
import { Component } from "react";
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router'

class portfolioDetails extends React.Component {
    /*Getting posts from server*/
    static async getInitialProps(context){
        let post = {}; // initiated outside try catch block
        //Get id from [id].js using query to represent displayed
        //page id.
        const postId = context.query.id

        try{
            const response = await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            post = response.data;
        } catch(err) {
            console.error(err);
        }  
        return {post}; //post:post - Key and value are similar so use only one
    }

    render(){
        //const post = this.props.post
        const {post} = this.props //put post in curly braces because props.post is similar
        //debugger;
        //console.log(this.props);
        return(
            <BaseLayout>
                <h1>{post.title}</h1>
                <h2>{post.body}</h2>
                <p1>{post.id}</p1>
            </BaseLayout>   
        )
    }
}
export default withRouter(portfolioDetails);