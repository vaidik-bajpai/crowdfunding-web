import CampaignCard, {CampaignCardInterface} from "./CampaignCard";
import campaignimage from "../assets/campaign.avif";
import { useEffect } from "react";
import axios from "axios";

interface ListCampaignsInterface {
    Campaigns: CampaignCardInterface[]
}

function ListCampaigns({Campaigns}: ListCampaignsInterface) {
    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get("http://localhost:3000/apis/getCampaigns");
                console.log(response.data); // Handle the fetched data here
            } catch (error) {
                console.error("Error fetching campaigns:", error);
            }
        };

        fetchCampaigns();
    }, []); 
    return (
        <div className="flex flex-col items-center p-8 gap-6 md:flex-row flex-wrap justify-center">
            {Campaigns.map((campaign, index) => (
                <CampaignCard key={index} id={index} campaignTitle={campaign.campaignTitle} description={campaign.description} target={campaign.target} deadline={campaign.deadline} image={campaignimage} amountCollected={campaign.amountCollected}/>
            ))}
        </div>
    );
}

export default ListCampaigns;
