import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
createRoot(document.getElementById("root")).render(

<Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <StrictMode>
        <App />
      </StrictMode>
    {/* </PersistGate> */}
  </Provider>
);
