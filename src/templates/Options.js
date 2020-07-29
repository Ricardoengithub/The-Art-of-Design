import React from 'react';
import { Link } from 'gatsby';
import { FaHome, FaTags, FaArrowUp, FaPlus, FaMinus } from 'react-icons/fa';
import './Options.css';

class Options extends React.Component{
    constructor(){
        super()
        this.state = {
            contador: 0,
            display: "hide"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault()
        this.setState({
            contador: this.state.contador + 1,
            display: this.state.contador % 2 === 0 ? "active": "hide"
        })
        
    }

    render(){
        return(
			<div id="options">
                {this.state.contador % 2 === 0 
                ?<FaPlus id="button-plus" onClick={e => this.handleClick(e)}/>
                :<FaMinus id="button-minus" onClick={e => this.handleClick(e)}/>}
				
                <Link to="#title" id="button-up" className={this.state.display}><FaArrowUp/></Link>
				<Link to="/" id="button-home" className={this.state.display}><FaHome/></Link>
				<Link to="/tags" id="button-tags" className={this.state.display}><FaTags/></Link>
                
			</div>
        )
    }
}

export default Options;