
import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, LogOut } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const { isAdmin, login, logout } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (!success) {
      setError('Invalid password');
    } else {
      setPassword('');
      setError('');
      setShowLogin(false);
    }
  };

  if (isAdmin) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white p-2 rounded-md shadow-md">
        <div className="text-sm text-green-600 font-medium">Admin Mode</div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={logout}
          className="flex items-center gap-1"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showLogin ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Admin Login</h3>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full"
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <div className="flex gap-2">
              <Button type="submit" size="sm">Login</Button>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setShowLogin(false);
                  setPassword('');
                  setError('');
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowLogin(true)}
          className="bg-white/80 backdrop-blur-sm"
        >
          <Lock className="w-4 h-4 mr-1" />
          Admin
        </Button>
      )}
    </div>
  );
};

export default AdminLogin;
