import React from 'react';
// import { Provider } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import Main from 'react-custom-demo-piyush';
import './app.css';
// import store, { persistor } from './config/store';
// import StorageService from './util/services/StorageService';
// import LogService from './util/services/LogService';
// import theme from './util/globals/theme';
import Root from './pages/Root';
// import AppRoutes from './Routing/AppRoutes';
// import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  // useEffect(() => {
  //   StorageService.setItem('AppLaunched', 'Yes');
  //   LogService.log('AppLaunched');
  // });
  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>
    // <ThemeProvider theme={theme}>
    /* <AppRoutes /> */
    <Root />
    // <div>h</div>
    // <div>hello</div>
    // <Main />
    // </ThemeProvider>
    // </PersistGate>
    // </Provider>
  );
};

export default App;
