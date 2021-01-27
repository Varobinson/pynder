import React from "react"
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from "@material-ui/icons/Forum"
import { FaPaw } from "react-icons/fa";


export default function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon 
                fontSize="large"  
                className= "header_icon"/>
            </IconButton>
            <FaPaw 
                className= "header_logo" 
                
                />
            
            <IconButton>
            <ForumIcon 
                fontSize="large"  
                className= "header_icon"/>
            </IconButton>
        </div>
    )
}
