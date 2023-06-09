import { FC, ReactNode } from 'react';

import { ButtonTransparent } from '../styles/components/ButtonTransparent';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalStyle: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 0,
  };

  return (
    <div>
      {isOpen && <div className="modal-overlay" style={overlayStyle} onClick={onClose}></div>}
      <div className="modal" style={modalStyle}>
        <div className="modal-content">
          {children}
          <ButtonTransparent className="modal-close" onClick={onClose}>
            close
          </ButtonTransparent>
        </div>
      </div>
    </div>
  );
};
