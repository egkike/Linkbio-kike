import { Link } from "react-router-dom";
import { FaCalculator, FaEarthAmericas } from "react-icons/fa6";
import FotoKike from "../assets/Foto-Kike.webp";

interface PersonalInfo {
  name: string;
  description: string;
  section1: string;
  section2: string;
}

interface LinkItem {
  section: "projects" | "social";
  title: string;
  url: string;
  icon: React.ReactNode;
  className: string;
  delay?: string;
}

const validateUrl = (url: string): string => {
  try {
    new URL(url);
    return url;
  } catch {
    console.warn(`URL inválida: ${url}`);
    return "#";
  }
};

// Usa BASE_URL para generar la ruta correcta en producción
const SPRITE_PATH = import.meta.env.BASE_URL
  ? `${import.meta.env.BASE_URL}assets/sprite.svg`
  : "/assets/sprite.svg";

const BUTTON_CLASSES = `flex items-center justify-center py-3 px-6 text-gray-800 dark:text-white bg-primary rounded-[25px] border-2 border-primary uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-105`;
const SOCIAL_BUTTON_CLASSES = `social-button animate-slide-up-fade`;

const LinkButton: React.FC<{
  link: LinkItem & { isSocial?: boolean };
  onClick?: (url: string) => void;
}> = ({ link, onClick }) => {
  const baseClasses = link.isSocial
    ? `${SOCIAL_BUTTON_CLASSES} ${link.delay} ${link.className}`
    : `${BUTTON_CLASSES} ${link.delay} ${link.className}`;

  const content = (
    <>
      {link.icon && (
        <span className={link.isSocial ? "" : "mr-3"}>{link.icon}</span>
      )}
      {!link.isSocial && link.title}
    </>
  );

  return link.url.startsWith("http") ? (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
      role="button"
      aria-label={`Ir a ${link.title}`}
      title={`Ir a ${link.title}`}
      tabIndex={0}
    >
      {content}
    </a>
  ) : (
    <Link
      to={link.url}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(link.url);
      }}
      className={baseClasses}
      role="button"
      aria-label={`Ir a ${link.title}`}
      title={`Ir a ${link.title}`}
      tabIndex={0}
    >
      {content}
    </Link>
  );
};

const LinkBioPage: React.FC = () => {
  const personalInfo: PersonalInfo = {
    name: "Kike Garcia",
    description: "Emprendedor | Desarrollo Software",
    section1: "Mis Proyectos y Herramientas",
    section2: "Mis Redes Sociales",
  };

  const handleLinkClick = (url: string) => {
    try {
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) {
        alert(
          "No se pudo abrir el enlace. Por favor, desactiva el bloqueador de pop-ups."
        );
      }
    } catch (error) {
      console.error("Error al abrir el enlace:", error);
      alert("Ocurrió un error al abrir el enlace.");
    }
  };

  const links: LinkItem[] = [
    {
      section: "projects",
      title: "GitHub - Proyectos",
      url: validateUrl("https://github.com/egkike"),
      icon: (
        <svg className="size-6 fill-current">
          <use href={`${SPRITE_PATH}#github`} />
        </svg>
      ),
      className: "bg-gradient-to-tr from-blue-500 to-blue-700",
      delay: "",
    },
    {
      section: "projects",
      title: "GarciaHnos - Negocios",
      url: validateUrl("https://egkike.github.io/GarciaHnos-HP/"),
      icon: <FaEarthAmericas size={24} />,
      className: "bg-gradient-to-tr from-blue-500 to-blue-700",
      delay: "animate-delay-100",
    },
    {
      section: "projects",
      title: "Financial-Tools",
      url: validateUrl("https://egkike.github.io/Landing-Kike/financial-tools"),
      icon: <FaCalculator size={24} />,
      className: "bg-gradient-to-tr from-blue-500 to-blue-700",
      delay: "animate-delay-100",
    },
    {
      section: "social",
      title: "LinkedIn",
      url: validateUrl("https://linkedin.com/in/enrique-garcia-6526a15a"),
      icon: (
        <svg className="size-6 fill-current">
          <use href={`${SPRITE_PATH}#linkedin`} />
        </svg>
      ),
      className: "bg-white",
      delay: "animate-delay-100",
    },
    {
      section: "social",
      title: "X (Twitter)",
      url: validateUrl("https://x.com/kike_eg"),
      icon: (
        <svg className="size-6 fill-current">
          <use href={`${SPRITE_PATH}#x`} />
        </svg>
      ),
      className: "bg-black",
      delay: "animate-delay-200",
    },
    {
      section: "social",
      title: "Instagram",
      url: validateUrl("https://instagram.com/kike_eg"),
      icon: (
        <svg className="size-6 fill-current">
          <use href={`${SPRITE_PATH}#instagram`} />
        </svg>
      ),
      className: "bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600",
      delay: "animate-delay-200",
    },
    {
      section: "social",
      title: "Facebook",
      url: validateUrl("https://facebook.com/Kike.eg"),
      icon: (
        <svg className="size-6 fill-current">
          <use href={`${SPRITE_PATH}#facebook`} />
        </svg>
      ),
      className: "bg-blue-600",
      delay: "animate-delay-100",
    },
    {
      section: "social",
      title: "TikTok",
      url: validateUrl("https://tiktok.com/@kike.garcia12"),
      icon: (
        <svg className="size-6 fill-current">
          <use href={`${SPRITE_PATH}#tiktok`} />
        </svg>
      ),
      className: "bg-black",
      delay: "animate-delay-300",
    },
    {
      section: "social",
      title: "YouTube",
      url: validateUrl("https://www.youtube.com/@KikeGarcia13"),
      icon: (
        <svg className="size-6 fill-current">
          <use href={`${SPRITE_PATH}#youtube`} />
        </svg>
      ),
      className: "bg-white",
      delay: "animate-delay-300",
    },
  ];

  const sections = {
    projects: { title: personalInfo.section1, className: "space-y-4" },
    social: {
      title: personalInfo.section2,
      className: "flex gap-3 justify-center flex-wrap",
    },
  };

  return (
    <div
      className="max-w-xl mx-auto min-h-dvh flex items-center justify-center p-6 sm:p-10
      bg-gradient-to-b from-black via-sky-950 to-gray-800 animate-fade-in"
    >
      <div className="relative w-full max-w-md text-center">
        <img
          src={FotoKike}
          alt="Foto de Kike Garcia"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 
          border-sky-400 transition-transform duration-300 hover:scale-105"
        />
        <header className="flex flex-col justify-center items-center mb-8 mt-4">
          <h1
            className="text-2xl font-extrabold leading-tight font-display text-dark 
          dark:text-white"
          >
            {personalInfo.name}
            <svg className="ml-1 w-5 h-5 fill-current text-sky-400 inline">
              <use href={`${SPRITE_PATH}#verified`} />
            </svg>
          </h1>
          <p className="text-primary text-sm px-4 text-balance mt-2">
            {personalInfo.description}
          </p>
        </header>

        {Object.entries(sections).map(([key, { title, className }]) => (
          <div key={key} className="relative w-full max-w-md text-center">
            <header className="flex flex-col justify-center items-center mb-8 mt-4">
              <h2
                className="text-2xl font-bold leading-tight font-display text-text-dark 
               dark:text-white relative after:content-[''] after:block after:w-16 after:h-1 
                after:bg-primary after:mx-auto after:mt-2"
              >
                {title}
              </h2>
            </header>
            <div className={className}>
              {links
                .filter((link) => link.section === key)
                .map((link, index) => (
                  <LinkButton
                    key={index}
                    link={{ ...link, isSocial: key === "social" }}
                    onClick={handleLinkClick}
                  />
                ))}
            </div>
          </div>
        ))}

        <p className="mt-10 text-sm text-primary">
          © {new Date().getFullYear()}{" "}
          <a
            href="mailto:garciahnospy@gmail.com"
            className="underline hover:text-primary-light"
          >
            {personalInfo.name}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LinkBioPage;
