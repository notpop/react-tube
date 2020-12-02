import React from 'react';
import Youtube from 'react-youtube';
import Style from './VideoPlay.module.scss';

export const VideoPlay = ({id}) => {
    return (
        <div　className={Style.wrap}>
            <Youtube className={Style.video} videoId={id} />
        </div>
    )
}
