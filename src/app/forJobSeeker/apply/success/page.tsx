'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SuccessPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleHomeClick = () => {
    setShowModal(true);
  };

  const handleCreateProfile = () => {
    router.push('/create-profile');
  };

  const handleMaybeLater = () => {
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto py-40 px-4 text-center space-y-6">
      <h1 className="text-2xl font-semibold text-[--color-primary]">Application Submitted!</h1>
      <p className="text-[--color-text-muted]">Your application has been submitted successfully.</p>

      <div className="space-y-4">
        <button
          onClick={() => router.push('/myApplications')}
          className="w-full button"
        >
          View Application
        </button>
        <button
          onClick={handleHomeClick}
          className="w-full inverseButton2 border-[var(--primary-color)] text-[--color-text]"
        >
          Back Home
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000055]  z-50">
          <div className="bg-white p-6 rounded-lg max-w-[800px] w-full text-center shadow-lg">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">Secure Your Spot with a Profile</h2>
            <h4 className=" text-gray-700 mb-6">
              Would you like to create a profile now to track your application, save your details for future opportunities, and get personalised job alerts?
            </h4>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleCreateProfile}
                className="button"
                style={{borderRadius: '50px', }}
              >
                Yes, create my profile now
              </button>
              <button
                onClick={handleMaybeLater}
                className="inverseButton"
                style={{borderRadius: '50px', }}
              >
                No, maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
