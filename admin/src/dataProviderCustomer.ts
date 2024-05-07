import axios from 'axios';
const apiUrl = 'http://localhost:8000/api';
const handleUnauthorizedAccess = () => {
    window.location.href = '/login'; // Redirect to the login page
};

const dataProviderCustomer = (notify) => {
    return {
        getList: async (resource, params) => {
            const {page, perPage} = params.pagination;
            const response = await axios.get(`${apiUrl}/${resource}`, {
                params: {
                    perPage,
                    page
                },
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }).catch(
                error => {
                    if (error.response && error.response.status === 401) {
                        handleUnauthorizedAccess(); // Redirect to login page
                    }
                    throw error;
                }
            );

            return response.data;
        },

        getOne: async (resource, params) => {
            const response = await axios.get(`${apiUrl}/${resource}/${params.id}`);
            return response.data;
        },

        create: async (resource, params) => {

            const formData = new FormData();
            console.log(params.data);
            formData.append('photo', params.data.photo.rawFile);
            formData.append('data', params.data);
            const response = await axios.post(`${apiUrl}/${resource}`,
                formData,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                })
                .catch(error => {
                    const validationErrors = error.response.data.errors;
                    if (validationErrors) {
                        Object.values(validationErrors).forEach(error => {
                            throw new Error(error);
                            }
                        )
                    }
                });

            return response.data;
        },

        update: async (resource, params) => {
            const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, params.data);
            return response.data;
        },

        delete: async (resource, params) => {
            const response = await axios.delete(`${apiUrl}/${resource}/${params.id}`);
            return response.data;
        },
    }
};

export default dataProviderCustomer;