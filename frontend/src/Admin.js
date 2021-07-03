import React from 'react';
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './PostList';

function AdminHome() {
    return <Admin dataProvider={restProvider('"http://localhost:8080/api/')}>
        <Resource name='posts' list={PostList} />
    </Admin>
}

export default AdminHome
