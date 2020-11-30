import React from 'react';
import Style from './VideoGrid.module.scss';

export const VideoGrid = ({children}) => {
    return (
        <div className={Style.container}>
          {children}  
        </div>
    )
}