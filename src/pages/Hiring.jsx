import DynamicForm from '../components/DynamicForm';
import HiringForm from '../components/HireForm';
import NavBar from '../components/Navbar';
import './Hiring.css';
import { useEffect, useState } from 'react';

function Hiring() {

    const jobFormFields = [
        { name: 'fullName', label: 'Full name', placeholder: 'Full name', required: true },
        { name: 'email', label: 'Email', placeholder: 'Email', type: 'email', required: true },
        { name: 'phone', label: 'Phone number', placeholder: 'Phone number', required: true },
        {
            name: 'workplace',
            label: 'Workplace type',
            type: 'select',
            options: ['On-site', 'Remote', 'Hybrid'],
            placeholder: 'On-site',
            halfWidth: true,
            required: true
        },
        {
            name: 'location',
            label: 'Job location',
            placeholder: 'Job location',
            halfWidth: true,
            required: true,
            icon: '↗'
        },
        {
            name: 'employment',
            label: 'Employment type',
            type: 'select',
            options: ['Full time', 'Part time', 'Contract'],
            placeholder: 'Full time',
            halfWidth: true,
            required: true
        },
    ];

    return (
        <>

        <NavBar/>

            <section className='hir-container'>
              <img src="./hire2.png" alt='Eggholic Hiring'/>
            </section>

            <div className='xdc-container'>


               <HiringForm/>


            </div>


        </>
    )
}

export default Hiring;