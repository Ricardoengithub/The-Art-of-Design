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
                    <li><Link to="/tags/architecture"><FaHashtag /> Architecture</Link></li>
                    <li><Link to="/tags/technology"><FaHashtag /> Technology</Link></li>
                    <li><Link to="/tags/tools"> <FaHashtag /> Tools</Link></li>
                    <li><Link to="/tags/ux"><FaHashtag /> UX</Link></li>                    
                </ul>
            </div>
        )
    }
}

export default Hashtags;