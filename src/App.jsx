

import './App.css'

import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';


const App = () => {
    const [services, setServices] = useState([]);

    const addService = (newService) => {
        setServices([...services, { id: Date.now(), ...newService }]);
    }

    const updateService = (updatedService) => {
        setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
    }

    const deleteService = (id) => {
        setServices(services.filter(service => service.id !== id));
    }

    return (
        <div className="app">
            <h1>Healthcare Services</h1>
            <AddServiceForm onAdd={addService} />
            <ServiceList services={services} onUpdate={updateService} onDelete={deleteService} />
        </div>
    )
}

export default App;
