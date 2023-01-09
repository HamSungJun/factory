import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@app/App";
import ModalPortal from "@app/components/Modal/ModalPortal";
import ModalProvider from "@app/components/Modal/ModalProvider";
import ModalRenderer from "@app/components/Modal/ModalRenderer";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ModalProvider>
      <App />
      <ModalPortal>
        <ModalRenderer />
      </ModalPortal>
    </ModalProvider>
  </StrictMode>
);
