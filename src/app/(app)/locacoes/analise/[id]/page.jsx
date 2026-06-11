"use client"

import ButtonSection from "@/components/forms/ButtonSection";
import AcceptButton from "@/components/forms/buttons/AcceptButton";
import RefuseButton from "@/components/forms/buttons/RefuseButton";
import LocPageTemplate from "@/components/pageTemplates/LocPageTemplate";


export default function DetalhesAnalise() {

    return (
        <>
            <LocPageTemplate>
                <ButtonSection>
                    <RefuseButton></RefuseButton>
                    <AcceptButton></AcceptButton>
                </ButtonSection>
            </LocPageTemplate>
       </>
    )
}