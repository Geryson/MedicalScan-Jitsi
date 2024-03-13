# MedicalScan-Jitsi

**Angular frameworkben írt webalkalmazás, amely a Jitsi nevű, nyílt forráskódú videókonferencia API alapvető működését implementálja**

Projekt elindítása
-

A tényleges projekt a *JitsiTestApp* mappában lett megvalósítva. Azt kell kiválasztani a gyökérkönyvtárnak, és onnan indítható az Angular app is.
A projekt első indítása előtt futtatni kell az alábbi parancsot:

`npm install`

A projekt indítható Visual Studio Code-ból, Run and Debug menüpont alól, vagy terminálból az alábbi paranccsal:

`npm run start`

Utána megnyitható manuálisan a `http://localhost:4200` címről.

A böngészőben a mikrofon és kamera észleléséhez első indításkor engedélyezni kell azok használatát az adott lapon.

Egyéb tudnivalók
-

A feladattal kb. 3 óra alatt készültem el. External scriptről behúztam a projektbe az API-t, és elindítottam az `app.component.ts` fájlban. Nem jelentkeztem be semmilyen módon, csak a meeting indulási ablakában lévő működést szerettem volna elérni. A meeting felület alá táblázatokba kiírtam néhány adatot (indításkor vagy gombok megnyomásával), amik már ebben az állapotban lekérhetőek az API-n keresztül.
