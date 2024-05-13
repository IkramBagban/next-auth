"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProfilePage = () => {
    const router = useRouter();

    const logoutHandler = async () => {
        try {


            const response = await axios.get('/api/users/logout');
            if (response.status === 200) {
                router.push('/login')
            }
            console.log('response', response)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <h2>
                Profile Page
            </h2>
            
            <button onClick={logoutHandler} className="border p-1 m-1 rounded hover:bg-white hover:text-black">Logout</button>
        </div>
    );
};

export default ProfilePage
