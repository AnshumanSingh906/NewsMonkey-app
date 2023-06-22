import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = `8dd21e376f564d5a8d1b1a43ac8a7ed5`;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <br /><br /><br /><br />
      <Navbar />
      <div>
        <LoadingBar color="blue" height={5} progress={progress} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
