import { useState } from "react";
import axios from "axios";

import FormHeader from "./FormHeader";
import {FormInput, FormPara} from "./FormInput";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

function CreateCampaign() {
    const [walletAddr, setWalletAddr] = useState<string>("")
    const [campaignName, setCampaignName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [target, setTarget] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")

    const navigate = useNavigate();

    function resetFormFields() {
        setWalletAddr("");
        setCampaignName("");
        setDescription(""); // Clear description
        setTarget("");
        setDeadline("");
    }

    async function handleClick() {
        const payload = {
            data: {
                owner: walletAddr, 
                title: campaignName, 
                description: description, 
                target: Number(target), 
                deadline: Number(deadline), 
                image: "THIS IS THE LINK TO THE IMAGES", 
                accountAddress: walletAddr 
            }
        };

        try {
            const response = await axios.post('http://localhost:3000/apis/createCampaigns', payload);
            console.log('Response:', response.data);
            resetFormFields();  // Call reset after successful submission
            navigate("/")
        } catch (error) {
            alert(error)
            console.error('Error creating campaign:', error);
        }
    }

    return (    
        <div className="w-full bg-[#1A1A1A] p-4">
            <div className="flex flex-col gap-3 max-w-[700px] mx-auto ">
                <FormHeader title={"Launch Your Crowdfunding Campaign!!"}/>
                <FormInput name="Owner's Wallet Address" placeholder="Enter wallet address" type="text" onChange={(e) => setWalletAddr(e.target.value)} value={walletAddr}/>
                <FormInput name="Name" placeholder="Enter campaign name" type="text" onChange={(e) => setCampaignName(e.target.value)} value={campaignName}/>
                <FormPara name="Description" placeholder="Write a detailed description of your crowdfunding campaign" type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
                <FormInput name="Target" placeholder="Enter target amount" type="number" onChange={(e) => setTarget(e.target.value)} value={target}/>
                <FormInput name="Deadline" placeholder="Enter deadline" type="number" onChange={(e) => setDeadline(e.target.value)} value={deadline}/>
                <SubmitButton onClick={handleClick}/>
            </div>
        </div>
    )
}

export default CreateCampaign;