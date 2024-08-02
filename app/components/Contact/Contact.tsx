'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { ContactForm } from "../ContactForm/ContactForm";
import { FormData } from '@/app/models/models';

export function Contact() {

    return (
        <div
            id="contact"
            className="flex flex-col font-avenir relative w-full text-purple text-2xl p-10 lg:items-center"
            style={{
                backgroundImage: "url(./contact/contact-bg.png)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col">
                <div className="font-light text-2xl">Spojte se s námi a otevřete nové obchodní možnosti</div>
                <div className="font-bold text-4xl">Kontaktujte B2Bpoint ještě dnes</div>
            </div>
            <div className=" py-10">
                <ContactForm></ContactForm>
            </div>
        </div>
    );
} 