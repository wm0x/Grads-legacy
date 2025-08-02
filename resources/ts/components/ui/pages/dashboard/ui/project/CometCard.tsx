"use client";

import React, { useRef, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useMotionTemplate,
} from "framer-motion";
import { cn } from "../../../../../lib/utils";
import { InteractiveHoverButton } from "./interactive-hover-button";
import * as Dialog from "@radix-ui/react-dialog";
import { FiPlus } from "react-icons/fi";
import ViewProject from "./view-project";
import { LuView } from "react-icons/lu";

type CometCardProps = {
    title: string;
    category?: string;
    description: string;
    imageSrc: string;
    username: string;
    userImage: string;
    rotateDepth?: number;
    translateDepth?: number;
    className?: string;
};

export const CometCard = ({
    title,
    description,
    imageSrc,
    username,
    userImage,
    category,
    rotateDepth = 11.5,
    translateDepth = 10,
    className,
}: CometCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        [`-${rotateDepth}deg`, `${rotateDepth}deg`]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        [`${rotateDepth}deg`, `-${rotateDepth}deg`]
    );

    const translateX = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        [`-${translateDepth}px`, `${translateDepth}px`]
    );
    const translateY = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        [`${translateDepth}px`, `-${translateDepth}px`]
    );

    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

    const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0) 80%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const [openAdd, setOpenAdd] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    return (
        <div className={cn("perspective-distant transform-3d", className)}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    translateX,
                    translateY,
                }}
                initial={{ scale: 1, z: 0 }}
                whileHover={{
                    scale: 1.05,
                    z: 50,
                    transition: { duration: 0.2 },
                }}
                className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-green-900/40 via-black/30 to-black/10 p-4 shadow-md shadow-white/20"
            >
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <img
                        src={imageSrc}
                        alt={title}
                        style={{
                            position: "absolute",
                            inset: 0,
                            objectFit: "cover",
                            opacity: 0.9,
                        }}
                        className="object-cover group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="mt-4 space-y-2">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <span className="px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 sm:ml-2 flex-shrink-0 inline-flex items-center justify-center ">
                        {category}
                    </span>
                    <p className="text-sm text-gray-300 line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex items-center gap-3">
                    <div className="relative">
                        <img
                            src={`https://avatar.vercel.sh/${username}`}
                            alt={username}
                            width={36}
                            height={36}
                            className="rounded-full object-cover border-2 border-gray-700 shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                        />
                        <div className="absolute inset-0 rounded-full border border-white/10 mix-blend-overlay" />
                    </div>
                    <div className=" flex flex-row w-full items-center justify-between ">
                        <span className="text-sm text-gray-200 font-medium">
                            {username}
                        </span>
                        <div className="flex ">
                            <div className=" flex text-center items-center mr-4 text-green-700 font-bold">
                                <div className="flex gap-2 mr-3">
                                    <Dialog.Root
                                        open={openAdd}
                                        onOpenChange={setOpenAdd}
                                    >
                                        <Dialog.Trigger asChild>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject({
                                                        title,
                                                        description,
                                                        imageSrc,
                                                        username,
                                                        userImage,
                                                        category,
                                                    });
                                                    setOpenAdd(true);
                                                }}
                                                className="p-2 text-green-700 hover:bg-green-700 hover:text-white rounded-md transition-colors flex items-center"
                                                aria-label="view"
                                            >
                                                <LuView className="w-4 h-4 mr-1 text-wrap" />
                                                <span className="text-sm font-bold">
                                                    view
                                                </span>
                                            </button>
                                        </Dialog.Trigger>

                                        <Dialog.Portal>
                                            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                                            <Dialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-lg">
                                                <ViewProject
                                                    project={selectedProject}
                                                />
                                                <button
                                                    onClick={() =>
                                                        setOpenAdd(false)
                                                    }
                                                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                                                >
                                                    ✕
                                                </button>
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>
                                </div>
                            </div>
                            <InteractiveHoverButton
                                className="bg-white"
                                dir="ltr"
                            >
                                download
                            </InteractiveHoverButton>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-2xl mix-blend-overlay"
                    style={{
                        background: glareBackground,
                        opacity: 0.3,
                    }}
                />
            </motion.div>
        </div>
    );
};
