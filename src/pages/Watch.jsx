import React, { useEffect, useContext } from 'react';
import { Layout } from '../components/Layout/Layout';
import { SideList } from '../components/SideList/SideList';
import { VideoDetail } from '../components/VideoDetail/VideoDetail';
import { Store } from '../store';
import { fetchSelectedData, fetchRelatedData } from '../apis';
import { useLocation } from 'react-router-dom';

export const Watch = () => {
    const { globalState, setGlobalState } = useContext(Store)
    const location = useLocation()
    const setVideos = async () => {
        const search_params = new URLSearchParams(location.search)
        const id = search_params.get('v')
        if (id) {
            const [ selected, related ] = await Promise.all([fetchSelectedData(id), fetchRelatedData(id)])
            setGlobalState({ type: 'SET_SELECTED', payload: {selected: selected.data.items.shift()}})
            setGlobalState({ type: 'SET_RELATED', payload: {related: related.data.items}})
        }
    }

    useEffect(() => {
        setVideos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search])

    return (
        <Layout>
            <VideoDetail />
            <SideList />
        </Layout>
    )
}
