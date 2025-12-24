# Notes on Compound Component Pattern

The compound component pattern is used when multiple components belong to a single logical feature and need to share state implicitly. It allows consumers to compose UI declaratively while the parent component manages shared state via context.
In this example, we have a `Toggle` component that manages the toggle state and provides it to its child components `Toggle.On`, `Toggle.Off`, and `Toggle.Button`. This allows users to compose the toggle UI in a flexible way while keeping the state management encapsulated within the `Toggle` component
