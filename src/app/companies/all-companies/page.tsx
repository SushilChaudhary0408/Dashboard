

'use client';
import { useRouter } from 'next/navigation';
import Searchbar from "@/components/ui/searchbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {companies} from "@/constant/data";



function AllCompanies() {
  const router = useRouter();

  const handleCompanyClick = (companyId: number) => {
    router.push(`/companies/all-companies/${companyId}`);
  };

  return (
    <div className="w-[1126px]">
      <Searchbar />
      <div className="w-full p-4 flex items-center justify-between bg-slate-100">
        <div className="font-bold text-xl flex gap-8">
          <span>All</span>
          <span>Active</span>
          <span>Inactive</span>
        </div>
        <div className="flex gap-8">
          <Button variant="outline" color="purple">Action</Button>
          <Button variant="outline" color="yellow">Filter</Button>
        </div>
      </div>

      <div className="font-bold flex items-center justify-between gap-8 p-4">
        <Checkbox />
        <p className="w-[168px]">Company Name</p>
        <p className="w-[168px]">Contact Person</p>
        <p className="w-[203px]">Email</p>
        <p className="w-[131px]">Phone</p>
        <p className="w-[90px]">VM Used</p>
        <p className="w-[130px]">Registration Status</p>
        <p className="w-[69px]">Status</p>
        <p className="w-[106px]">Payment Status</p>
      </div>

      {companies.map((company: any) => (
        <div key={company.id} className="flex items-center justify-between gap-8 p-4">
          <Checkbox />
          <p
            className={`w-[168px] overflow-auto hide-scrollbar cursor-pointer`}
            onClick={() => handleCompanyClick(company.id)}
          >
            {company.name}
          </p>
          <p className="w-[168px] overflow-auto hide-scrollbar"
            onClick={() => handleCompanyClick(company.id)}
          >
            {company.contactPerson}
          </p>
          <p className="w-[203px] overflow-auto hide-scrollbar">{company.email}</p>
          <p className="w-[131px]">{company.phone}</p>
          <p className="w-[90px]">{company.vmUsed}</p>
          <p className={`w-[135px] text-center rounded ${company.registrationStatus === "Approved" ? "bg-blue-300" : "bg-orange-300"}`}>
            {company.registrationStatus}
          </p>
          <p className={`w-[90px] text-center rounded ${company.status === "Active" ? "bg-green-300" : "bg-red-300"}`}>
            {company.status}
          </p>
          <p className={`w-[106px] text-center rounded ${company.paymentStatus === "Paid" ? "bg-green-300" : company.paymentStatus === "Due" ? "bg-yellow-300" : "bg-red-300"}`}>
            {company.paymentStatus}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AllCompanies;
