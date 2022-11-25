import React, { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Fragment>
      <h1>World</h1>
    </Fragment>
  </StrictMode>
);
