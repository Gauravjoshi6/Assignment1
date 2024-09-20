
import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, onUpdate, onDelete }) => {
    return (
        <div>
            {services.map(service => (
                <ServiceItem
                    key={service.id}
                    service={service}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default ServiceList;
