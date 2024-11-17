
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const companies = [
    {
        id: 1,
        name: "ABC Company",
        contactPerson: "Sushil Chaudhary",
        email: "sushilchaudhary0408@gmail.com",
        phone: "+977 9824281352",
        vmUsed: "12/22",
        registrationStatus: "Approved",
        status: "Active",
        paymentStatus: "Paid",
    },
    {
        id: 2,
        name: "XYZ Company",
        contactPerson: "Rahul Chaudhary",
        email: "rahulchaudhary0408@gmail",
        phone: "+977 98273347467",
        vmUsed: "10/22",
        registrationStatus: "Not Approved",
        status: "Unactive",
        paymentStatus: "Due",
      },
      {
        id: 3,
        name: "MNO Company",
        contactPerson: "Nishant Chaudhary",
        email: "nishantchaudhary0408@gmail",
        phone: "+977 98674653783",
        vmUsed: "01/22",
        registrationStatus: "Approved",
        status: "Active",
        paymentStatus: "Overdue",
      },
      {
        id: 4,
        name: "ABC Company",
        contactPerson: "Sushil Chaudhary",
        email: "sushilchaudhary0408@gmail.com",
        phone: "+977 9824281352",
        vmUsed: "12/22",
        registrationStatus: "Approved",
        status: "Active",
        paymentStatus: "Paid",
      },
      {
        id: 5,
        name: "XYZ Company",
        contactPerson: "Rahul Chaudhary",
        email: "rahulchaudhary0408@gmail",
        phone: "+977 98273347467",
        vmUsed: "10/22",
        registrationStatus: "Not Approved",
        status: "Unactive",
        paymentStatus: "Due",
      },
      {
        id: 6,
        name: "MNO Company",
        contactPerson: "Nishant Chaudhary",
        email: "nishantchaudhary0408@gmail",
        phone: "+977 98674653783",
        vmUsed: "01/22",
        registrationStatus: "Approved",
        status: "Active",
        paymentStatus: "Overdue",
      },
    
];

function ViewCompanies() {
    const [activeStatus, setActiveStatus] = useState(true);

    const handleStatusClick = (status) => {
        setActiveStatus(status === 'Active');
    };

    return (
        <div className="bg-purple-100 pe-2 pt-4">
            <div className="w-full flex justify-end">
                <Button variant="outline" color="purple">Save</Button>
            </div>
            <div className="w-full mt-4 flex justify-between">
                <div className="w-3/4">
                    <div className="px-2 flex flex-col gap-8">
                        <form className="p-4 flex flex-col gap-8 bg-white">
                            <p className="font-bold text-xl">Company Details</p>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2">
                                    <p>Company Name</p>
                                    <Input placeholder="ABC Company" className="w-80" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Contact Person</p>
                                    <Input placeholder="Sushil Chaudhary" className="w-80" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2">
                                    <p>Email</p>
                                    <Input placeholder="sushilchaudhary0408@gmail.com" className="w-80" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Phone</p>
                                    <Input placeholder="+977 9824281352" className="w-80" />
                                </div>
                            </div>
                        </form>

                        <div className="bg-white p-4 flex flex-col gap-8">
                            <p className="font-bold text-xl">VM Quota Requested</p>
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col gap-2">
                                    <p>Total VM Request</p>
                                    <Input placeholder="10" className="w-48" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Total VM Request</p>
                                    <Input placeholder="10" className="w-48" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Total VM Request</p>
                                    <Input placeholder="10" className="w-48" />
                                </div>
                            </div>
                        </div>

                        
                        <div className="w-full p-2 justify-between bg-white">
                            <div className="flex items-center gap-8">
                                <Button variant="outline" color="purple">User</Button>
                                <p className="font-bold text-xl">Payment Report</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="w-full flex justify-between">
                                    <div className="w-44">Name</div>
                                    <div className="w-56">Email</div>
                                    <div className="w-56">VM Info</div>
                                    <div className="w-24">Status</div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="w-44">Sushil Chaudhary</div>
                                    <div className="w-56 overflow-hidden">sushilchaudhary0408@gmail.com</div>
                                    <div className="w-56">
                                        <p>CPU: 4 CPUs RAM: 8 GB</p>
                                        <p>Storage: 1TB</p>
                                    </div>
                                    <div className={`w-24 text-center rounded-full ${activeStatus ? 'bg-green-300' : 'bg-red-300'}`}>
                                        <p>{activeStatus ? 'Paid' : 'Due'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 p-4 flex flex-col gap-8 bg-white">
                    <p className="font-bold text-xl">
                        <span>Company Status</span>
                    </p>
                    <div>
                        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleStatusClick('Active')}>
                            <div className={`w-2 h-2 rounded-full ring-2 ${activeStatus ? 'ring-2 ring-green-300 ring-offset-4 ring-offset-slate-50 dark:ring-offset-white bg-green-300' : 'ring-offset-4 ring-gray-300'}`}></div>
                            <p>Active</p>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleStatusClick('Inactive')}>
                            <div className={`w-2 h-2 rounded-full ring-2 ${!activeStatus ? 'ring-2 ring-green-300 ring-offset-4 ring-offset-slate-50 dark:ring-offset-white bg-green-300' : 'ring-offset-4 ring-gray-300'}`}></div>
                            <p>Inactive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCompanies;
















