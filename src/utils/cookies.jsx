import { useEffect, useState } from "react";
import cookie from "js-cookie";

const Cookies = () => {
    const [showCookieBox, setShowCookieBox] = useState(false);

 
    useEffect(() => {
        // Mostrar o pop-up de cookies após 1 segundo (1000 ms)
        const timer = setTimeout(() => {
          setShowCookieBox(true);
        }, 4000);
    
        // Limpar o temporizador quando o componente for desmontado
        return () => clearTimeout(timer);
      }, []);
    
    //   useEffect(() => {
    //     const cookieConsent = cookie.get('Cookie_accepted_global');
    //     if (cookieConsent === 'accepted_g1458542') {
    //         // Ativar Google Analytics
    //         // (exemplo de código fictício)
    //         window.ga('create', 'UA-XXXXXX-X', 'auto');
    //         window.ga('send', 'pageview');
    //     }
    // }, [])

      const handleAcceptCookies = () => {
        cookie.set('Cookie_accepted_global', 'accepted_g1458542',{ path: '/'} );
        setShowCookieBox(false);
      }; 
    
      const handleRejectCookies = () => {
        const cookiesToRemote = ['Cookie_accepted_global', 'btn_lp_global-buy', 'btn_normal_pass', 'newsletter_subscription', ];
        
         // Remover todos os cookies listados
         cookiesToRemote.forEach(cookieName => {
        cookie.remove(cookieName, { path: '/' });
    });

        setShowCookieBox(false);
      };

      if (!showCookieBox) {
        return null; // Não renderizar nada se showCookieBox for false
    }

    return(
        <div className="bgCookiePopUp">
            <div className="headerCookiePopUp">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaBJREFUSEu1lTsyREEYhb8JVVkEoVVgGSQIBSTkWICETIJIYg/I5UIWIWfOVJ+po6d77kyp6aqZuo++/3n93T1ixWO04vosAnAIbAAHhczmMqTmAewAL41iAvhaFKQHcD8uIuYaKvYIXISCfwGItdhrXI3/Lsu1n+ezQSG1grRlF3gHvksVv7Oih1DYBaoBPkugR8BzYX8G3AKn5d5WuagAu8EngDyX9/nBT1DzXHWU5tlGTekGnwAOVuwt/wY4AZ6AfWAL+ADWi3WDuSSA7ZH3r8HcxfSoBhzMJQFsh+SuAceF/fWY7XkBbFmmLuvm0lJgP+tiUqJiGbqFtnKZ1E4A++n2vAP2ooPqVrR1zkXv3SjKUFn+AbDU1kLKHPSd7lsE3CjTGqkgA8u+7lnTyiPX0aQTEyB9nErshCtb6iawA+pA2TwZ9UoWiFhozFsPdR71FjNt89Zu6qBUZJGNLdt0Zn4LQCoE4t7W1iFGb7EANUesdQjpuktm3oHT6u3aGt2LgDxvnhFDR6ZA/NuODU7FrCi3lRkCQwAtxks9WznAL2kUbhmoS+lpAAAAAElFTkSuQmCC"/>
            <h2>Consentimento de Cookies</h2>
            </div>
           
            <div className="datacookie">
                <p>Este site utiliza cookies para aprimorar sua experiência de navegação e oferecer conteúdo mais relevante. Para saber mais, clique em <a href=""> Leia mais</a>...</p>
            </div>
            <div className="buttonsCookies">
                <button className="buttonCookie" onClick={handleAcceptCookies}>
                Aceitar
                </button>
                <button className="buttonCookie" onClick={handleRejectCookies}>
                Recusar
                    </button>
            </div>
         
        </div>
    )
}

export default Cookies;