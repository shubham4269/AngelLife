import React from "react";
import styles from "./WhatsappButton.module.css";

const WhatsAppButton = ({
  phone = "+919910478281",
  message = "Hi, I want to know about courses at AngelLife.",
  label = "Chat on WhatsApp",
}) => {
  const digits = phone.replace(/\D/g, "");
  const url = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className={styles.whatsappBtn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <span className={styles.icon}>
        {/* WhatsApp SVG Logo */}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.373 0 .005 5.367 0 12.001a11.93 11.93 0 001.67 6.03L0 24l6.13-1.61A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-11.999 0-3.2-1.247-6.2-3.48-8.53zM12 21.45c-1.46 0-2.89-.38-4.15-1.09l-.3-.18-3.64.96.98-3.55-.2-.3A9.3 9.3 0 012.7 12c0-5.03 4.07-9.1 9.1-9.1 2.43 0 4.72.95 6.44 2.67A9.09 9.09 0 0121.1 12c0 5.03-4.07 9.1-9.1 9.1z"/>
          <path d="M17.35 14.07c-.26-.13-1.52-.75-1.75-.83-.23-.08-.4-.13-.57.13-.18.26-.7.83-.86 1-.16.16-.32.18-.58.06-.26-.13-1.1-.4-2.09-1.3-.77-.68-1.28-1.52-1.43-1.78-.15-.26-.02-.4.12-.53.12-.12.26-.32.39-.48.13-.16.17-.26.26-.42.08-.16.03-.31-.02-.44-.05-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.42-.15 0-.32-.02-.49-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.33.98 2.5.12.16 1.7 2.6 4.12 3.64 2.42 1.05 2.42.7 2.86.65.44-.06 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.07-.1-.25-.15-.52-.28z"/>
        </svg>
      </span>
      <span className={styles.label}>WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

