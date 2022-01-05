import React, {useState} from 'react'
import {Link} from  "react-router-dom"
import { useStyle } from '@magento/venia-ui/lib/classify';
import Icon from '@magento/venia-ui/lib/components/Icon';
import defaultClasses from "./TopBar.css"
import {X} from "react-feather"; 


const TopBar = () => {
    const [bar, setBar] = useState(true)

    const classes = useStyle(defaultClasses);

    const removeBar = () => {
        setBar(false)
    }

    const closeIcon = <Icon size={24} src={X} />

    return (
        <>
        {!bar && (
            ""
        )}
        {bar && (<div className={classes.barClass}>
            <div className={classes.textClass}>
                <p className={classes.barText}> Ett viktigt meddelande!</p>
                <Link to="/" className={classes.linkText}>Läs mer</Link>
            </div>
            <div className={classes.buttonClass}>    
                <button className={classes.barButton} type="button" onClick={removeBar} >{closeIcon} </button>
            </div>
            
        </div>)}
       

        </>
    )
}

export default TopBar
