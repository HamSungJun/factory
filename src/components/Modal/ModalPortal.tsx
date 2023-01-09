import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const MODAL_PORTAL_ID = "modal-portal";

export default function ModalPortal({ children }: PropsWithChildren<{}>) {
  return createPortal(
    children,
    document.getElementById(MODAL_PORTAL_ID) as HTMLElement
  );
}
