export interface ModalDeletePostProps {
  isOpen: boolean;
  handleClose: () => void;
  id: number;
  refetch: () => void;
}
