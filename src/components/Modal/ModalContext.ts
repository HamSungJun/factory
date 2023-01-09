import { ComponentType, createContext } from "react";

export interface IModalStateContext {
  modals: IModalItem[];
}
export interface IModalDispatchContext {
  openModal: (item: IModalItem) => void;
}
interface IModalItem<T = any> {
  Component: ComponentType<T>;
  props?: T;
}

export const ModalStateContext = createContext<IModalStateContext>({
  modals: [],
});
export const ModalDispatchContext = createContext<IModalDispatchContext>({
  openModal() {},
});
