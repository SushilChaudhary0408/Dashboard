

import Searchbar from "@/components/ui/searchbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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

function AllCompanies() {
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

      {companies.map((company) => (
        <div key={company.id} className="flex items-center justify-between gap-8 p-4">
          <Checkbox />
          <p className="w-[168px] overflow-auto hide-scrollbar">{company.name}</p>
          <p className="w-[168px] overflow-auto hide-scrollbar">{company.contactPerson}</p>
          <p className="w-[203px] overflow-auto hide-scrollbar">{company.email}</p>
          <p className="w-[131px]">{company.phone}</p>
          <p className="w-[90px]">{company.vmUsed}</p>
          <p
            className={`w-[135px] text-center rounded ${company.registrationStatus === "Approved"
                ? "bg-blue-300"
                : "bg-orange-300"
              }`}
          >
            {company.registrationStatus}
          </p>
          <p
            className={`w-[90px] text-center rounded ${company.status === "Active" ? "bg-green-300" : "bg-red-300"
              }`}
          >
            {company.status}
          </p>
          <p
            className={`w-[106px] text-center rounded ${company.paymentStatus === "Paid"
                ? "bg-green-300"
                : company.paymentStatus === "Due"
                  ? "bg-yellow-300"
                  : "bg-red-300"
              }`}
          >
            {company.paymentStatus}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AllCompanies;
