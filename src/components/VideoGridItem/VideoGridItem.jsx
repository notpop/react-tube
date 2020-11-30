import React from 'react';
import Style from './VideoGridItem.module.scss';
import { Link } from 'react-router-dom';

export const VideoGridItem = ({id, src, title}) => {
    return (
        <Link to={{pathname: 'watch', search: `?v=${id}` }} className={Style.item}>
            <div>
                <img src={src} alt={title} />
                <span>{title}</span>
            </div>
        </Link>
    )
}