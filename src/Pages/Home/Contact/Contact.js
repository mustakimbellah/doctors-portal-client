import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section className=''
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='text-center py-3'>
                <h4 className=' mt-6 text-xl text-bold text-secondary'>Contact Us</h4>

                <h2 className='mt-2 text-4xl text-white'>Stay connected with us</h2>

                <input type="email" placeholder="Email Address" className="mt-2 input input-bordered w-full max-w-xs" />

                <br />

                <input type="text" placeholder="Subject" className="mt-2 input input-bordered w-full max-w-xs" />

                <br />

                <textarea className="mt-2 textarea textarea-bordered w-full max-w-xs" placeholder="Your Message">
                </textarea>

                <br />

                <PrimaryButton>Submit</PrimaryButton>

            </div>



        </section >
    );
};

export default Contact;