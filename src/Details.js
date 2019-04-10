import React from 'react';
import { Link } from 'react-router-dom';

export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : "Hello, this will be the details page for each Movie & TV show :)"

        }
    }
    componentDidMount(){
        setTimeout(() => {
           this.setState({
               message: 'Coming soon! :)'
           }) 
        }, 3000);
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        );
    }
}

