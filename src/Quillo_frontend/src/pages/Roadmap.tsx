const Roadmap = () => {
  return (
    <div className="bg-emerald-950 py-12 px-4 sm:px-6 lg:px-8">
        
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-50 mb-8">REORG. Roadmap</h1>
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-blue-50 h-full"></div>
          
          <div className="space-y-12">
            {/* Milestone 1 */}
            <div className="relative flex items-center">
              <div className="absolute w-4 h-4 bg-blue-900 rounded-full -left-2 border-2 border-white"></div>
              <div className="flex-1 bg-white shadow-md p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-blue-950 mb-2">June - Q3 2023</h2>
                <p>Launched initial version of the platform with core features including expert consultation and basic tokenomics support. Focused on early user feedback and platform stability.</p>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative flex items-center">
              <div className="absolute w-4 h-4  bg-blue-900 rounded-full -left-2 border-2 border-white"></div>
              <div className="flex-1 bg-white shadow-md p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-blue-950 mb-2">August - Q4 2023</h2>
                <p>Implemented advanced AI-driven recommendations for token structure and integrated comprehensive KYC procedures. Expanded backend infrastructure to handle increased demand.</p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative flex items-center">
              <div className="absolute w-4 h-4 bg-blue-900  rounded-full -left-2 border-2 border-white"></div>
              <div className="flex-1 bg-white shadow-md p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-blue-950 mb-2">January - Q1 2024</h2>
                <p>Refined the platform based on user feedback and market trends. Launched new features for enhanced fraud prevention and improved tokenomics analysis.</p>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="relative flex items-center">
              <div className="absolute w-4 h-4 bg-blue-900 rounded-full -left-2 border-2 border-white"></div>
              <div className="flex-1 bg-white shadow-md p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-blue-950 mb-2">July - Q2 2024</h2>
                <p>Expanded marketing efforts and formed strategic partnerships to increase platform visibility. Enhanced user interface for better user experience and engagement.</p>
              </div>
            </div>

            {/* Milestone 5 */}
            <div className="relative flex items-center">
              <div className="absolute w-4 h-4 bg-blue-900  rounded-full -left-2 border-2 border-white"></div>
              <div className="flex-1 bg-white shadow-md p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-blue-950 mb-2">September - Q3-Q4 2024</h2>
                <p>Prepare for the major platform update with new advanced features. Conduct a comprehensive review of the platform’s performance and prepare for a year-end launch event.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
