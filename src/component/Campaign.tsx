import campaignimage from "../assets/campaign.avif";

function Campaign() {
    let target = 10000;
    let amountCollected = 8000; 

    return (
        <div className="flex flex-col scrollbar-thin scrollbar-thumb-scroll-thumb scrollbar-track-scroll-track scrollbar-thumb-rounded gap-6 bg-[#1A1A1A] text-white p-6 shadow-lg w-full mx-auto md:p-10">
            {/* Campaign Title */}
            <div className="text-2xl font-bold mb-4 text-center md:text-4xl lg:text-5xl">
                Sustainable Homes for All: Eco-Housing Revolution
            </div>

            {/* Campaign Image */}
            <img
                src={campaignimage}
                alt="Campaign Image"
                className="w-fit h-56 object-cover rounded-lg shadow-md m-auto md:h-64 md:h-80"
            />

            {/* Campaign Description */}
            <div className="flex flex-col gap-3">
                <div className="text-lg font-semibold md:text-xl lg:2xl">Description</div>
                <div className="flex flex-col gap-3 text-sm text-gray-300 leading-relaxed px-2 italic md:text-base lg:text-lg">
                    <p>Our mission is to build affordable, sustainable housing communities using 100% eco-friendly materials and renewable energy sources. By leveraging cutting-edge green technology, we aim to create homes that minimize environmental impact while offering a high quality of living. These homes are designed to reduce carbon footprints, use solar energy for electricity, and employ rainwater harvesting systems for water conservation.</p>
                    <p>We plan to start by building 50 homes in underprivileged neighborhoods. Each home will be energy-efficient, with built-in smart systems to optimize water and energy use. Your contributions will fund construction materials, renewable energy systems, and community-building programs.</p>
                    <p>Help us take the first step toward a greener, more sustainable future for all!</p>
                </div>
            </div>

            {/* Target and Amount Collected */}
            <div className="flex justify-between text-sm font-semibold md:text-base lg:text-lg">
                <div>Target: <span className="text-green-400">${target.toLocaleString()}</span></div>
                <div>Collected: <span className="text-green-400">${amountCollected.toLocaleString()}</span></div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-3 dark:bg-gray-700 md:h-4 lg:h-5">
                <div className="bg-green-500 h-3 rounded-full md:h-4 lg:h-5" style={{ width: `${(amountCollected / target) * 100}%` }}></div>
            </div>
            <div className="text-sm text-gray-400">Progress: {(amountCollected / target) * 100}%</div>

            {/* Donators */}
            <div>
                <div className="text-lg font-semibold mb-2 md:text-xl lg:2xl">Donators</div>
                <div className="flex flex-col m-auto text-sm bg-[#222222] p-3 rounded-lg space-y-2 max-w-[800px] md:text-base lg:text-lg">
                    {[
                        { name: 'Vaidik Bajpai', amount: 200 },
                        { name: 'Keshav Mittal', amount: 100 },
                        { name: 'Aviral Rawat', amount: 500 },
                        { name: 'Aastha Shukla', amount: 1500 },
                        { name: 'Ishita Saxena', amount: 2000 }
                    ].map((donator, index) => (
                        <div key={index} className="flex justify-between text-gray-300">
                            <div>{donator.name}</div>
                            <div className="font-bold text-green-400">${donator.amount}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Donate Button */}
            <button className="self-center px-5 py-2 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600 transition-colors duration-300">
                Donate Now
            </button>
        </div>
    );
}

export default Campaign;
