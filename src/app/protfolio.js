"use client";

export default function Protfolio() {
    return (
        <div className="container max-w-7xl mx-auto px-8 py-8 " >


            <div className="text-black">
                <p className="text-sm">PROTFOLIO</p>
                <h1>Our Featured Projects</h1>
                <p className="text-sm">Your Vision, Our Expertise; Transforming Ideas into Results</p>
            </div>

            <div className="grid pt-4 lg:grid-cols-2 gap-3">
                <div className="bg-black w-full h-52  rounded-lg">

                </div>

                <div className="bg-black w-full h-52 rounded-lg">

                </div>

                <div className="bg-black w-full h-52 rounded-lg">

                </div>

                <div className="bg-black w-full h-52 rounded-lg">

                </div>


            </div>
            <div className="text-center">

                <button className="bg-blue-500 mt-8 p-2 rounded-md ">View All Case Study</button>
            </div>
        </div>
    );
}