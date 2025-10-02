import {LucidePhoneCall} from "lucide-react";

export default function Header() {
    return (
        <div className="flex items-center justify-between lg:px-32 px-16 flex-col md:flex-row py-8">
            <img src="/images/lbs.png" className="flex h-20 w-auto items-center justify-center" alt="logo"></img>
            <div className="flex mt-8 md:mt-0 flex-col items-center md:items-end">
                <h3 className="font-bold">FOR FREE CONSULTATION:</h3>
                <div className="flex items-center gap-2 text-red-800">
                    <LucidePhoneCall/>
                    <h4 className="md:text-3xl font-semibold">(425) 900 6082</h4>
                </div>
            </div>
        </div>
    );
}
