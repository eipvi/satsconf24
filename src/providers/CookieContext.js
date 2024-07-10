// src/providers/CookieContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import cookie from "js-cookie";

const CookieContext = createContext();

export const useCookies = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState(
    cookie.get("Cookie_accepted_global") === "accepted_g1458542"
  );
  const [showCookieBox, setShowCookieBox] = useState(false);

  useEffect(() => {
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setShowCookieBox(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [cookieConsent]);

  //   useEffect(() => {
  //     const cookieConsent = cookie.get('Cookie_accepted_global');
  //     if (cookieConsent === 'accepted_g1458542') {
  //         // Ativar Google Analytics
  //         // (exemplo de código fictício)
  //         window.ga('create', 'UA-XXXXXX-X', 'auto');
  //         window.ga('send', 'pageview');
  //     }
  // }, [])

  const acceptCookies = () => {
    cookie.set("Cookie_accepted_global", "accepted_g1458542", { path: "/" });
    setCookieConsent(true);
    setShowCookieBox(false);
  };

  const rejectCookies = () => {
    const cookiesToRemove = [
      "Cookie_accepted_global",
      "btn_lp_global-buy",
      "btn_normal_pass",
      "newsletter_subscription",
    ];
    cookiesToRemove.forEach((cookieName) => {
      cookie.remove(cookieName, { path: "/" });
    });
    setCookieConsent(false);
    setShowCookieBox(false);
  };

  return (
    <CookieContext.Provider
      value={{ cookieConsent, acceptCookies, rejectCookies, showCookieBox }}
    >
      {children}
    </CookieContext.Provider>
  );
};
