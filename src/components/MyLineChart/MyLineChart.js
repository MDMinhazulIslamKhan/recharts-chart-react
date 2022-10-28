import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Suppler A',
            price: 4000,
            'Before price': 2400,
            amt: 2400,
        },
        {
            name: 'Suppler B',
            price: 3000,
            'Before price': 1398,
            amt: 2210,
        },
        {
            name: 'Suppler C',
            price: 2000,
            'Before price': 9800,
            amt: 2290,
        },
        {
            name: 'Suppler D',
            price: 2780,
            'Before price': 3908,
            amt: 2000,
        },
        {
            name: 'Suppler E',
            price: 1890,
            'Before price': 4800,
            amt: 2181,
        },
        {
            name: 'Suppler F',
            price: 2390,
            'Before price': 3800,
            amt: 2500,
        },
        {
            name: 'Suppler G',
            price: 3490,
            'Before price': 4300,
            amt: 2100,
        },
    ];
    return (
        <LineChart width={700} height={250} data={data}>
            <Line dataKey={'price'}></Line>
            <Line dataKey={'Before price'}></Line>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid />
            <Tooltip />

        </LineChart>
    );
};

export default MyLineChart;