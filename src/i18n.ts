import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                home: {
                    hello: "Hello world!",
                    info: " is a project aiming at expanding my knowledge of react ecosystem.\n \
                    Originally, it was supposed to serve as an interactive cv, but the more I got into it, I realised I should have spent more time \
                    getting used to react.\n \
                    As of now, the project serves as a playground to test various web technologies.",
                    nav: "Navigation"
                },
                nav: {
                    home: "Home",
                    chat: "Chat",
                    settings: "Settings"
                }
            }
        },
        pl: {
            translation: {
                home: {
                    hello: "Witaj świecie!",
                    info: " to projekt mający na celu dalsze zaznajomienie z ekosystemem reacta.\n \
                    W pierwotnym zamyśle miał on służyć jako interaktywne cv, jednak im dalej w las, tym bardziej uświadamiałem sobie, \
                    że aby zrealizować moją wizję w 100% powinienem poświęcić więcej czasu na oswojenie się z reactem.\n \
                    Aktualnie projekt służy jako playground do testowania różnych technologii webowych.",
                    nav: "Nawigacja"
                },
                nav: {
                    home: "Strona główna",
                    chat: "Czat",
                    settings: "Ustawienia"
                }
            }   
        }
    }
})

export default i18n