"use client";
import api from "@/app/utils/api";
import { useRouter } from "next/navigation";

export default function AnaliseButtons({ idImovel }) {
  const router = useRouter();

  async function handleAprovar() {
    try {
      await api.put(`/imoveis/aprovar/${idImovel}`);
      alert("Imóvel aprovado!");
      router.push("/locacoes/analise");
    } catch (e) {
      alert("Erro ao aprovar o imóvel.");
    }
  }

  return (
    <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200 mb-6">
      <button 
        onClick={handleAprovar}
        className="bg-green-600 text-white font-bold px-6 py-2 rounded-xl hover:bg-green-700 transition"
      >
        Aceitar
      </button>
      <button className="bg-red-600 text-white font-bold px-6 py-2 rounded-xl hover:bg-red-700 transition">
        Recusar
      </button>
    </div>
  );
}