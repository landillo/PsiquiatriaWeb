import './Styles.css';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
}

export const ServiceModal = ({ isOpen, onClose, title, description, image }: ServiceModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} className="modal-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};
