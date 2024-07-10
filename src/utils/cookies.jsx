// src/components/Cookies.js
import { useCookies } from "@/providers/CookieContext";


const Cookies = () => {
    const { showCookieBox, acceptCookies, rejectCookies } = useCookies();

    if (!showCookieBox) {
        return null;
    }

    return (
        <div className="bgCookiePopUp">
            <div className="headerCookiePopUp">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaBJREFUSEu1lTsyREEYhb8JVVkEoVVgGSQIBSTkWICETIJIYg/I5UIWIWfOVJ+po6d77kyp6aqZuo++/3n93T1ixWO04vosAnAIbAAHhczmMqTmAewAL41iAvhaFKQHcD8uIuYaKvYIXISCfwGItdhrXI3/Lsu1n+ezQSG1grRlF3gHvksVv7Oih1DYBaoBPkugR8BzYX8G3AKn5d5WuagAu8EngDyX9/nBT1DzXHWU5tlGTekGnwAOVuwt/wY4AZ6AfWAL+ADWi3WDuSSA7ZH3r8HcxfSoBhzMJQFsh+SuAceF/fWY7XkBbFmmLuvm0lJgP+tiUqJiGbqFtnKZ1E4A++n2vAP2ooPqVrR1zkXv3SjKUFn+AbDU1kLKHPSd7lsE3CjTGqkgA8u+7lnTyiPX0aQTEyB9nErshCtb6iawA+pA2TwZ9UoWiFhozFsPdR71FjNt89Zu6qBUZJGNLdt0Zn4LQCoE4t7W1iFGb7EANUesdQjpuktm3oHT6u3aGt2LgDxvnhFDR6ZA/NuODU7FrCi3lRkCQwAtxks9WznAL2kUbhmoS+lpAAAAAElFTkSuQmCC"/>
                <h2>Consentimento de Cookies</h2>
            </div>
            <div className="datacookie">
                <p>Este site utiliza cookies para aprimorar sua experiência de navegação e oferecer conteúdo mais relevante. Para saber mais, clique em <a href="/politica"> Leia mais</a>...</p>
            </div>
            <div className="buttonsCookies">
                <button className="buttonCookie" onClick={acceptCookies}>
                    Aceitar
                </button>
                <button className="buttonCookie" onClick={rejectCookies}>
                    Recusar
                </button>
            </div>
        </div>
    );
};

export default Cookies;
