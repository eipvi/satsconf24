import React, {useState} from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { i18n } from "@/translate/i18n";

const I18N_STORAGE_KEY = 'i18nextLng';

const LangGlobe = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Função do i18n para mudar o idioma
        localStorage.setItem(I18N_STORAGE_KEY, lng); // Armazena a seleção no localStorage
        window.location = window.location; // Atualiza a página
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };


    return(
        <div id="LangGlobe" className="containerLangGlobe">
            <HiOutlineGlobeAlt className="icon" onClick={toggleDropdown} />
            {dropdownVisible && (
                <ul className="ulLangGlobe">
                    <li onClick={() => changeLanguage("pt-BR")}>Português</li>
                    <li onClick={() => changeLanguage("en-US")}>English</li>
                </ul>
            )}
        </div>
    );
};

export default LangGlobe;