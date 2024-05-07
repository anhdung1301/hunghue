import React from 'react';
import { SimpleForm, TextInput, ImageInput, ImageField, useUnique} from 'react-admin';
const MyForm = (props) => {
    const unique = useUnique();

    return (
        <SimpleForm encType="multipart/form-data" {...props}>
            <TextInput source="name"/>
            <TextInput source="email" label="Email" />
            <TextInput source="phone" />
            <TextInput source="nid_no" label='cmt' />
            <TextInput source="address"/>
            <TextInput source="city"/>
            <ImageInput source="photo" label="Image" accept="image/*">
                <ImageField source="src"/>
            </ImageInput>

        </SimpleForm>
    );
}

export default MyForm;