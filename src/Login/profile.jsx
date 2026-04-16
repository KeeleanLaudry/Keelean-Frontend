import React, { useState } from "react";
import Sidebar from "./sidebar";
import AddressSection from "./Address";
import MyOrders from "./MyOrders";
import AccountPrivacy from "./AccountPrivacy";
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("myaddresses");

  return (
    <div className="flex  max-w-6xl mx-auto min-h-screen pt-20">
      
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <div className="flex-1 p-6">
        {activeTab === "myaddresses" && <AddressSection />}
          {activeTab === "myorders" && <MyOrders />} 
          {activeTab=== "accountprivacy" && <AccountPrivacy/> } 
      </div>
    </div>
  );
}