import { createContext } from "react";

import {
  IModalStateContext,
  IModalDispatchContext,
} from "@app/components/Modal/types";

export const ModalStateContext = createContext<IModalStateContext>({
  modals: [],
});
export const ModalDispatchContext = createContext<IModalDispatchContext>({
  openModal() {
    return 0;
  },
  closeModal() {},
  deleteModal() {},
  deleteAllModal() {},
});
