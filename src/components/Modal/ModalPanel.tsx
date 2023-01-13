import {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Transition } from "react-transition-group";

import {
  TRANSITION_DURATION,
  FADE_STYLE,
  FADE_TRANSITION_STYLES,
} from "@app/components/Modal/constants";
import { IExtendedModalItem, IModalRef } from "@app/components/Modal/types";

interface IModalPanel
  extends PropsWithChildren<
    Pick<IExtendedModalItem, "modalProps" | "modalHooks">
  > {}

const ModalPanel = forwardRef<IModalRef, IModalPanel>(
  ({ modalProps, modalHooks, children }, ref) => {
    console.log(modalProps);
    const { beforeOpen, afterOpen, beforeClose, afterClose } = modalHooks;

    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    const close = () => {
      setInProp(false);
    };

    const onCloseEnd = () => {
      afterClose();
      // TODO: delete current modalRef from modalRefs
    };

    useImperativeHandle(ref, () => ({ close }));

    useEffect(() => {
      setInProp(true);
    }, []);

    return (
      <Transition
        nodeRef={nodeRef}
        appear={true}
        in={inProp}
        timeout={TRANSITION_DURATION}
        onEnter={beforeOpen}
        onEntered={afterOpen}
        onExit={beforeClose}
        onExited={onCloseEnd}
        mountOnEnter
      >
        {(state) => (
          <div
            ref={nodeRef}
            style={{
              ...FADE_STYLE,
              ...FADE_TRANSITION_STYLES[state],
            }}
            className="absolute"
          >
            {children}
          </div>
        )}
      </Transition>
    );
  }
);

export default ModalPanel;
