import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import {Provider} from "react-redux";
import Store from "./src/samples/redux/store";
import {PersistGate} from "redux-persist/integration/react";


const App = () => {
    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <Provider store={Store().store}>
                    <PersistGate loading={null} persistor={Store().persist}>
                        {/*<AppContainer/>*/}
                    </PersistGate>
                </Provider>
            </SafeAreaView>
        </>
    );
};

export default App;
