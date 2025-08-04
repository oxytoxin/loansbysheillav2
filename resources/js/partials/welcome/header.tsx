import {LucidePhoneCall} from "lucide-react";

export default function Header() {
    return (
        <div className="flex items-center justify-between px-32 py-8">
            <div>
                <img src="/images/lbs.png" className="flex h-20 w-auto items-center justify-center"></img>
            </div>
            <div className="flex flex-col items-end">
                <h3 className="font-bold">FOR FREE CONSULTATION:</h3>
                <div className="flex items-center gap-2  text-red-800">
                    <LucidePhoneCall/>
                    <h4 className="text-3xl font-semibold">(425) 900 6082</h4>
                </div>
            </div>
        </div>
    );
}
