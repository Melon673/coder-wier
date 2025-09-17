import MCQs from "@/Components/Form/MCQs/MCQsCSR";
import { MCQsData } from "@/Components/Form/MCQs/MCQsData";

export default function Forms() {
    return (
        <>
          <MCQs data={MCQsData}/>
        </>
    );
}