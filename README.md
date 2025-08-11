<img alt='' src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" />

# Seven Adalo Components

A collection of Adalo components that integrate with the [seven.io](https://www.seven.io) communications API, providing SMS, Voice, RCS messaging, and number lookup services for your Adalo apps.

## Prerequisites

- An active seven.io account and API key
- Adalo account for app development

## Installation

This component library is published to the Adalo marketplace. To use these components in your Adalo app:

1. Open your Adalo app in the editor
2. Navigate to the Components section
3. Search for "seven" to find this component library
4. Add the components you need to your app

## API Key Setup

All components require a seven.io API key to function:

1. Sign up at [seven.io](https://www.seven.io) to get your API key
2. In your Adalo app, configure each component with your API key
3. Test the components to ensure proper integration

## Components

### Messaging Components

- **SMS** - Send text messages with support for flash messages, delivery scheduling, and performance tracking
- **RCS** - Send Rich Communication Services messages with enhanced features
- **Voice** - Initiate voice calls through the seven.io platform

### Lookup Services

- **Lookup Format** - Validate and format phone numbers
- **Lookup CNAM** - Retrieve caller name information
- **Lookup HLR** - Home Location Register lookups for network information  
- **Lookup MNP** - Mobile Number Portability checks

## Development

To develop or customize these components:

```bash
# Install dependencies
npm install

# Start development server
npm run start

# Login to Adalo (required for publishing)
npm run login

# Publish to Adalo marketplace
npm run publish
```

## Support

For component issues or questions:
- Visit [seven.io support](https://www.seven.io) for API-related questions
- Check the Adalo documentation for component integration help

## License

MIT - See LICENSE file for details
