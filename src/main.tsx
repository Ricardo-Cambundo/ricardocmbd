import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingScreen from "./pages/loadingScreen.tsx";
// import motherboard from './assets/images/motherboard.svg'
// import ricardo from './assets/images/ricardo2.svg'
// import space from './assets/images/space.svg'
// import chloe from './assets/images/chloe.svg'
// import temple from './assets/images/temple.svg'
// import PreloadImages from "./components/preloadImages.tsx";

//@ts-ignore
// const images = [motherboard, ricardo, space, chloe, temple];


createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingScreen />}>
    <Router>
      <StrictMode>
        {/* <PreloadImages images={images}> */}
          <App />
        {/* </PreloadImages> */}
      </StrictMode>
    </Router>
  </Suspense>
);
