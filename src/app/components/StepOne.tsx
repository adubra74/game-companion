import { Accordion } from "flowbite-react"
import Tool from "./Tool";

const StepOne = (props) => {
    const {tools, setTools, step, setStep}=props;

    return (

        <div className="h-full">
            <div className="flex flex-col justify-center items-center p-8">
                <Accordion className="w-full">
                    <Accordion.Panel>
                        <Accordion.Title>Utiliser un modèle</Accordion.Title>
                        <Accordion.Content>
                        <p> -- Aucun modèle existant pour le moment --</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Partie personalisée</Accordion.Title>
                        <Accordion.Content className="pt-4">
                            {tools.map((tool, index) =>
                                <Tool tool={tool} key={index} setTools={setTools}  />
                            )}
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};
export default StepOne;
