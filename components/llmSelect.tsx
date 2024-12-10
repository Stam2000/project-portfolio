import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  setModel?: React.Dispatch<React.SetStateAction<string>>;
  currentModel?: string;
};

//TODO Set current model

const LlmSelect = ({ setModel,currentModel }: Props) => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const options = [
    {
      label: "Open AI",
      items: [
        { label: "gpt-4o", value: "gpt-4o" },
        { label: "gpt-4o mini", value: "gpt-4o-mini" },
        { label: "gpt 4", value: "gpt-4" },
        { label: "gpt-4 Turbo", value: "gpt-4-turbo" },
      ],
    },{
      label: "Mixtral",
      items: [
        { label: "Mixtral-8x7B", value: "Mixtral-8x7B" },
        { label: "Mixtral-8x22B", value: "Mixtral-8x22B" },
      ],
    },
    {
      label: "Llama",
      items: [
        { label: "Llama 3.1 405B", value: "Llama-3.1-405B" },
        { label: "Llama 3.1 70B", value: "Llama-3.1-70B" },
      ],
    },
    {
      label: "Others",
      items: [
        { label: "Microsoft WizardLM-2 8x22B", value: "WizardLM-2-8x22B" },
        { label: "Google Gemma 2 27B", value: "Gemma-2-27B" },
        { label: "Qwen 2.5 72B", value: "Qwen-2.5-7B" },
      ],
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
        placeholder={currentModel}
      />
    </div>
  );
};

const LlmSelectChat = ({ setModel,currentModel }: Props) => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const options = [
    {
      label: "Open AI",
      items: [
        { label: "gpt-4o", value: "gpt-4o" },
        { label: "gpt-4o mini", value: "gpt-4o-mini" },
        { label: "gpt 4", value: "gpt-4" },
        { label: "gpt-4 Turbo", value: "gpt-4-turbo" },

      ],
    },
    {
      label: "Llama",
      items: [
        { label: "Llama 3.1 405B", value: "Llama-3.1-405B" },
        { label: "Llama 3.1 70B", value: "Llama-3.1-70B" },
        { label: "Llama 3.1 8B", value: "Llama-3.1-8B" },
      ],
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
        placeholder={currentModel}
      />
    </div>
  );
};

export const SelectModels = ({
  setModelGen,
  currentModelGen,
  setModelFollow,
  currentModelFollow,
  setModelChat,
  currentModelChat,
}: {
  setModelFollow: React.Dispatch<React.SetStateAction<string>>;
  currentModelGen:string,
  setModelChat: React.Dispatch<React.SetStateAction<string>>;
  currentModelFollow:string;
  setModelGen: React.Dispatch<React.SetStateAction<string>>;
  currentModelChat:string;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border h-8 overflow-hidden rounded gap-1 bg-white shadow-md w-full ">
          <img
            className={`object-scale-down`}
            src={`/set.webp`}
            alt={"settingBtn"}
          />
          {/* <Wrench className='text-slate-800' size={24} /><Sparkles size={16} className='text-slate-500' /> */}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-fit flex z-50">
        <div className=" flex flex-col text-sm lg:flex-row items-center justify-evenly gap-2 pt-2">
          <div>
            <span className="font-nunito font-bold">Generator</span>
            <LlmSelect currentModel={currentModelGen} setModel={setModelGen} />
          </div>
          <div>
            <span className="font-nunito font-bold">Follow up questions</span>
            <LlmSelect currentModel={currentModelFollow} setModel={setModelFollow} />
          </div>
          <div>
            <span className="font-nunito font-bold">Chat</span>
            <LlmSelectChat currentModel={currentModelChat} setModel={setModelChat} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
