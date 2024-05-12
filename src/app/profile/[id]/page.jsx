"use client";

import React, { useState } from "react";

const UserProfile = ({params}) => {


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            Profile Page {params.id}
        </div>
    );
};

export default UserProfile
