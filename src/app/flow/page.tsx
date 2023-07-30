import React from 'react';
import Sidebar from '../components/sidebar';
import ComponentOne from '../components/draw';
import ComponentTwo from '../components/toolbar';

const HomePage: React.FC = () => {
    return (
        <div>
            <Sidebar />
            <ComponentOne />
            <ComponentTwo />
        </div>
    );
};

export default HomePage;
