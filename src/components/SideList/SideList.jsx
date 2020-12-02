import React, { useEffect, useContext } from 'react';
import { fetchRelatedData } from '../../apis';
import { Store } from '../../store';
import { SideListItem } from '../SideListItem/SideListItem';
import Style from './SideList.module.scss';

export const SideList = () => {
    const { globalState, setGlobalState } = useContext(Store)
    const setRelatedVideo = async (id) => {
        await fetchRelatedData(id).then((response) => {
            setGlobalState({ type: 'SET_RELATED', payload: {related: response.data.items}})
        })
    }
    
    useEffect(() => {
        setRelatedVideo(globalState.selected.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalState.selected])

    return (
        <div className={Style.sidenav}>
            {
                globalState.related ? globalState.related.map((video) => {
                    return (
                        <SideListItem 
                            id={video.id.videoId}
                            key={video.id.videoId}
                            src={video.snippet.thumbnails.medium.url}
                            title={video.snippet.title}
                        />
                    )
                }) : (<span>no data</span>)
            }
        </div>
    )
}
