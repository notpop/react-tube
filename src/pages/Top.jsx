import React, { useContext, useEffect } from 'react';
import { fetchPopularData } from '../apis';
import { Layout } from '../components/Layout/Layout';
import { Store } from '../store';
import { VideoGrid } from '../components/VideoGrid/VideoGrid.jsx';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem.jsx';

export const Top = () => {
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchPopularData().then((responce) => {
            setGlobalState({type: 'SET_POPULAR', payload: {popular: responce.data.items}})
        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <VideoGrid>
                {
                    globalState.popular && globalState.popular.map((popular) => {
                        return (
                            <VideoGridItem 
                                id={popular.id}
                                key={popular.id}
                                src={popular.snippet.thumbnails.medium.url}
                                title={popular.snippet.title}
                            />
                        )
                    })
                }
            </VideoGrid>
        </Layout>
    )
}
