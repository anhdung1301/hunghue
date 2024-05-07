import {
  Admin,
  Resource,
    nanoLightTheme,
  fetchUtils,
  useNotify
} from "react-admin";
import dataProviderCustomer from './dataProviderCustomer';
import CustomLogin from './resources/CustomLogin';
import Dashboard from './resources/Dashboard';
import authProvider from "./authProvider";
import CustomersList from "./component/customer/CustomersList";
import CustomerCreate from "./component/customer/CustomerCreate";
import CustomerEdit from "./component/customer/CustomerEdit";

export const App = () => {

  const notify = useNotify();
  const dataProvider = dataProviderCustomer(notify);
  return (
    <Admin
        dataProvider={dataProvider}
        dashboard={Dashboard}
        loginPage={CustomLogin}
        authProvider={authProvider}
        theme={nanoLightTheme}
    >
         <Resource name="customer" create={CustomerCreate} edit={CustomerEdit} list={CustomersList} />
    </Admin>
  );
}
