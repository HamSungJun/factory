import { produce } from "immer";
import { PropsWithChildren, useMemo, useState, createRef } from "react";

import {
  ModalStateContext,
  ModalDispatchContext,
} from "@app/components/Modal/ModalContext";
import ModalPanel from "@app/components/Modal/ModalPanel";
import {
  IModalDispatchContext,
  IModalStateContext,
} from "@app/components/Modal/types";
import { NOOP, generateModalId } from "@app/components/Modal/utils";

export default function ModalProvider({ children }: PropsWithChildren<{}>) {
  const [modalState, setModalState] = useState<IModalStateContext>({
    modals: [],
  });
  const modalDispatch = useMemo<IModalDispatchContext>(
    () => ({
      openModal({ Component, componentProps, modalHooks }): number {
        const modalId = generateModalId();
        const modalRef = createRef<{ close: () => void }>();
        const modalPropsParsed = { modalId };
        const modalHooksParsed = {
          beforeOpen: modalHooks?.beforeOpen ?? NOOP,
          afterOpen: modalHooks?.afterOpen ?? NOOP,
          beforeClose: modalHooks?.beforeClose ?? NOOP,
          afterClose: modalHooks?.afterClose ?? NOOP,
        };

        setModalState((prevModalState) =>
          produce(prevModalState, (draft) => {
            draft.modals.push(
              <ModalPanel
                ref={modalRef}
                key={modalPropsParsed.modalId}
                modalProps={modalPropsParsed}
                modalHooks={modalHooksParsed}
              >
                <Component {...componentProps} />
              </ModalPanel>
            );
          })
        );
        return modalId;
      },
      closeModal(modalId) {
        const modal = modalState.modals.find(
          (modal) => modal.key === modalId.toString()
        ) as any;
        modal.ref.current.close();
      },
      deleteModal() {},
    }),
    [modalState]
  );

  return (
    <ModalDispatchContext.Provider value={modalDispatch}>
      <ModalStateContext.Provider value={modalState}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
}
