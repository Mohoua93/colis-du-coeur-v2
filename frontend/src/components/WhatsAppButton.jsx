import React from "react";
import "../styles/whatsappButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "33612345678";
  const message = encodeURIComponent(
    "Bonjour, je vous contacte depuis le site Les Colis du Coeur."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-wrapper">
      <span className="whatsapp-bubble" aria-hidden="true">
        Discutons ensemble
      </span>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        title="Contacter sur WhatsApp"
      >
        <svg
          className="whatsapp-icon"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M19.11 17.2c-.27-.14-1.62-.8-1.88-.89-.25-.09-.44-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z" />
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.12.55 4.17 1.59 5.98L4 29l8.2-1.54A11.94 11.94 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 21.5c-1.79 0-3.53-.48-5.05-1.4l-.36-.21-4.86.91.92-4.73-.24-.39A9.44 9.44 0 016.5 15c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5z" />
        </svg>
      </a>
    </div>
  );
}

