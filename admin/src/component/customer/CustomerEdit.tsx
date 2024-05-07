import * as React from "react";
import Button from '@mui/material/Button';
import { TopToolbar, ListButton, ShowButton, Edit } from 'react-admin';
import MyForm from './MyForm';


const CustomerEdit = (props) => (
    <Edit {...props}>
        <MyForm />
    </Edit>
);

export default CustomerEdit;