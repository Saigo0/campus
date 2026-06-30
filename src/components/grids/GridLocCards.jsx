"use client";

import { useState } from "react";
import LocCard from "./LocCard";

export default function GridLocCards({ imoveis, showAdminButtons = false }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = imoveis.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(imoveis.length / itemsPerPage);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 py-12 gap-10">
            {currentItems.map((imovel) => (
                <LocCard
                    key={imovel.id}
                    imovel={imovel}
                    showAdminButtons={showAdminButtons}
                />
            ))}

            {totalPages > 1 && (
                <div className="flex flex-row justify-center items-center gap-4 mt-2 mb-12">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white px-5 py-2 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                    >
                        Anterior
                    </button>
                    
                    <span className="text-md font-bold text-gray-700 dark:text-white">
                        Página {currentPage} de {totalPages}
                    </span>
                    
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="bg-[#1B3B99] text-white px-5 py-2 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#004AE5] transition"
                    >
                        Próxima
                    </button>
                </div>
            )}
        </div>

        
    )
}