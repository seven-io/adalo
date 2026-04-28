<p align="center">
  <img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" alt="seven logo" />
</p>

<h1 align="center">seven Components for Adalo</h1>

<p align="center">
  Collection of <a href="https://www.adalo.com/">Adalo</a> components for SMS, RCS, Voice and number-lookups via the seven gateway.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/Adalo-component-blue" alt="Adalo component" />
  <img src="https://img.shields.io/badge/React%20Native-Web-61dafb" alt="React Native Web" />
</p>

---

## Components

### Messaging

- **SMS** - Send text messages with flash, delay and performance-tracking options
- **RCS** - Send Rich Communication Services messages with enhanced media support
- **Voice** - Place text-to-speech voice calls

### Lookups

- **Lookup Format** - Validate and format phone numbers
- **Lookup CNAM** - Caller-name lookup
- **Lookup HLR** - Home Location Register info
- **Lookup MNP** - Mobile Number Portability check

## Prerequisites

- An [Adalo](https://www.adalo.com/) account
- A [seven account](https://www.seven.io/) with API key ([How to get your API key](https://help.seven.io/en/developer/where-do-i-find-my-api-key))

## Installation

The component library is published to the Adalo marketplace.

1. Open your Adalo app in the editor.
2. Open the *Components* panel.
3. Search for **seven** and add the components you need.

## Configuration

Each component takes the following common props:

| Prop | Description |
|------|-------------|
| `apiKey` | Your seven API key |
| `callbackAction` | Adalo action to run when the request completes |

In addition, each component takes its own message/lookup-specific props (`to`, `from`, `text`, etc.).

## Development

```bash
npm install         # install dependencies
npm run start       # local Adalo CLI dev server
npm run login       # authenticate against Adalo
npm run publish     # publish to the Adalo marketplace
```

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact/) or [open an issue](https://github.com/seven-io/adalo/issues).

## License

[MIT](LICENSE)
