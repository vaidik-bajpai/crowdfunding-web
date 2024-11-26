import { BrowserRouter, Route, Routes } from "react-router-dom";
import Campaign from "./component/Campaign";
import ListCampaigns from "./component/ListCampaigns";
import Header from "./component/Header";
import CreateCampaign from "./component/CreateCampaign";
import SignupForm from "./component/SignupForm";
import SigninForm from "./component/SigninForm";
import DonateToCampaign from "./component/DonateToCampaign";
// import ListCampaigns from "./component/ListCampaigns";

function App() {
  const Campaigns = [
    {
        id: 1,
        campaignTitle: "Clean Water Initiative",
        description: "Help provide access to clean water in underprivileged communities.",
        target: 10000, // Target amount to raise
        deadline: 1672531199, // Unix timestamp for deadline
        image: "https://example.com/images/clean-water.jpg", // Replace with actual image URL
        amountCollected: 5000 // Amount collected so far
    },
    {
        id: 2,
        campaignTitle: "Tree Planting Drive",
        description: "Join us in planting trees to combat climate change.",
        target: 15000,
        deadline: 1675209599,
        image: "https://example.com/images/tree-planting.jpg",
        amountCollected: 7000
    },
    {
        id: 3,
        campaignTitle: "Support Local Artists",
        description: "Donate to support local artists and their creative projects.",
        target: 5000,
        deadline: 1677753600,
        image: "https://example.com/images/local-artists.jpg",
        amountCollected: 2000
    },
    {
        id: 4,
        campaignTitle: "Food Security Program",
        description: "Help us provide food for those in need.",
        target: 20000,
        deadline: 1680336000,
        image: "https://example.com/images/food-security.jpg",
        amountCollected: 12000
    },
    {
        id: 5,
        campaignTitle: "Animal Rescue Fund",
        description: "Contribute to the rescue and care of abandoned animals.",
        target: 8000,
        deadline: 1683033600,
        image: "https://example.com/images/animal-rescue.jpg",
        amountCollected: 3000
    }
];

    return (
      <div className="min-h-screen bg-white">
        <BrowserRouter>
          <Header /> {/* Always rendered at the top */}
          <Routes>
            <Route path="/dashboard" element={<ListCampaigns />} />
            <Route path="/campaign/:id" element={<Campaign />} />
            <Route path="/campaign/add" element={<CreateCampaign />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/signin" element={<SigninForm />} />
            <Route path="/donate" element={<DonateToCampaign />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;