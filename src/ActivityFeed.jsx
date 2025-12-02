import { useWebSocket } from '../hooks/useWebSocket';

export default function ActivityFeed() {
  const { activities, isConnected } = useWebSocket();

  return (
    <div style={{
      background: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      maxWidth: '350px',
      width: '100%'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '2px solid #f0f0f0'
      }}>
        <div style={{
          width: '10px',
          height: '10px',
          background: isConnected ? '#4ade80' : '#ef4444',
          borderRadius: '50%',
          animation: isConnected ? 'pulse 2s infinite' : 'none'
        }}></div>
        <h3 style={{ 
          margin: 0, 
          fontSize: '18px',
          fontWeight: '600',
          color: '#333'
        }}>
          Live Activity
        </h3>
      </div>

      {/* Activity List */}
      <div style={{
        maxHeight: '400px',
        overflowY: 'auto'
      }}>
        {activities.length === 0 ? (
          <p style={{ 
            textAlign: 'center', 
            color: '#999', 
            padding: '40px 20px',
            fontSize: '14px'
          }}>
            Waiting for activity...
          </p>
        ) : (
          activities.map(activity => (
            <div 
              key={activity.id} 
              style={{
                padding: '12px',
                borderBottom: '1px solid #f0f0f0',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <div style={{ 
                fontSize: '14px', 
                color: '#333', 
                marginBottom: '4px',
                lineHeight: '1.4'
              }}>
                {activity.message}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: '#999'
              }}>
                {activity.time}
              </div>
            </div>
          ))
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}