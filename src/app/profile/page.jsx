"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProfilePage = () => {
    const router = useRouter();
    const [data, setData] = useState(null)

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

    const getUserDetails  = async ()=>{
        const res= await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          <h2 className="text-3xl font-semibold mb-6">Profile Page</h2>
          <p className="mb-4">
            {data ? (
              <Link href={`/profile/${data}`} className="text-blue-500">{data}</Link>
            ) : (
              'Nothing'
            )}
          </p>
          <button
            onClick={logoutHandler}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mb-2"
          >
            Logout
          </button>
          <button
            onClick={getUserDetails}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Get Data
          </button>
        </div>
      );
    };

export default ProfilePage
