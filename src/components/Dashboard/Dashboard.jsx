import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        { id: 1, name: 'Alice', physics: 80, chemistry: 75, math: 90, average: 81.67 },
        { id: 2, name: 'Bob', physics: 70, chemistry: 80, math: 85, average: 78.33 },
        { id: 3, name: 'Charlie', physics: 85, chemistry: 80, math: 75, average: 80 },
        { id: 4, name: 'Dave', physics: 90, chemistry: 85, math: 80, average: 85 },
        { id: 5, name: 'Eve', physics: 75, chemistry: 90, math: 85, average: 83.33 },
        { id: 6, name: 'Frank', physics: 55, chemistry: 44, math: 25, average: 78.33 },
        { id: 7, name: 'Grace', physics: 90, chemistry: 75, math: 85, average: 83.33 },
        { id: 8, name: 'Henry', physics: 80, chemistry: 90, math: 75, average: 81.67 },
        { id: 9, name: 'Isaac', physics: 75, chemistry: 80, math: 90, average: 81.67 },
        { id: 10, name: 'John', physics: 85, chemistry: 85, math: 85, average: 85 },
        { id: 11, name: 'Kate', physics: 90, chemistry: 80, math: 75, average: 81.67 },
        { id: 12, name: 'Liam', physics: 33, chemistry: 44, math: 20, average: 83.33 }
      ];      
    return (
        <div className='lg:container mx-auto my-5 '>
            <LineChart
                width={1000}
                height={300}
                data={students}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="physics"></Line>
                    <Line type="monotone" dataKey="math" stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey="chemistry" stroke="#82ca9d"></Line>
                </LineChart>
        </div>
    );
};

export default Dashboard;