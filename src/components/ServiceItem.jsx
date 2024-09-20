import React, { useState } from 'react';

const ServiceItem = ({ service, onUpdate, onDelete }) => {
    const [isEditing, setEditing] = useState(false);
    const [name, setName] = useState(service.name);
    const [description, setDescription] = useState(service.description);
    const [price, setPrice] = useState(service.price);

    const handleUpdate = () => {
        onUpdate({ ...service, name, description, price: parseFloat(price) });
        setEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div >
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div className='Box'>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <p>${service.price}</p>
                    <button onClick={() => setEditing(true)} >Edit</button>
                    <button onClick={() => onDelete(service.id)} id='delete'>Delete</button>
                </div>
            )}
        </div>
    );
};

export default ServiceItem;
