import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div style={{ 
            height: '100vh', 
            width: '200px', 
            backgroundColor: '#f5f5f5', 
            position: 'fixed', 
            top: '0', 
            left: '0', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'
        }}>
            <h3>Sidebar</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Sidebar;
