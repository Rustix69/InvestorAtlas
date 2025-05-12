import React from 'react';

interface RazorpayErrorGuideProps {
  errorMessage: string;
  onClose: () => void;
}

const RazorpayErrorGuide: React.FC<RazorpayErrorGuideProps> = ({ errorMessage, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg border border-purple-700 shadow-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-white">Payment Error</h2>
        
        <div className="bg-red-900/30 border border-red-700 rounded-md p-3 mb-6">
          <p className="text-red-400 font-medium">Error: {errorMessage}</p>
        </div>
        
        <div className="space-y-4 text-white/90">
          <h3 className="font-semibold text-lg">Troubleshooting Guide</h3>
          
          <div>
            <h4 className="font-medium">For Users:</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Refresh the page and try again</li>
              <li>Check your internet connection</li>
              <li>Try using a different browser</li>
              <li>Clear your browser cache and cookies</li>
              <li>If the problem persists, please contact support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium">For Developers:</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Check that Razorpay API keys are correctly configured in both frontend and backend</li>
              <li>Ensure API keys are valid and active in the Razorpay dashboard</li>
              <li>Verify backend server is running and accessible</li>
              <li>Check browser console for detailed error messages</li>
              <li>Review network requests in developer tools</li>
            </ul>
          </div>
          
          <div className="bg-purple-900/30 border border-purple-700 rounded-md p-3 mt-4">
            <h4 className="font-medium">For Admin/Implementation:</h4>
            <p className="mt-1 text-sm">
              The most common cause of this error is incorrect Razorpay API keys. 
              Make sure valid API keys are set in:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><code>Backend/.env</code> - RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET</li>
              <li><code>Frontend/.env</code> - VITE_RAZORPAY_KEY_ID</li>
            </ul>
            <p className="mt-2 text-sm">
              Get your API keys from the <a href="https://dashboard.razorpay.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">Razorpay Dashboard</a> 
              under Settings &gt; API Keys.
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded-md text-white font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RazorpayErrorGuide; 