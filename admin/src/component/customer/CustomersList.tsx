import * as React from 'react';
import { List, Datagrid, TextField, ImageField , DeleteButton} from 'react-admin';

const CustomersList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
            <TextField source="nid_no" label='Cmt' />
            <TextField source="address" />
            <TextField source="city" />
            <ImageField source="photo" title="Image" />
            <DeleteButton  mutationMode="pessimistic"/>
        </Datagrid>
    </List>
);

export default CustomersList;