import React from 'react'
import ContactForm from './contactForm'
import { BackgroundBeams } from '@/components/background-beams'

export default function Contact() {
    return (
        <section id="contact" className='relative pt-12'>
            <ContactForm />
            <BackgroundBeams />
        </section>
    )
}
