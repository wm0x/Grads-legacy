import React from "react";
import { Timeline } from "../ui/pages/presentation/timeline";
import { TextReveal } from "../ui/pages/presentation/text-reveal";
import { NumberTicker } from "../ui/pages/presentation/number-ticker";
import { CheckIcon, ClockIcon, HourglassIcon } from "lucide-react";

export function TimelineDemo() {
    const data = [

        {
            title: "Day 0",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Built and launched Gradly from scratch
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://avatar.vercel.sh/ali"
                            alt="template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://avatar.vercel.sh/wm"
                            alt="template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://avatar.vercel.sh/we"
                            alt="template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://avatar.vercel.sh/sa"
                            alt="template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },

        {
            title: "Day 1",
            content: (
                <div>
                  
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        topic .......
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ 1111
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ 2222
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ 3333
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ 4444
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://avatar.vercel.sh/ali"
                            alt="template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://avatar.vercel.sh/ha"
                            alt="template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://avatar.vercel.sh/ka"
                            alt="template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://avatar.vercel.sh/pe"
                            alt="template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>

                </div>
            ),
        },
        {
    title: "finally",
    content: (
        <div className="space-y-6">
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 md:text-base">
                "Great things never come from comfort zones" — Today we begin our adventure
            </p>
            
            <div className="space-y-8">
                {/* Time Investment Section */}
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-900/30 dark:to-purple-900/30">
                    <h3 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Time Invested</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/50">
                                <ClockIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <NumberTicker 
                                    value={84} 
                                    className="text-4xl font-bold text-black dark:text-white md:text-5xl"
                                />
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">4-5 hours of focused work</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/50">
                                <HourglassIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <NumberTicker 
                                    value={3780} 
                                    className="text-4xl font-bold text-black dark:text-white md:text-5xl"
                                />
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">minutes of progress</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                {/* Motivation Quote */}
                <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 dark:from-amber-900/30 dark:to-orange-900/30">
                    <p className="text-sm italic text-neutral-700 dark:text-neutral-300">
                        "The secret of getting ahead is getting started. Today's effort is tomorrow's achievement."
                    </p>
                </div>
            </div>
        </div>
    ),
},
    ];
    return (
        <div className="relative w-full overflow-clip">
          <div className="text-sm">
            <TextReveal >
                Every great idea deserves to shine.
                 Gradly keeps them alive.
            </TextReveal>
            
          </div>

            <Timeline data={data} />
        </div>
    );
}
