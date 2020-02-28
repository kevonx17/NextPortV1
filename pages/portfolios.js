
import { Component } from "react";
import Link from "next/link";
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';


class portfolios extends React.Component {
    
    /*Getting posts from server*/
    static async getInitialProps(){
        //console.log('I am get getInitialProps');
        let posts = []; // initiated outside try catch block
        try{
            const response = await axios
            .get('https://jsonplaceholder.typicode.com/posts');
            //console.log(response.data);
            posts = response.data;
        } catch(err) {
            console.error(err);
        }  

        return {posts: posts.splice(0, 10)}; // get first 10 posts
    }

    /*
    Render post on screen with link to details page
    */
    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <li>
                {/* passing data via a query string parameter (a query param). 
                In our case, it's the title query param. */}
                <Link as={`/portfolioDetails/${post.id}`} href={`/portfolioDetails?title=${post.title}`}>
                <a style={{'fontSize': '20px'}}>{post.title}</a>
                </Link>
                </li>
            )
        })
    }

    render(){
        const { posts } = this.props;
        return(
            
            <BaseLayout>
                <h1>I am Portfolios page</h1>
                <ul>
                   {this.renderPosts(posts)} 
                </ul>
            </BaseLayout>
        )
    }
}

export default portfolios;