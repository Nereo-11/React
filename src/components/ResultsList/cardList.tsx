import React, { useState } from 'react';
import './cardList.css';

interface Item {
  nombre: string;
  especie: string;
  descarga: string;
}

interface ModalProps {
  item: Item | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{item.nombre}</h2>
        <p><strong>Especie:</strong> {item.especie}</p>
        <button onClick={() => window.open(item.descarga, '_blank', 'noopener,noreferrer')} className="download-button">
            Descargar
        </button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

const CardList: React.FC<{ data: Item[] }> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleCardClick = (item: Item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="card-list">
        {data.map((item, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(item)}>
            <h3>{item.nombre}</h3>
            <p>{item.especie}</p>
          </div>
        ))}
      </div>
      <Modal item={selectedItem} onClose={closeModal} />
    </div>
  );
};

export default CardList;