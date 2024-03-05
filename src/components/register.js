// import React, { useState, useEffect } from "react";
// import orkesConductorClient from '@io-orkes/conductor-javascript';
// import { useNavigate } from 'react-router-dom';
// import { ConductorClient } from '@io-orkes/conductor-javascript';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//     const navigate = useNavigate();
//     const [client, setClient] = useState(null);

//     useEffect(() => {
//         const initializeOrkesConductor = async () => {
//             const config = {
//                 serverUrl: 'https://play.orkes.io/api',
//             };

//             const clientPromise = orkesConductorClient(config);
//             const client = await clientPromise;
//             setClient(client);
//         };

//         initializeOrkesConductor();
//     }, []);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const workflowExecution = await client.starWorkflow({
//                 workflowId: '9ba13a3d-d8fe-11ee-b9db-aeed9c586a56',
//                 inputs: formData,
//             });

//             const result = await workflowExecution.waitForFinished();

//             if (result.status === 'COMPLETED') {
//                 console.log('Registration successful!');
//                 navigate('/address');
//             } else {
//                 console.error('Registration failed:', result.error);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//                 <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Register;

import React, { useState, useEffect } from "react";
import {orkesConductorClient} from '@io-orkes/conductor-javascript';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [client, setClient] = useState(null);

    useEffect(() => {
        const initializeOrkesConductor = async () => {
            const config = {
                serverUrl: 'https://play.orkes.io/api',
            };

            try {
                const client = await orkesConductorClient(config);
                setClient(client);
            } catch (error) {
                // console.error('Error initializing Orkes Conductor client:', error);
            }
        };

        initializeOrkesConductor();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (!client) {
                console.error('Orkes Conductor client is not initialized.');
                return;
            }

            const workflowExecution = await client.starWorkflow({
                workflowId: '9ba13a3d-d8fe-11ee-b9db-aeed9c586a56',
                inputs: formData,
            });

            const result = await workflowExecution.waitForFinished();

            if (result.status === 'COMPLETED') {
                console.log('Registration successful!');
                navigate('/address'); // Assuming '/address' is the route you want to navigate to
            } else {
                console.error('Registration failed:', result.error);
                navigate('/address'); // Assuming '/address' is the route you want to navigate to
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export {Register};
