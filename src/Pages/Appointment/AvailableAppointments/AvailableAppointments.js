import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointments = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],

        // queryFn: () => fetch('http://localhost:5000/appointmentOptions')
        // .then(res => res.json())

        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions');
            const data = await res.json();
            return data;
        }
    });


    return (
        <section className='my-16'>

            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                        key={option._id}
                        appointmentOptions={option}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>

            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointments;