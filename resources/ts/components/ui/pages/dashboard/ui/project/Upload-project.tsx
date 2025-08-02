import { useState, useEffect } from "react";
import React from "react";
export default function UploadProject() {
    const [pdfFile, setPdfFile] = React.useState<File | null>(null);
    const [imageFile, setImageFile] = React.useState<File | null>(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "",
        progress: 0,
    });
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: string, value: string | number) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Handle file upload
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageFile(e.target.files[0]);
        }
    };
    const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPdfFile(e.target.files[0]);
        }
    };
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            alert("Project submitted successfully!");
            setIsSubmitting(false);
            setFormData({
                title: "",
                description: "",
                status: "",
                progress: 0,
            });
            setFile(null);
        }, 2000);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1  gap-8">
                    <div className=" space-y-3">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-2">
                            Project Title
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            value={formData.title}
                            onChange={(e) =>
                                handleInputChange("title", e.target.value)
                            }
                            placeholder="Enter an amazing project title"
                            className="w-full h-14 px-6 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            required
                        />
                    </div>
                    <div className=" space-y-3 ">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-2">
                            Project Description
                            <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) =>
                                handleInputChange("description", e.target.value)
                            }
                            placeholder="Describe your project's vision, goals, and key features that make it unique"
                            className="w-full min-h-16 max-h-32 px-6 py-4 overflow-hidden text-lg border-2  border-gray-200 dark:border-gray-600 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-vertical"
                            required
                        />
                        <div className="text-right">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {formData.description.length} / 1000 characters
                            </span>
                        </div>
                    </div>
                    <div className="space-y-3 -translate-y-4">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-2">
                            Project Status
                            <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={formData.status}
                            onChange={(e) =>
                                handleInputChange("status", e.target.value)
                            }
                            className=" h-14 px-6 text-lg w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            required
                        >
                            <option value="">Select project status</option>
                            <option value="completed">✅ Completed</option>
                            <option value="not_completed">
                                👀 in progress
                            </option>
                            <option value="not_completed">
                                🚧 Not Completed
                            </option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-row gap-4 w-full items-center">
                    <div className="relative flex-1">
                        <input
                            type="file"
                            accept=".zib"
                            onChange={handlePdfChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            required
                        />
                        <div className="border-2 border-dashed max-h-36 border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 hover:border-green-400 hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 transition-all duration-300 cursor-pointer h-full">
                            <div className="text-4xl mb-3">📄</div>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                {pdfFile ? pdfFile.name : "Upload file"}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                .zib files only
                            </p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                            Max 10MB (ZIP only)
                        </p>
                    </div>

                    <div className="relative flex-1">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="border-2 border-dashed max-h-36 border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 hover:border-green-400 hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 transition-all duration-300 cursor-pointer h-full">
                            <div className="text-4xl mb-3">🖼️</div>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                {imageFile ? imageFile.name : "Upload Image"}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                .jpg, .png, etc.
                            </p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                            Cover image: Max 2MB
                        </p>
                    </div>
                </div>
                <div className="-translate-y-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-16 text-xl font-bold bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-2xl shadow-2xl hover:shadow-green-400/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Submitting Project...
                            </>
                        ) : (
                            <>🚀 Submit Project </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
