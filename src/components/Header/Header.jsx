import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Style from "./Header.module.scss"

export const Header = () => {
    return (
        <div className={Style.header}>
            <div className={Style.item}>
                <Link to="/">react-tube</Link>
            </div>
            <div className={Style.item}>
                <form>
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        </div>
    )
}
