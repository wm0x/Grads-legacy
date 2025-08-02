import React, { useState } from "react";
import { ProjectSearch } from "./ui/project/ProjectSearch";
import { CometCard } from "./ui/project/CometCard";
import { FiPlus } from "react-icons/fi";
const dummyProjects = [
    {
        title: "Smart Attendance System",
        category: "technique",

        description:
            "AI-powered facial recognition system for automated student attendance tracking with 98% accuracy.",
        imageSrc:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Ali Alshehri",
        userImage:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Graduation Project Portal",
        description:
            "Comprehensive platform for students and advisors to manage graduation projects with integrated plagiarism checking.",
        imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Sarah",
        userImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Campus Navigation App",
        description:
            "Augmented reality wayfinding system for university campuses with accessibility features.",
        imageSrc:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Tech Team",
        userImage:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Virtual Lab Platform",
        description:
            "Cloud-based laboratory simulations for STEM education with real-time collaboration tools.",
        imageSrc:
            "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Noura",
        userImage:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "E-Learning Analytics Dashboard",
        description:
            "Data visualization platform for tracking student engagement and performance metrics.",
        imageSrc:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Data Science Group",
        userImage:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Cafeteria Menu AI",
        description:
            "Machine learning system that predicts and recommends daily cafeteria menus based on student preferences.",
        imageSrc:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Food Team",
        userImage:
            "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Smart Attendance System",
        description:
            "AI-powered facial recognition system for automated student attendance tracking with 98% accuracy.",
        imageSrc:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Ali Alshehri",
        userImage:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Graduation Project Portal",
        description:
            "Comprehensive platform for students and advisors to manage graduation projects with integrated plagiarism checking.",
        imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Sarah",
        userImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Campus Navigation App",
        description:
            "Augmented reality wayfinding system for university campuses with accessibility features.",
        imageSrc:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Tech Team",
        userImage:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Virtual Lab Platform",
        description:
            "Cloud-based laboratory simulations for STEM education with real-time collaboration tools.",
        imageSrc:
            "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Noura",
        userImage:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "E-Learning Analytics Dashboard",
        description:
            "Data visualization platform for tracking student engagement and performance metrics.",
        imageSrc:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Data Science Group",
        userImage:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
        title: "Cafeteria Menu AI",
        description:
            "Machine learning system that predicts and recommends daily cafeteria menus based on student preferences.",
        imageSrc:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        username: "Food Team",
        userImage:
            "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
];
export default function DashboardProjects() {
    const [searchWord, setSearchWord] = useState<string>("");

    const filteredProjects = dummyProjects.filter((project) =>
        project.title.toLowerCase().includes(searchWord.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#0e0e0e] text-white flex items-start justify-between p-4 gap-4 w-full">
            <div className="flex-1 flex flex-col gap-6">
                <ProjectSearch onSearch={setSearchWord} />


                <div
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-12 mb-28"
                    dir="ltr"
                >
                    {filteredProjects.length === 0 ? (
                        <div className="text-white text-center col-span-full text-2xl py-10 ">
                            <span className="border p-2 rounded-xl border-green-600 text-gray-600 ">
                                not found
                            </span>{" "}
                            !!
                        </div>
                    ) : (
                        filteredProjects.map((project, index) => (
                            <CometCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                username={project.username}
                                userImage={project.userImage}
                                category={project.category}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
