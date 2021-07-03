import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

const PostList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='email' />
            <TextField source='password' />
        </Datagrid>
    </List>
}

export default PostList
