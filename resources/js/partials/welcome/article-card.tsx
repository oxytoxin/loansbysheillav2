export default function ArticleCard() {
    return (
        <div className="group hover:bg-primary rounded-lg border border-[#A6A6A6] bg-[#E2E6DB] p-4 duration-300 hover:scale-105">
            <img
                src="https://images.pexels.com/photos/7641829/pexels-photo-7641829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="homebuying"
                className="h-72 w-full rounded-lg object-cover object-center"
            />
            <h3 className="text-primary mt-2 ml-4 w-4/5 font-semibold group-hover:text-white">
                The Dos and Don'ts of a Successful Homebuying Process
            </h3>
            <div className="mt-2 flex justify-between px-4 group-hover:text-white">
                <div>
                    <h4 className="font-semibold">By Karen Tungal</h4>
                    <h4>October 8th, 2024</h4>
                </div>
                <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/27603433/pexels-photo-27603433/free-photo-of-blonde-beauty-s-eye-catching-glasses.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="avatar"
                />
            </div>
            <div className="flex justify-center">
                <a
                    href="#"
                    className="bg-primary group-hover:text-primary mt-4 rounded-full border-[#074A42] px-16 py-2 font-semibold text-white group-hover:bg-[#E2E6DB] hover:border-[#A6A6A6]"
                >
                    READ MORE
                </a>
            </div>
        </div>
    );
}
