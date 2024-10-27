
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

function CompaniesRequest() {
    const companies = [
        { name: "ABC Corporation", email: "sushilchaudhary0408@gmail", vmRequested: 10, submissionDate: "2024/03/21" },
        { name: "XYZ Corporation", email: "ranjitchaudhary0408@gmail", vmRequested: 20, submissionDate: "2024/08/21" },
        { name: "MNO Corporation", email: "nishantchaudhary0408@gmail", vmRequested: 15, submissionDate: "2024/03/11" },
        { name: "XYZ Corporation", email: "ranjitchaudhary0408@gmail", vmRequested: 20, submissionDate: "2024/08/21" },
        { name: "MNO Corporation", email: "nishantchaudhary0408@gmail", vmRequested: 15, submissionDate: "2024/03/11" },
    ];

    return (
        <div className="w-full">
            <div className="w-full p-4 flex items-center justify-end bg-slate-100">
                <div className="flex gap-8">
                    <Button variant="outline" color="purple">Action</Button>
                    <Button variant="outline" color="yellow">Filter</Button>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 py-2">
                <Checkbox />
                <div className="w-full flex justify-between ms-6">
                    <div className="flex flex-col gap-4">
                        <p className="font-bold">Company Name</p>
                        <Input placeholder="Search company name" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold">Email</p>
                        <Input placeholder="Search Email" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold">VM Requested</p>
                        <Input placeholder="Search VM Requested" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold">Submission Date</p>
                        <Input placeholder="Search Submission Date" />
                    </div>
                    <div className="w-44 flex flex-col items-center gap-4">
                        <p className="font-bold">Action</p>
                    </div>
                </div>
            </div>

            {companies.map((company, index) => (
                <div key={index} className="flex items-center px-4 py-2">
                    <Checkbox />
                    <div className="w-full flex items-center justify-between ms-6">
                        <p>{company.name}</p>
                        <p className="w-[203px]">{company.email}</p>
                        <p>{company.vmRequested}</p>
                        <p>{company.submissionDate}</p>
                        <div className="w-44 flex justify-between gap-6">
                            <Button variant="outline" color="purple">Approve</Button>
                            <Button variant="outline" color="red">Deny</Button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="my-4 flex items-center justify-center cursor-pointer gap-4">
                {[1, 2, 3, 4, "...", 10].map((page, index) => (
                    <div key={index} className="w-6 h-6 text-center rounded border-2 hover:border-purple-500">{page}</div>
                ))}
            </div>
        </div>
    );
}

export default CompaniesRequest;
