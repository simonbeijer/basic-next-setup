"use client";
import { useState, useEffect } from "react";
import { useUserContext } from "@/app/context/userContext";
import TermsModal from "@/app/components/termsModal";

export default function Dashboard() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const { user } = useUserContext();

  useEffect(() => {
    const termsAccepted = localStorage.getItem('personal-letter-llm-terms-accepted');
    if (!termsAccepted) {
      setShowTermsModal(true);
    }
  }, []);

  const closeTermsModal = () => {
    setShowTermsModal(false);
  };

  const getUserInitials = (name) => {
    if (!name) return 'JD';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatMemberSince = () => {
    return 'January 2024';
  };

  return (
    <div className="h-[calc(100vh-3rem)] bg-gray-50 flex flex-col overflow-hidden">
      <TermsModal isOpen={showTermsModal} onClose={closeTermsModal} />
      
      <div className="flex-1 w-full max-w-4xl mx-auto p-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Here's your user information and dashboard overview.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900">User Information</h2>
          </div>

          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg">
              {getUserInitials(user?.name)}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-900">{user?.name || 'John Doe'}</h3>
              <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium w-fit">
                Active
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-gray-900">Email</span>
              </div>
              <p className="text-gray-700">{user?.email || 'john.doe@example.com'}</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold text-gray-900">Location</span>
              </div>
              <p className="text-gray-700">Gothenburg, SE</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-gray-900">Member Since</span>
              </div>
              <p className="text-gray-700">{formatMemberSince()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
