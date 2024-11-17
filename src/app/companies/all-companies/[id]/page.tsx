

'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { companies } from "@/constant/data";

interface Company {
  id: number;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  vmUsed: string;
  registrationStatus: string;
  status: string;
  paymentStatus: string;
  vmRequested: number;
  vmCreated: number;
  remainingVm: number;
  cpu: string;
  ram: string;
  storage: string;
}

function ViewCompany({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [company, setCompany] = useState<Company | null>(null);
  const [activeStatus, setActiveStatus] = useState(true);

  useEffect(() => {
    // Fetch company data
    const fetchCompany = async () => {
      const foundCompany = companies.find((company) => company.id === Number(params.id));
      if (foundCompany) {
        setCompany(foundCompany);
        setActiveStatus(foundCompany.status === 'Active');
      }
    };

    fetchCompany();
  }, [params.id]);

  const handleStatusClick = (status: string) => {
    setActiveStatus(status === 'Active');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Company) => {
    if (company) {
      setCompany({
        ...company,
        [field]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    // Add save logic here
  };

  if (!company) {
    return <div>No company found</div>;
  }

  return (
    <div className="bg-purple-100 pt-4 px-4">
      <div className="w-full flex justify-end">
        <Button variant="outline" color="purple" onClick={handleSave}>Save</Button>
      </div>
      <div className="w-full mt-4 flex justify-between">
        <div className="w-3/4">
          <div className="px-2 flex flex-col gap-8">
            <form className="p-4 flex flex-col gap-8 bg-white">
              <p className="font-bold text-xl">Company Details</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p>Company Name</p>
                  <Input value={company.name} className="w-80" onChange={(e) => handleInputChange(e, 'name')} />
                </div>
                <div className="flex flex-col gap-2">
                  <p>Contact Person</p>
                  <Input value={company.contactPerson} className="w-80" onChange={(e) => handleInputChange(e, 'contactPerson')} />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p>Email</p>
                  <Input value={company.email} className="w-80" onChange={(e) => handleInputChange(e, 'email')} />
                </div>
                <div className="flex flex-col gap-2">
                  <p>Phone</p>
                  <Input value={company.phone} className="w-80" onChange={(e) => handleInputChange(e, 'phone')} />
                </div>
              </div>
            </form>

            <div className="bg-white p-4 flex flex-col gap-8">
              <p className="font-bold text-xl">VM Quota Requested</p>
              <div className="w-full flex justify-between">
                <div className="flex flex-col gap-2">
                  <p>Total VM Request</p>
                  <Input value={company.vmRequested} className="w-48" onChange={(e) => handleInputChange(e, 'vmRequested')} />
                </div>
                <div className="flex flex-col gap-2">
                  <p>VM Created</p>
                  <Input value={company.vmCreated} className="w-48" onChange={(e) => handleInputChange(e, 'vmCreated')} />
                </div>
                <div className="flex flex-col gap-2">
                  <p>Remaining VM</p>
                  <Input value={company.remainingVm} className="w-48" onChange={(e) => handleInputChange(e, 'remainingVm')} />
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
                  <div className="w-44">{company.contactPerson}</div>
                  <div className="w-56 overflow-hidden">{company.email}</div>
                  <div className="w-56">
                    <p>CPU: {company.cpu} RAM: {company.ram}</p>
                    <p>Storage: {company.storage}</p>
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
          <p className="font-bold text-xl">Company Status</p>
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

export default ViewCompany;
