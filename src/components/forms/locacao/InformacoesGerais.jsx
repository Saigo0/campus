"use client";

import {
  faHouse,
  faMoneyBill,
  faAddressBook,
  faPhotoFilm,
  faEllipsisVertical,
  faTrash,
  faRightLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Carrossel from "@/components/forms/Carrossel";
import Select from "@/components/forms/Select";
import TextArea from "@/components/inputs/TextArea";
import SectionInfo from "@/components/forms/SectionInfo";
import BoxInfo from "@/components/forms/InfoBox";
import Input from "@/components/inputs/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaRightLong } from "react-icons/fa6";

export default function InformacoesGerais({
  titulo,
  setTitulo,
  descricao,
  setDescricao,
  regras,
  setRegras,
  aluguel,
  setAluguel,
  options,
  setTempoContratoMinimo,
  tempoContratoMinimo,
  condominio,
  taxaCondominio,
  setTaxaCondominio,
  handleImage,
  images,
  setCondominio,
  total,
  selectedImage,
  setSelectedImage,
  setImages,
  setStep,
  errors,
}) {
  const [showModal, setShowModal] = useState(false);

  function deleteImage() {
    const updatedImages = images.filter((img) => img.url !== selectedImage.url);

    setImages(updatedImages);

    if (updatedImages.length > 0) {
      setSelectedImage(updatedImages[0]);
    } else {
      setSelectedImage(null);
    }
    setShowModal(false);
  }

  function goToTheNext() {
    setStep((prev) => prev + 1);
  }

  return (
    <SectionInfo
      title={"Informações gerais"}
      description={"Informe os dados gerais acerca da sua propriedade."}
      icon={faHouse}
      className="flex flex-col gap-10"
    >
      {errors.geral && (
        <div className="mb-4 p-3 rounded-md bg-red-100 text-red-600 text-sm">
          {errors.geral}
        </div>
      )}
      <BoxInfo
        title={"Galeria Visual"}
        icon={faPhotoFilm}
        addImage
        onChange={handleImage}
      >
        {selectedImage && (
          <div className="relative w-full h-140 mb-5">
            <img
              src={selectedImage.url}
              alt=""
              className="h-full object-cover w-full rounded-xl"
            />
            <div className="absolute top-4 right-4 bg-[#EFEFFF] text-black dark:text-white dark:bg-[#131318] rounded-xl shadow-lg overflow-hidden z-10">
              <button
                type="button"
                onClick={deleteImage}
                className="px-4 py-2 dark:text-white hover:bg-[#1B3B99] hover:text-white dark:hover:text-black dark:hover:bg-[#b6c4ff] w-full text-left"
              >
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        )}
        <Carrossel
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        ></Carrossel>
      </BoxInfo>
      <div className="flex flex-col md:flex-row gap-10">
        <div className=" w-full md:w-2/3">
          <BoxInfo
            title={"Dados Gerais"}
            icon={faAddressBook}
            className={"h-full"}
          >
            <Input
              label={"TÍTULO"}
              value={titulo}
              placeholder="Digite aqui o título do imóvel..."
              onChange={setTitulo}
              required
              id={"titulo"}
              error={errors.titulo}
              rounded
            ></Input>
            <TextArea
              label={"DESCRIÇÃO"}
              value={descricao}
              onChange={setDescricao}
              required
              rounded
              placeholder="Descreva aqui o imóvel..."
              id={"descricao"}
            ></TextArea>
            <TextArea
              label={"REGRAS DO IMÓVEL"}
              value={regras}
              onChange={setRegras}
              rounded
              placeholder="Descreva aqui as regras do imóvel..."
              id={"regras"}
            ></TextArea>
          </BoxInfo>
        </div>
        <div className=" w-full md:w-1/3">
          <BoxInfo
            title={"Custos da Locação"}
            icon={faMoneyBill}
            className={"h-full"}
          >
            <Input
              label={"ALUGUEL MENSAL"}
              value={aluguel}
              onChange={setAluguel}
              required
              type="number"
              rounded
              id={"aluguel"}
              error={errors.aluguel}
            ></Input>
            <label htmlFor="tempoContrato" className="text-sm text-gray-600">
              TEMPO MÍNIMO DE CONTRATO
            </label>
            <Select
              instanceId={"tempoContrato"}
              inputId={"tempoContrato"}
              options={options}
              value={tempoContratoMinimo}
              onChange={setTempoContratoMinimo}
            ></Select>
            <div className="flex items-center gap-2 mb-3">
              <label
                htmlFor="condominio"
                className="text-gray-600 text-sm dark:text-white"
              >
                Possui condomínio?
              </label>
              <input
                type="checkbox"
                checked={condominio}
                onChange={() => setCondominio(!condominio)}
                id="condominio"
                className=""
              />
            </div>
            {condominio && (
              <Input
                label={"TAXA DE CONDOMÍNIO"}
                onChange={setTaxaCondominio}
                value={taxaCondominio}
                required
                rounded
                id={"taxaCondominio"}
              ></Input>
            )}
            <div className="flex justify-between p-3 rounded-3xl dark:bg-[#03132c] bg-[#F2EFFF]">
              <p className="text-sm">Total estimado</p>
              <p>R$ {total}</p>
            </div>
          </BoxInfo>
        </div>
      </div>
      <FontAwesomeIcon
        className="text-white rounded-3xl bg-linear-to-r from-[#1B3B99] to-[#819BFF] dark:from-[#b6c4ff] dark:text-black dark:to-[#819BFF] w-full p-2"
        icon={faArrowRight}
        onClick={goToTheNext}
      ></FontAwesomeIcon>
    </SectionInfo>
  );
}
