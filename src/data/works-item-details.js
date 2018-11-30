export const worksItemDetails = {
  expensify: [{
      paragraph: `Expensify to przykład aplikacji napisanej w oparciu o bibliotekę React. Aby umożliwić użytkownikowi wybranie zakresu dat wykorzystane zostały gotowe komponenty, które oferuje biblioteka react-dates. 
      Stan aplikacji natomiast, zarządzany jest za pomocą frameworka Redux. Dane przechowywane są dla każdego użytkownika w bazie danych firebase. Z uwagi na fakt, że firebase pozwala na autentyfikację, postanowiłam ją wdrożyć na podstawie konta gmail.`
    },
    {
      paragraph: `Celem aplikacji jest możliwość sprawnego zarządzania wydatkami. Użytkownik po zalogowaniu do panelu ma możliwość dodać swoje wydatki wraz z krótkim opisem, może je edytować, filtrować oraz sortować.`
    }
  ],
  fluxstore: [{
      paragraph: `FluxStore to przykład aplikacji napisanej w oparciu o bibliotekę React. Aplikacja składa się z widoku katalogu produktów, widoku pojedynczego produktu oraz widoku koszyka. Architektura informacji między komponentami została zaimplementowana zgodnie z wzrocem Flux. Dodatkowo stosując się do reguły DRY skorzystałam z mixinów, aby zapobiec duplikacji kodu w komponentach.`
    },
    {
      paragraph: `Aplikacja przedstawia uproszczony sklep, w którym użytkownik ma możliwość dodać produkt do koszyka w widoku katalogu oraz widoku danego produktu. Stan produków może być kontrolowany także w widoku szczegółowym koszyka, gdzie użytkownik może manipulować ilością konkretnych produktów w tabeli.`
    }
  ],
  grafique: [{
      paragraph: `Projekt grafique składa się ze strony głównej firmy wraz z poszczególnymi sekcjami takimi jak informacje o zrealizowanych projektach, zespole czy formularz z danymi kontaktowymi oraz blog. Zarówno treść poszczegolnych sekcji jak i bloga jest generowana dynamicznie na podstawie danych podanych w panelu admina.`
    },
    {
      paragraph: `Grafique to szablon wordpress utworzony na bazie plików startowych, które oferuje narzędzie underscores. Dla zapewnienia responsywności skorzystałam z frameworka Bootstrap. Dodatkowo wdrożyłam slider i animacje licznika projektów i osiągnięć.`
    }
  ],
  rentiamo: [{
      paragraph: `Projekt Rentiamo przedstawia użycie frameworka Gatsby.js do stworzenia strony firmowej zarządcy nieruchomości. Obecnie strona składa się ze strony głównej i kilku podstron zawierających bardziej szczegółowe informacje. Docelowo projekt będzie rozszerzony o sekcję bloga oraz mape i opis pokoi do wynajęcia.`
    },
    {
      paragraph: `Przy budowie projektu zdecydowałam się skorzystać z Gatsby.js, ponieważ używa service workers, code splitting, server-side rendering, GraphQL i React. Dzieki temu pozwala znacząco skrócić czas ładowania oraz daje możliwość pobierania danych z wielu źródeł. Do stylowania aplikacji wykorzystałam bibliotekę styled-components. Animacje uzyskałam przy pomocy biblioteki AOS.`
    }
  ]
};
