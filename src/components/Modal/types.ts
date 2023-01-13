import { ComponentType, ReactElement } from "react";

export interface IModalStateContext {
  modals: ReactElement[];
}

export interface IModalDispatchContext {
  openModal: (item: IModalItem) => number;
  closeModal: (modalId: number) => void;
}

export interface IModalItem<T = any> {
  Component: ComponentType<T>;
  componentProps?: T;
  modalHooks?: Partial<IModalHooks>;
}

export interface IExtendedModalItem extends IModalItem {
  modalProps: IModalProps;
  modalHooks: IModalHooks;
}

interface IModalProps {
  modalId: number;
}

interface IModalHooks {
  beforeOpen: VoidFunctionOrVoidPromise;
  afterOpen: VoidFunctionOrVoidPromise;
  beforeClose: VoidFunctionOrVoidPromise;
  afterClose: VoidFunctionOrVoidPromise;
}

export interface IModalRef {
  close: () => void;
}

export type VoidFunctionOrVoidPromise = () => void | Promise<void>;
