import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones , setPhones] = useState([]);
    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data => {
            const loadedData = data.data.data;
            const phonesData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1])
                const phoneInfo = {
                    name : phone.phone_name, 
                    price : price
                }
                return phoneInfo;
            })
            setPhones(phonesData)
        })
    } , [])
    return (
        <div className='lg:container mx-auto my-5'>
            <BarChart width={1000} height={500} data={phones}>
                <Tooltip></Tooltip>
                <XAxis dataKey='name'></XAxis>
                <YAxis/>
                <Bar dataKey='price' fill="#8884d8"></Bar>
            </BarChart>
        </div>
    );
};

export default PhoneBar;