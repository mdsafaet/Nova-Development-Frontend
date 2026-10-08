import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import "@/styles/social-links.css";

export default function SocialLinks() {
  return (
    <div className="social-curve-wrap">
      <a
        href="https://www.youtube.com/@NovaDevelopmentofficial"
        target="_blank"
        rel="noopener noreferrer"
        className="social-curve-icon social-curve-icon--youtube"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>

      <a
        href="https://www.instagram.com/novadevelopmentbd/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-curve-icon social-curve-icon--instagram"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-curve-icon social-curve-icon--x"
        aria-label="X"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://www.facebook.com/novadevelopmentbd"
        target="_blank"
        rel="noopener noreferrer"
        className="social-curve-icon social-curve-icon--facebook"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
    </div>
  );
}