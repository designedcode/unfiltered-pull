"use client";

import { createElement, useEffect } from "react";
import Script from "next/script";

const CHATBOT_ID = "cmtuhnk7l006ln24uv0pj7g9s";
const LIFT_STYLE_ID = "zapier-chatbot-lift";

function liftLauncher(host: Element) {
  const root = host.shadowRoot;
  if (!root) return false;

  if (!root.getElementById(LIFT_STYLE_ID)) {
    const style = document.createElement("style");
    style.id = LIFT_STYLE_ID;
    style.textContent = `
      :host {
        --zapier-launcher-offset: 5.75rem;
      }
      button,
      [part="launcher"],
      [class*="launcher"],
      [class*="Launcher"],
      iframe {
        bottom: var(--zapier-launcher-offset) !important;
      }
      @media (min-width: 1024px) {
        button,
        [part="launcher"],
        [class*="launcher"],
        [class*="Launcher"],
        iframe {
          bottom: 1.25rem !important;
        }
      }
    `;
    root.appendChild(style);
  }

  const el = host as HTMLElement;
  el.style.setProperty("z-index", "45");
  return true;
}

function tryOpenPopup() {
  const host = document.querySelector("zapier-interfaces-chatbot-embed");
  if (!host?.shadowRoot) return false;

  liftLauncher(host);

  const root = host.shadowRoot;
  const candidates = [
    ...root.querySelectorAll<HTMLElement>("button, [role='button'], [part='launcher']"),
  ];
  const launcher =
    candidates.find((el) => {
      const label = `${el.getAttribute("aria-label") ?? ""} ${el.textContent ?? ""}`.toLowerCase();
      return label.includes("chat") || label.includes("open") || el.getAttribute("part") === "launcher";
    }) ?? candidates[0];

  if (!launcher) return false;
  launcher.click();
  return true;
}

export function ZapierChatbot() {
  useEffect(() => {
    let tries = 0;
    const maxTries = 40;
    const timer = window.setInterval(() => {
      tries += 1;
      const host = document.querySelector("zapier-interfaces-chatbot-embed");
      if (host) liftLauncher(host);
      if (tryOpenPopup() || tries >= maxTries) {
        window.clearInterval(timer);
      }
    }, 400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Script
        src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        type="module"
        strategy="afterInteractive"
      />
      {createElement("zapier-interfaces-chatbot-embed", {
        "is-popup": "true",
        "chatbot-id": CHATBOT_ID,
        "open-by-default": "true",
        className: "zapier-chatbot-host",
      })}
    </>
  );
}
