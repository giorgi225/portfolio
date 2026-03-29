// stores/modal.store.ts
import { create } from "zustand";

export type ModalKey = "project" | "gallery" | "experience";

type ModalState<T = Record<string, unknown>> = {
  isOpen: boolean;
  props?: T;
};

type ModalStore = {
  modals: Record<ModalKey, ModalState>;
  openModal: <T = Record<string, unknown>>(key: ModalKey, props?: T) => void;
  closeModal: (key: ModalKey) => void;
  toggleModal: (key: ModalKey) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modals: {
    project: {
      isOpen: false,
      props: {},
    },
    gallery: {
      isOpen: false,
      props: {},
    },
    experience: {
      isOpen: false,
      props: {},
    },
  },
  openModal: (key, props) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [key]: { isOpen: true, props: props ?? {} },
      },
    })),

  closeModal: (key) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [key]: { isOpen: false, props: {} },
      },
    })),

  toggleModal: (key) =>
    set((state) => {
      const current = state.modals[key];
      return {
        modals: {
          ...state.modals,
          [key]: { ...current, isOpen: !current.isOpen },
        },
      };
    }),
}));
