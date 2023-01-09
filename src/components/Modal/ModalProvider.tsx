import { PropsWithChildren, useMemo, useState } from "react";

import {
  ModalStateContext,
  ModalDispatchContext,
  IModalDispatchContext,
  IModalStateContext,
} from "@app/components/Modal/ModalContext";

export default function ModalProvider({ children }: PropsWithChildren<{}>) {
  const [modalState, setModalState] = useState<IModalStateContext>({
    modals: [],
  });
  const modalDispatch = useMemo<IModalDispatchContext>(
    () => ({
      openModal(newModalItem) {
        setModalState((prevModalState) => ({
          modals: [...prevModalState.modals, newModalItem],
        }));
      },
    }),
    []
  );
  return (
    <ModalDispatchContext.Provider value={modalDispatch}>
      <ModalStateContext.Provider value={modalState}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
}
