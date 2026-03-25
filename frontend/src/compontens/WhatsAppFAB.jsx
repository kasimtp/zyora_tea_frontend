import React, { useState } from 'react';

const WHATSAPP_NUMBER = '917592084226'; // +91 7592084226
const WHATSAPP_MESSAGE = 'Hello! I am interested in Zyora Tea. Can you help me?';

const WhatsAppFAB = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-decoration: none;
        }

        .whatsapp-fab__tooltip {
          background: #fff;
          color: #111;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }

        .whatsapp-fab:hover .whatsapp-fab__tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        .whatsapp-fab__btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease;
          flex-shrink: 0;
        }

        .whatsapp-fab:hover .whatsapp-fab__btn {
          transform: scale(1.12);
          box-shadow: 0 10px 32px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-fab__btn svg {
          width: 30px;
          height: 30px;
          fill: #fff;
        }

        /* Pulse ring */
        .whatsapp-fab__pulse {
          position: absolute;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.4);
          animation: waPulse 2s ease-out infinite;
        }

        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tooltip */}
        <span className="whatsapp-fab__tooltip">Chat with us on WhatsApp</span>

        {/* Button wrapper for pulse ring positioning */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="whatsapp-fab__pulse" />
          <div className="whatsapp-fab__btn">
            {/* Official WhatsApp icon */}
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.52 2.14 7.9L.5 31.5l7.82-2.06A15.44 15.44 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5Zm0 28.36a13.8 13.8 0 0 1-7.04-1.93l-.5-.3-5.18 1.36 1.38-5.04-.33-.52A13.84 13.84 0 1 1 16 28.86Zm7.6-10.36c-.41-.2-2.44-1.2-2.82-1.34-.38-.14-.65-.2-.93.2-.27.41-1.07 1.34-1.31 1.62-.24.27-.48.3-.9.1-.41-.2-1.74-.64-3.32-2.04-1.22-1.09-2.05-2.44-2.29-2.85-.24-.41-.03-.63.18-.83.18-.18.41-.48.62-.72.2-.24.27-.41.41-.68.14-.28.07-.52-.03-.72-.1-.2-.93-2.24-1.28-3.07-.33-.8-.67-.69-.93-.7h-.79c-.27 0-.72.1-1.1.52-.38.41-1.44 1.41-1.44 3.43s1.47 3.97 1.68 4.25c.2.27 2.9 4.43 7.02 6.21.98.42 1.75.67 2.35.86.99.31 1.89.27 2.6.16.79-.12 2.44-.99 2.79-1.95.34-.96.34-1.78.24-1.95-.1-.17-.37-.27-.79-.48Z"/>
            </svg>
          </div>
        </div>
      </a>
    </>
  );
};

export default WhatsAppFAB;
