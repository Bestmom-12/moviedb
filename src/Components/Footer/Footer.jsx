import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Audio Description", href: "/audio-description" },
  { label: "Help Centre", href: "/help" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Media Centre", href: "/media-centre" },
  { label: "Investor Relations", href: "/investor-relations" },
  { label: "Jobs", href: "/jobs" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Legal Notices", href: "/legal-notices" },
  { label: "Cookie Preferences", href: "/cookie-preferences" },
  { label: "Corporate Information", href: "/corporate-information" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/netflix",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/netflix",
    Icon: FaInstagram,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/netflix",
    Icon: FaTwitter,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/netflix",
    Icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav aria-label="Social media" className={styles.socials}>
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          ))}
        </nav>

        <nav aria-label="Footer">
          <ul className={styles.links}>
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.copyright}>
          © 1997–2026 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}
