import { useContext } from "react";

import {
  ModalStateContext,
  ModalDispatchContext,
} from "@app/components/Modal/ModalContext";

export default function useModal() {
  const { modals } = useContext(ModalStateContext);
  const { openModal, closeModal } = useContext(ModalDispatchContext);
  return { modals, openModal, closeModal };
}
