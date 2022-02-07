import React from 'react';
import { useParams } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>booking</h1>
            <h2>This is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;