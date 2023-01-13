import { PropsWithChildren, useEffect } from "react";

import useModal from "@app/components/Modal/useModal";

export default function ModalRenderer() {
  const { modals } = useModal();

  useEffect(() => {
    document.body.style.overflow = modals.length > 0 ? "hidden" : "auto";
  }, [modals]);

  return (
    <>
      {modals.length > 0 && (
        <>
          <ModalOverlay />
          <ModalStack>{modals}</ModalStack>
        </>
      )}
    </>
  );
}

const ModalOverlay = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/20"></div>
  );
};

const ModalStack = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      {children}
    </div>
  );
};
