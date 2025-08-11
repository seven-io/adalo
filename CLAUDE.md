# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Adalo component library for seven communications API, providing React Native components for SMS, Voice, and various lookup services (CNAM, HLR, MNP, Format). The components integrate with seven.io's REST API and require an API key for operation.

## Development Commands

- `npm run start` - Start development server with Adalo CLI
- `npm run login` - Login to Adalo platform  
- `npm run publish` - Publish components to Adalo marketplace

## Architecture

### Component Structure
- Each component follows the same pattern: `src/components/{ComponentName}/`
- Components require both `index.js` (React component) and `manifest.json` (Adalo configuration)
- All components export through root `index.js` using named exports

### API Integration
- Shared API utility in `src/utils.js` handles all HTTP requests to seven.io gateway
- All requests include standard headers: Accept, Content-Type, SentWith: 'Adalo', X-Api-Key
- API endpoint: `https://gateway.seven.io/api/{endpoint}`

### Component Props Pattern
All components follow consistent prop structure:
- `apiKey` - Required seven.io API key
- `callbackAction` - Optional Adalo action to trigger after completion
- Component-specific props (to, from, text, etc.)

### Manifest Configuration
- Each manifest.json defines component props, display properties, and UI configuration
- Default dimensions: 160px width, 24px height
- Icon reference: `../seven.png`

## Components Available

1. **SMS** - Send SMS messages with flash, delay, and performance tracking options
2. **Voice** - Voice call functionality  
3. **RCS** - Rich Communication Services messaging
4. **LookupCNAM** - Caller Name lookup
5. **LookupHLR** - Home Location Register lookup
6. **LookupMNP** - Mobile Number Portability lookup
7. **LookupFormat** - Number format validation

## Configuration Files

- `adalo.json` - Adalo platform configuration with component registry
- `package.json` - Uses @adalo/cli for development tooling
- React Native Web dependencies for cross-platform compatibility