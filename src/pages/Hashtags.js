import React from 'react';
import { Link } from "gatsby"
import './Hashtags.css'
import { FaHashtag } from 'react-icons/fa';

class Hashtags extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div id="hashtags">
                <h3>Elige uno de los siguientes temas que te interese.</h3>
                <h4>Te ayudaremos a encontrar lecturas interesantes sobre ellos.</h4>
                <ul>
                    <Link to="/tags/architecture"><li><FaHashtag /> Architecture</li></Link>
                    <Link to="/tags/technology"><li><FaHashtag /> Technology</li></Link>
                    <Link to="/tags/things"> <li><FaHashtag /> Things</li></Link>
                    <Link to="/tags/ux"><li><FaHashtag /> UX</li> </Link>
                </ul>
            </div>
        )
    }
}

export default Hashtags;