import { useState } from "react";
import axios from "axios";

import FormHeader from "./FormHeader";
import { FormInput, FormPara } from "./FormInput";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

function CreateCampaign() {
  const [walletAddr, setWalletAddr] = useState<string>("");
  const [campaignName, setCampaignName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [tokenAmount, setTokenAmount] = useState<string>(""); // Changed initial value to an empty string
  const [tokenAddress, setTokenAddress] = useState<string>(""); // Changed initial value to an empty string

  const navigate = useNavigate();

  function resetFormFields() {
    setWalletAddr("");
    setCampaignName("");
    setDescription("");
    setTarget("");
    setDeadline("");
    setTokenAmount(""); // Reset tokenAmount
    setTokenAddress(""); // Reset tokenAddress
  }

  async function handleClick() {
    let day, year, month;
    if (deadline) {
      const date = new Date(deadline);
      day = date.getDate();
      month = date.getMonth();
      year = date.getFullYear();
    }
    const payload = {
      data: {
        owner: walletAddr,
        title: campaignName,
        description: description,
        target: Number(target),
        date: 10,
        month: 12,
        year: 2024,
        image: "THIS IS THE LINK TO THE IMAGES",
        accountAddress: walletAddr,
        equityTokens: tokenAmount,
        equityTokenAddress: tokenAddress,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/apis/createCampaigns",
        payload
      );
      console.log("Response:", response.data);
      resetFormFields();
      navigate("/dashboard");
    } catch (error) {
      alert(error);
      console.error("Error creating campaign:", error);
    }
  }

  return (
    <div className="w-full bg-white p-4">
      <div className="flex flex-col gap-3 p-4 rounded-lg max-w-[700px] mx-auto shadow-2xl">
        <FormHeader title={"Launch Your Crowdfunding Campaign!!"} />
        <FormInput
          name="Owner's Wallet Address"
          placeholder="Enter wallet address"
          type="text"
          onChange={(e) => setWalletAddr(e.target.value)}
          value={walletAddr}
        />
        <FormInput
          name="Name"
          placeholder="Enter campaign name"
          type="text"
          onChange={(e) => setCampaignName(e.target.value)}
          value={campaignName}
        />
        <FormPara
          name="Description"
          placeholder="Write a detailed description of your crowdfunding campaign"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <FormInput
          name="Target"
          placeholder="Enter target amount"
          type="number"
          onChange={(e) => setTarget(e.target.value)}
          value={target}
        />
        <FormInput
          name="Deadline"
          placeholder="Enter deadline"
          type="date"
          onChange={(e) => setDeadline(e.target.value)}
          value={deadline}
        />
        <div>
          <FormInput
            name="Token Amount"
            placeholder="Enter the token amount"
            type="text"
            onChange={(e) => setTokenAmount(e.target.value)}
            value={tokenAmount}
          />
          <FormInput
            name="Token Address"
            placeholder="Enter the token address"
            type="text"
            onChange={(e) => setTokenAddress(e.target.value)}
            value={tokenAddress}
          />
        </div>
        <SubmitButton onClick={handleClick} />
      </div>
    </div>
  );
}

export default CreateCampaign;
