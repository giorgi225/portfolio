import { useModalStore, ModalKey } from "@/store/modal.store";

export type ModalControls<T = Record<string, unknown>> = {
  isOpen: boolean;
  onOpen: (props?: T) => void;
  onClose: () => void;
  toggle: () => void;
  props: T;
};

export function useModal<T = Record<string, unknown>>(key: ModalKey) {
  const modalState = useModalStore((state) => state.modals[key]);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const toggleModal = useModalStore((state) => state.toggleModal);

  return {
    isOpen: modalState?.isOpen ?? false,
    props: (modalState?.props ?? {}) as T, // Cast to T
    onOpen: (props?: T) => openModal(key, props as Record<string, unknown>),
    onClose: () => closeModal(key),
    toggle: () => toggleModal(key),
  };
}
