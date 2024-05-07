import React from 'react';
import { Create } from 'react-admin';
import MyForm from './MyForm';

const CustomerCreate = (props) => (
    <Create {...props}>
        <MyForm />
    </Create>
);
export default CustomerCreate;
