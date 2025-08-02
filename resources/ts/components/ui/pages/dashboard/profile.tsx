import React from "react";
import { Button } from "../../button";
import { FaRegEdit } from "react-icons/fa";
import { ComboboxDropdownMenu } from "./ui/combobox-project";

export default function DashboardProfile() {
    return (
        <div className="bg-[#0e0e0e] p-4 md:p-8 w-full min-h-screen flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 pb-4 border-b border-white/10">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-white text-2xl md:text-3xl font-bold">
                        <span className="">Profile Settings</span>
                    </h1>
                    <p className="text-white/60 text-sm mt-1">
                        Manage your account information and preferences
                    </p>
                </div>
                <div className="text-white/50 text-xs md:text-sm">
                    {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#1d1d1d] p-6 rounded-xl border border-white/5 shadow-lg shadow-black/20 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                src="https://avatar.vercel.sh/ali"
                                alt="User Avatar"
                                className="h-20 w-20 rounded-full border-2 border-emerald-500/30 object-cover"
                            />
                            <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-green-500 border-2 border-[#1a1a1a]"></div>
                        </div>
                        <div>
                            <h2 className="text-white text-xl font-semibold">
                                Dev
                            </h2>
                            <p className="text-emerald-400 text-sm">@wm0x</p>
                            <p className="text-white/60 text-sm mt-1">
                                Member since June 2022
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full sm:w-auto">
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto border-white/10 hover:bg-white/5 flex items-center justify-center px-4 py-2"
                        >
                            <span className="text-white text-sm font-medium flex items-center gap-2">
                                <FaRegEdit className="text-base" />
                                edit
                            </span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#1d1d1d] p-6 rounded-xl border border-white/5 shadow-lg shadow-black/20 mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white text-lg font-semibold">
                        My Projects
                        <span className="ml-2 text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full">
                            {3} Projects
                        </span>
                    </h3>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            name: "Gradly - Grad Projects Portal",
                            updated: "2 days ago",
                            status: "active",
                        },
                        {
                            name: "AI Research Project",
                            updated: "1 week ago",
                            status: "active",
                        },
                        {
                            name: "Web Development Project",
                            updated: "3 weeks ago",
                            status: "archived",
                        },
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`h-3 w-3 rounded-full ${
                                        project.status === "active"
                                            ? "bg-emerald-500"
                                            : "bg-gray-500"
                                    }`}
                                ></div>
                                <span className="text-white font-medium">
                                    {project.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-white/60 text-sm">
                                    Last updated: {project.updated}
                                </span>
                                <div  className="text-white/50 hover:text-white transition-colors">
                                        <ComboboxDropdownMenu />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#1d1d1d] p-6 rounded-xl border border-red-500/20 shadow-lg ">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-red-500 text-lg font-semibold mb-1">
                            Delete Account
                        </h3>
                        <p className="text-white/70">
                            Permanently remove your account and all associated
                            data.
                            <span className="block text-red-700/70 text-sm mt-1">
                                This action cannot be undone.
                            </span>
                        </p>
                    </div>
                    <Button
                        variant="destructive"
                        className="bg-red-600/90 hover:bg-red-700/90 transition-colors"
                    >
                        <span className="text-white text-sm font-medium">
                            Delete Account
                        </span>
                    </Button>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-white/50 text-xs">
                    Profile updated at {new Date().toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
}
