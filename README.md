# CS624-PE04-Likhitha

## Input

- **Static User Data**: The app generates a list of six user profiles with identical placeholder content.
  -  image : Static image (user.png)
  -  name : "John Doe"
  -  occupation : "React Native Developer"
  -  description : 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.'

## Process

1. **Card Rendering**: 
   - The app dynamically creates 6 `ProfileCard` components using a fixed dataset.
   - Cards are displayed in a 2-per-row grid layout using nested View containers.

2. **Interactivity**:
   - Each card toggles between **full-size** and **thumbnail (scaled down)** views when tapped.
   - This is achieved by toggling the `showThumbnail` boolean and updating the state using `immutability-helper`.

3. **Platform Styling**:
   - The app leverages platform-specific styles (iOS shadows vs Android elevation).
   - The `StyleSheet` includes responsive visual effects like shadows, scaling, and rounded borders.

## Output

- An interactive layout of profile cards arranged in rows.
- Each card expands/collapses smoothly when tapped, providing an engaging UX.