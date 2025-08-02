export default function License() {
    return (
        <div className="mt-32 min-h-[40rem] bg-[#f4f5f8] py-32">
            <h3 className="heading">States Where I'm Licensed</h3>
            <div className="flex flex-col gap-4">
                <div className="items-center px-96">
                    <div className="relative">
                        <img src="/images/states.png" alt="States" className="" />
                        <img src="/images/pin.png" alt="pin" className="absolute top-0 left-40 w-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}
