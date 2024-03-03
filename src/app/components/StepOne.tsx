import { Accordion } from "flowbite-react"
import Tool from "./Tool";
import Footer from "./NewGameNav";

const StepOne = (props) => {
    const {tools, setTools, step, setStep}=props;

    return (

        <div style={{ height: '100%' }}>
            <div className='container'>
                <Accordion className='accordeon'>
                    <Accordion.Panel>
                        <Accordion.Title>Utiliser un modèle</Accordion.Title>
                        <Accordion.Content>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Partie personalisée</Accordion.Title>
                        <Accordion.Content>
                            {tools.map((tool, index) =>
                                <Tool tool={tool} key={index} setTools={setTools} />
                            )}
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};
export default StepOne;
