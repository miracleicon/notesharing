import React from "react";

const AdminDashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        window.location.reload();
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AdminDashboard;
