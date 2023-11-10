import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users');
                if (Array.isArray(response.data.users)) {
                    setUsers(response.data.users);
                } else {
                    console.error('Invalid data format received from the API');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="box">
            <center><h2>Dummy data</h2></center>
            <center><table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><img src={user.image} alt="Profile Pic" width="40px" height="40px" /></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.domain}</td>
                            <td>{user.ip}</td>
                            <td>{user.university}</td>
                        </tr>
                    ))}
                </tbody>
            </table></center>
        </div>
    );
};

export default UserTable;