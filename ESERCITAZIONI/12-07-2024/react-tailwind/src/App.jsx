import avatarImage from './assets/images/img.png';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0b1a2d]">
      <div className="bg-[#14253d] rounded-xl shadow-custom max-w-xs p-6">
        <img src="\src\assets\images\image-equilibrium.jpg" alt="Equilibrium" className="rounded-lg mb-6"/>
        <h1 className="text-white text-lg font-semibold mb-2">Equilibrium #3429</h1>
        <p className="text-[#8bacda] text-sm mb-4">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-[#00fff7]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c2.7 0 4.9-2.2 4.9-4.9S14.7-1.8 12-1.8 7.1 0.4 7.1 3.1 9.3 8 12 8zm0 1.2C9.3 9.2 7.1 11.4 7.1 14.1S9.3 19 12 19s4.9-2.2 4.9-4.9S14.7 9.2 12 9.2zm0 1.2c1.5 0 2.8 1.2 2.8 2.8S13.5 16 12 16s-2.8-1.2-2.8-2.8S10.5 10.4 12 10.4z" />
            </svg>
            <span className="text-[#00fff7] font-semibold text-sm">0.041 ETH</span>
          </div>
          <span className="text-[#8bacda] text-sm">3 days left</span>
        </div>
        <div className="flex items-center border-t border-[#2c3a5a] pt-4">
          <img src={avatarImage} alt="Jules Wyvern" className="w-8 h-8 rounded-full mr-3" />
          <span className="text-[#8bacda] text-sm">
            Creation of <span className="text-white">Adriana</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App
