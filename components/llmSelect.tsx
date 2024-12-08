import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Wrench,Sparkles } from 'lucide-react';
import { SparkleSVG } from './SVG';


type Props = {
  setModel?: React.Dispatch<React.SetStateAction<string>>;
};

const LlmSelect = ({ setModel }: Props) => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const options = [
    { label: 'Open AI', items: [
        { label: 'gpt-4o', value: 'gpt-4o' },
        { label: 'gpt-4o mini', value: 'gpt-4o-mini' },
        { label: 'gpt 4', value: 'gpt-4' },
        { label: 'gpt-4 Turbo', value: 'gpt-4-turbo' },
        { label: 'gpt-3.5-turbo', value: 'gpt-3.5' },
      ]
    },
    { label: 'Mixtral', items: [
        { label: 'Mixtral-8x7B', value: 'Mixtral-8x7B' },
        { label: 'Mixtral-8x22B', value: 'Mixtral-8x22B' },
      ]
    },
    { label: 'Llama', items: [
        { label: 'Llama 3.1 405B', value: 'Llama-3.1-405B' },
        { label: 'Llama 3.1 70B', value: 'Llama-3.1-70B' },
        { label: 'Llama 3.1 8B', value: 'Llama-3.1-8B' },
      ]
    },
    { label: 'Others', items: [
        { label: 'Microsoft WizardLM-2 8x22B', value: 'WizardLM-2-8x22B' },
        { label: 'Google Gemma 2 27B', value: 'Gemma-2-27B' },
        { label: 'Qwen 2.5 72B', value: 'Qwen-2.5-7B' },
      ]
    },
  ];

  const handleChange = (e: { value: string }) => {
    setSelectedModel(e.value);
    if (setModel) setModel(e.value);
  };

  return (
    <div>
      <Dropdown 
        value={selectedModel} 
        options={options} 
        onChange={handleChange} 
        optionGroupLabel="label" 
        optionGroupChildren="items"
        placeholder="Select a model"
      />
    </div>
  );
};

export const SelectModels = ({setModelGen,setModelFollow,setModelChat}:{setModelFollow:React.Dispatch<React.SetStateAction<string>>,setModelChat:React.Dispatch<React.SetStateAction<string>>,setModelGen:React.Dispatch<React.SetStateAction<string>>})=>{

  return(

    (
      <Popover>
        <PopoverTrigger asChild>
            <button className="border h-8 overflow-hidden rounded gap-1 bg-white shadow-md w-full " >
              <img className={`object-scale-down`} src={`/set.webp`}  alt={"settingBtn"}/>
              {/* <Wrench className='text-slate-800' size={24} /><Sparkles size={16} className='text-slate-500' /> */}
            </button>
        </PopoverTrigger>
        <PopoverContent className="w-fit flex z-50">
        <div 
          className=" flex flex-col text-sm lg:flex-row items-center justify-evenly gap-2 pt-2" >
          <div  >
            <span className="font-nunito font-bold">Generator</span>
            <LlmSelect setModel={setModelGen} />
          </div>
          <div>
            <span className="font-nunito font-bold">Follow up questions</span>
            <LlmSelect setModel={setModelFollow} />
          </div>
          <div>
            <span className="font-nunito font-bold">Chat</span>
            <LlmSelect setModel={setModelChat} />
          </div>
      </div>
        </PopoverContent>
      </Popover>
    )
  )
}
