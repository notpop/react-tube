import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Style from "./Header.module.scss";
import { Store } from '../../store';

export const Header = () => {
    const [term, setTerm] = useState('')
    const history = useHistory()
    const { globalState, setGlobalState } = useContext(Store)
    const handleSubmit = (event) => {
        event.preventDefault()
        setGlobalState({ type: 'SET_TERM', payload: { term }})
        history.push(`/search?query=${term}`)
    }
    
    useEffect(() => {
        setTerm(globalState.term)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={Style.header}>
            <div className={Style.item}>
                <Link to="/">react-tube</Link>
            </div>
            <div className={Style.item}>
                <form onSubmit={ handleSubmit }>
                    <input type="text" placeholder="Search..." onChange={(event) => setTerm(event.target.value)} value={term} />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        </div>
    )
}
