"use client";
import React, { useState } from "react";

export default function From() {

    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        service: "",
        companyName: "",
        idea: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="container max-w-7xl mx-auto px-8 py-8 mb-20">
            <div className="flex gap-10">
                <div className=" flex-1  w-full text-black">
                    <h1 className="text-2xl">Ready to elevate your project?</h1>
                    <p className="text-sm">Our team is here to understand your needs and turn your ideas into reality</p>
                    <div className="mt-6">
                        <p>Lets schedule a Call with-</p>
                        <button className="bg-black text-white rounded-lg p-2">Schedule a 20 Min Call</button>
                    </div>
                </div>

                <div className=" flex-1 w-full ">
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto p-6 bg-orange-100  rounded-lg space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John C"
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Subject*
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="eg."
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="info.yourmail@email.com"
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Service Required*
                            </label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select a Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="John Carter"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tell us about your idea!
                            </label>
                            <textarea
                                name="idea"
                                value={formData.idea}
                                onChange={handleChange}
                                placeholder="Please describe what's on your mind?"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Submit Your Request
                        </button>

                        <div className="text-sm text-center text-gray-500 mt-3">
                            Prefer email?{" "}
                            <a
                                href="mailto:hello.codervive.com"
                                className="text-blue-500 hover:underline"
                            >
                                hello.codervive.com
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}