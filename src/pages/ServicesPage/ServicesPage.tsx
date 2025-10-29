import { useState } from 'react';
import './Styles.css';
import { services } from '../../helpers/data/dataServices';
import { ServiceModal } from '../../components/ServiceModal/ServiceModal';

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const openModal = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="services-section">
      <h2 className="services-title">Servicios</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="service-button"
                onClick={() => openModal(service)}
              >
                Leer más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={closeModal}
          title={selectedService.title}
          description={selectedService.description}
          image={selectedService.image}
        />
      )}
    </section>
  );
};
