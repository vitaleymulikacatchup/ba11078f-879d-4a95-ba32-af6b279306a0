"use client";

import { useRouter } from "next/navigation";
import { useLenis } from "lenis/react";

export const useButtonClick = (href?: string, onClick?: () => void) => {
  const lenis = useLenis();
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      const sanitizedHref = href.trim();
      if (!sanitizedHref) {
        onClick?.();
        return;
      }
      const isExternalLink = /^(https?:\/\/|www\.)/.test(sanitizedHref);
      const isInternalRoute = sanitizedHref.startsWith("/");
      const targetId = sanitizedHref.startsWith("#")
        ? sanitizedHref.slice(1)
        : sanitizedHref;

      if (isExternalLink) {
        window.open(
          sanitizedHref.startsWith("www.")
            ? `https://${sanitizedHref}`
            : sanitizedHref,
          "_blank",
          "noopener,noreferrer"
        );
      } else if (isInternalRoute) {
        router.push(sanitizedHref);
      } else {
        if (lenis) {
          lenis.scrollTo(`#${targetId}`);
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
    onClick?.();
  };

  return handleClick;
};
