Documentation for Magento PWA Studio packages is located at [https://pwastudio.io](https://pwastudio.io).

This project is built in PWA-studio with Magento 2 ver 2.4.3-p1 as backend.
Beroenden:
(Only on Windows: WSL (Windows subsystem for Linus) with Ubuntu.)
Docker
Installation of Magento 2. Mark Shuts setup.
Yarn >= 10.14.1 LTS
Node >= 1.13.0
PWA Studio (yarn create @magento/pwa)
Fooman VeniaUiOverrideResolver (yarn add @fooman/venia-ui-override-resolver) to use the overrides as they are.

The components are mostly overridden and modified code from node_modules > @magento > venia-ui > lib > components.
I have chosen not to comment that much on the overridden components since most of it aren't written by me.
