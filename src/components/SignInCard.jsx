import { Gitlab } from 'lucide-react';
import React, { useState } from 'react';
import dark_logo from '../assets/dark_logo.jpg';

const LoginPage = () => {
  const [selectedOption, setSelectedOption] = useState('saas');

const saasOptions = [
    {
        key: '1',
        name: 'Github',
        icon: '/api/placeholder/20/20',
        title: 'Sign in with Github'
    },
    {
        key: '2',
        name: 'Bitbucket',
        icon: '/api/placeholder/20/20',
        title: 'Sign in with Bitbucket'
    },
    {
        key: '3',
        name: 'Azure Devops',
        icon: '/api/placeholder/20/20',
        title: 'Sign in with Azure Devops'
    },
    {
        key: '4',
        name: 'GitLab',
        icon: '/api/placeholder/20/20',
        title: 'Sign in with GitLab'
    }
];
    const selfHostedOptions = [
    {
        key: '1',
        id: 'gitlab',
        name: 'Self Hosted GitLab',
        icon: '/api/placeholder/20/20',
    },
    {
        key: '2',
        id: 'sso',
        name: 'Sign in with SSO',
        icon: '/api/placeholder/20/20',
    }
    ];
  

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center flex-col ">
      <div className="w-full mx-4 bg-white border rounded-2xl shadow-lg p-8 mb-10">
        {/* Logo and Title */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <img 
            src={dark_logo} 
            alt="CodeAnt AI Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-medium">CodeAnt AI</span>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-8">
          Welcome to CodeAnt AI
        </h1>

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            className={`flex-1 py-3 rounded-lg text-center transition-colors ${
              selectedOption === 'saas'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setSelectedOption('saas')}
          >
            SAAS
          </button>
          <button
            className={`flex-1 py-3 rounded-lg text-center transition-colors ${
              selectedOption === 'self-hosted'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setSelectedOption('self-hosted')}
          >
            Self Hosted
          </button>
        </div>

        {/* Login Options */}
        {selectedOption === 'saas' ? (
          <>
          {/* GitHub, Bitbucket, Azure DevOps, and GitLab */}
          {(saasOptions).map((option,index) => (
              <button
                key={option.name}
                className="w-2/3 mx-auto mb-4 py-3 px-4 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <img src={option.icon} alt={option.name} className="w-5 h-5" />
                {option.title}
              </button>
            ))}
          </>
        ) : (
          <>
            {selfHostedOptions.map((option,index) => (
              <button
                key={option.name}
                className="w-2/3 mx-auto mb-4 py-3 px-4 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <img src={option.icon} alt={option.name} className="w-5 h-5" />
                Sign in with {option.name}
              </button>
            ))}
          </>
        )}

        
      </div>
      {/* Privacy Policy */}
      <p className="text-sm text-center text-gray-600">
          By signing up you agree to the{' '}
          <a href="#" className="text-gray-900 font-medium">
            Privacy Policy
          </a>
          
        </p>
    </div>
  );
};

export default LoginPage;