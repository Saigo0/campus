"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/app/utils/api";
import H1 from "@/components/heading/H1";
import Main from "@/components/home/Main";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "@/components/modal/DeleteModal";

export default function ListarLocacoes() {
  const [imoveis, setImoveis] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const [imovelParaExcluir, setImovelParaExcluir] = useState(false);



  useEffect(() => {
    const userStorage = localStorage.getItem("usuarioCompleto");
    if (!userStorage) {
      router.push("/login");
      return;
    }

    const user = JSON.parse(userStorage);
    if (!user.locador) {
      router.push("/");
      return;
    }
    setIsAuthorized(true);

    async function buscarMeusImoveis() {
      try {
        const res = await api.get(`/imoveis/usuario/${user.id}`);
        setImoveis(res.data);
      } catch (error) {
        console.error("Erro ao buscar seus imóveis:", error);
      } finally {
        setCarregando(false);
      }
    }

    buscarMeusImoveis();
  }, [router]);

  const handleExcluir = async () => {
    if(!imovelParaExcluir) return;

    try {
      await api.delete(`/imoveis/${imovelParaExcluir}`);
      setImoveis((prev) => prev.filter((imovel) => imovel.id !== imovelParaExcluir));

      setShowModal(false);
      setImovelParaExcluir(null);
    } catch (error) {
      setShowModal(false);
      setImovelParaExcluir(null);
      console.error("Erro ao excluir:", error);
      alert("Erro ao excluir o imóvel. Tente novamente.");
    }
  };

  const abrirModalDeExclusao = (id) => {
    setImovelParaExcluir(id);
    setShowModal(true);
  }

  const cancelarExclusao = () => {
    setImovelParaExcluir(null);
    setShowModal(false);
  }

  if (!isAuthorized)
    return (
      <div className="flex justify-center py-32 font-bold text-[#1B3B99]">
        Verificando acesso...
      </div>
    );

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 mt-8 min-h-screen">
      <div className="flex flex-col mb-6 ml-4">
        <H1>Minhas Locações</H1>
        <p className="text-[#575881] dark:text-gray-300 font-semibold">
          {carregando
            ? "Carregando seus imóveis..."
            : `Você possui ${imoveis.length} imóvel(is) cadastrado(s).`}
        </p>
      </div>

      <Main>
        <DeleteModal
          isOpen={showModal}
          onClose={cancelarExclusao}
          onConfirm={() => handleExcluir()}
        ></DeleteModal>
        {!carregando && imoveis.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Você ainda não tem nenhuma locação cadastrada.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imoveis.map((imovel) => (
              <div
                key={imovel.id}
                className="bg-white dark:bg-[#1f1f25] rounded-3xl shadow-md border border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-4"
              >
                <div className="flex justify-between items-start">
                  <h2 className="font-bold text-lg text-[#2A2B51] dark:text-white line-clamp-2">
                    {imovel.dadosGerais?.titulo}
                  </h2>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${imovel.aprovado ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                  >
                    {imovel.aprovado ? "Aprovado" : "Em Análise"}
                  </span>
                </div>

                <p className="text-[#545F71] dark:text-gray-400 text-sm">
                  {imovel.endereco?.cidade} - {imovel.endereco?.bairro}
                </p>

                <div className="mt-auto flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={`/locacoes/editar/${imovel.id}`}
                    className="flex-1 bg-[#F2EFFF] hover:bg-[#DCE1FF] text-[#1B3B99] dark:bg-[#2e2e44] dark:text-[#819BFF] py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} /> Editar
                  </Link>
                  <button
                    onClick={() => abrirModalDeExclusao(imovel.id)}
                    className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <FontAwesomeIcon icon={faTrash} /> Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Main>
    </div>
  );
}
