export default function License() {
    return (
        <div className="mt-32 min-h-[40rem] bg-[#f4f5f8] py-32">
            <h3 className="heading">States Where I'm Licensed</h3>
            <div className="flex flex-col gap-4">
                <div className="items-center lg:px-96 px-8">
                    <div className="relative">
                        <img src="/images/states.png" alt="States" className=""/>
                        <img src="/images/pin.png" alt="pin" className="absolute 2xl:left-48 left-14 -top-2 md:left-32 md:top-2 lg:-top-2 lg:left-28 lg:w-12 2xl:w-16 w-8"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
