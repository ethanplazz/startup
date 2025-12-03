import { useEffect, useState } from 'react';

export function useWebSocket() {
  const [activities, setActivities] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const wsUrl = window.location.hostname === 'localhost' 
      ? 'ws://localhost:9090'
      : `wss://${window.location.hostname}/ws`;

    console.log('Connecting to WebSocket:', wsUrl);
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('✅ WebSocket connected');
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        handleNotification(data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    ws.onclose = () => {
      console.log('❌ WebSocket disconnected');
      setIsConnected(false);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleNotification = (data) => {
    const { type, username, timestamp } = data;
    
    let message = '';
    let icon = '';
    
    if (type === 'user-signup') {
      message = `${username} just created an account!`;
      icon = '🎉';
    } else if (type === 'user-login') {
      message = `${username} logged in`;
      icon = '👋';
    }

    showToast(message, icon);
    
    setActivities(prev => [{
      message,
      time: new Date(timestamp).toLocaleTimeString(),
      id: Date.now()
    }, ...prev].slice(0, 10));
  };

  const showToast = (message, icon) => {
    const toast = document.createElement('div');
    toast.className = 'ws-toast';
    toast.innerHTML = `
      <span style="font-size: 24px; margin-right: 12px">${icon}</span>
      <span>${message}</span>
    `;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      z-index: 9999;
      transform: translateX(400px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
      toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
      toast.style.transform = 'translateX(400px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  return { activities, isConnected };
}