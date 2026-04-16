import React, { useState } from 'react';

const AccountPrivacy = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [settings, setSettings] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    showEmail: false,
    showPhone: false,
    dataSharing: false,
    personalizedAds: true
  });

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPasswordModal(false);
      alert('Password changed successfully!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    }, 1000);
  };

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDeleteAccount = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Account deletion initiated');
      setShowDeleteModal(false);
    }, 1500);
  };

  const SettingRow = ({ icon, label, desc, setting, type = 'toggle' }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-3">
        <div className="text-lg">{icon}</div>
        <div>
          <p className="font-medium text-gray-800 text-sm">{label}</p>
          <p className="text-xs text-gray-400">{desc}</p>
        </div>
      </div>
      {type === 'toggle' ? (
        <button
          onClick={() => toggleSetting(setting)}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${settings[setting] ? 'bg-gray-800' : 'bg-gray-200'}`}
        >
          <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${settings[setting] ? 'translate-x-4' : 'translate-x-1'}`} />
        </button>
      ) : (
        <button onClick={() => setShowPasswordModal(true)} className="text-xs text-gray-600 hover:text-gray-900 font-medium">
          Change
        </button>
      )}
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">Privacy & Security</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Manage your account privacy settings</p>
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-xl border shadow border-gray-100 mb-4 overflow-hidden">
        <div className="px-4 py-3 bg-gray-100 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-base">🔒</span>
            <span className="font-semibold text-gray-800 text-sm">Security</span>
          </div>
        </div>
        <div className="p-4">
          <SettingRow icon="🔐" label="Change Password" desc="Update your password" setting="password" type="button" />
          <SettingRow icon="🛡️" label="Two-Factor Auth" desc="Add extra security layer" setting="twoFactorAuth" />
          <SettingRow icon="📧" label="Login Alerts" desc="Email on new login" setting="loginAlerts" />
        </div>
      </div>

      {/* Privacy Section */}
      <div className="bg-white rounded-xl border border-gray-100 mb-4 overflow-hidden">
        <div className="px-4 py-3 bg-gray-100 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-base">👁️</span>
            <span className="font-semibold text-gray-800 text-sm">Privacy</span>
          </div>
        </div>
        <div className="p-4">
          <SettingRow icon="📧" label="Show Email" desc="Visible to others" setting="showEmail" />
          <SettingRow icon="📱" label="Show Phone" desc="Visible to others" setting="showPhone" />
        </div>
      </div>

      {/* Data Section */}
      <div className="bg-white rounded-xl border border-gray-100 mb-4 overflow-hidden">
        <div className="px-4 py-3 bg-gray-100 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-base">📊</span>
            <span className="font-semibold text-gray-800 text-sm">Data & Privacy</span>
          </div>
        </div>
        <div className="p-4">
          <SettingRow icon="🔄" label="Data Sharing" desc="Share with partners" setting="dataSharing" />
          <SettingRow icon="🎯" label="Personalized Ads" desc="Ads based on interests" setting="personalizedAds" />
          <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div className="flex items-center gap-3">
              <span className="text-lg">📥</span>
              <div>
                <p className="font-medium text-gray-800 text-sm">Download Data</p>
                <p className="text-xs text-gray-400">Get your account data</p>
              </div>
            </div>
            <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">Request</button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-xl border border-red-200 overflow-hidden">
        <div className="px-4 py-3 bg-red-100 border-b border-red-200">
          <div className="flex items-center gap-2">
            <span className="text-base">⚠️</span>
            <span className="font-semibold text-red-800 text-sm">Danger Zone</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-red-800 text-sm">Delete Account</p>
              <p className="text-xs text-red-600">Permanently delete your account</p>
            </div>
            <button onClick={() => setShowDeleteModal(true)} className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Change Password</h2>
              <button onClick={() => setShowPasswordModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <form onSubmit={handlePasswordSubmit}>
              <div className="space-y-3">
                <input type="password" name="currentPassword" placeholder="Current Password" value={passwordData.currentPassword} onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" required />
                <input type="password" name="newPassword" placeholder="New Password" value={passwordData.newPassword} onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={passwordData.confirmPassword} onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" required />
                <button type="submit" disabled={isLoading} className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50">
                  {isLoading ? 'Changing...' : 'Change Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center shad justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-5">
            <div className="text-center mb-4">
              <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center text-2xl">⚠️</div>
              <h2 className="text-lg font-bold text-gray-800">Delete Account?</h2>
              <p className="text-xs text-gray-500 mt-1">This action cannot be undone</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg mb-4">
              <p className="text-xs text-red-800">This will permanently remove all your data</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
              <button onClick={handleDeleteAccount} className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPrivacy;