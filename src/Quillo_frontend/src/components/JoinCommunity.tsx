import React from 'react';
import { FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa'; // Social icons
import { HiUserGroup } from 'react-icons/hi'; // Community icon
import { FiMail } from 'react-icons/fi'; // Newsletter icon

const JoinCommunity: React.FC = () => {
  return (
    <div className="w-full py-16 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg text-gray-300 mb-12">
          Stay connected with us! Join the community, engage with fellow enthusiasts, and stay updated.
        </p>

        {/* Community Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1414] p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <HiUserGroup size={40} className="mx-auto text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Become a Member</h3>
            <p className="text-gray-300 mb-4 font-leagueSpartan">
              Join our growing community of developers, builders, and innovators. Be part of something bigger.
            </p>
            <a href="#" className="text-blue-500 font-bold hover:underline">Join Now</a>
          </div>

          <div className="bg-[#1414] p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <FiMail size={40} className="mx-auto text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4 font-leagueSpartan">
              Subscribe to our newsletter to receive the latest news, updates, and exclusive content.
            </p>
            <a href="#" className="text-yellow-400 font-bold hover:underline">Subscribe</a>
          </div>

          <div className="bg-[#1414] p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <FaDiscord size={40} className="mx-auto text-purple-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Join on Discord</h3>
            <p className="text-gray-300 mb-4 font-leagueSpartan">
              Engage in real-time conversations with the community on Discord. Let's build together!
            </p>
            <a href="#" className="text-purple-500 font-bold hover:underline">Join Discord</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-gray-300 text-3xl mb-8">
          <a href="https://x.com/@reorgDaos" className="hover:text-white transition-colors">X</a>
          <a href="#" className="hover:text-white transition-colors"><FaTelegram /></a>
          <a href="#" className="hover:text-white transition-colors"><FaYoutube /></a>
        </div>

        {/* Call to Action */}
        <p className="text-lg text-gray-300 font-leagueSpartan">
          Connect with us on social media and become part of the conversation!
        </p>
      </div>
    </div>
  );
};

export default JoinCommunity;
