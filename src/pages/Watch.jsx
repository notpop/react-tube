import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { VideoDetail } from '../components/VideoDetail/VideoDetail';
import { SideList } from '../components/SideList/SideList';

export const Watch = () => {
    return (
        <Layout>
            <VideoDetail />
            <SideList />
        </Layout>
    )
}
