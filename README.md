# Tone Clod 🔔

A Claude Code skill that plays a notification sound when Claude needs user input.

## What it does

When Claude asks you a question or needs your input, this skill automatically plays a system notification sound to alert you. Perfect for when you're multitasking and want to know when Claude needs your attention!

## Installation

1. Clone or copy this repository to your Claude skills directory:
```bash
cd ~/.claude/skills
git clone <your-repo-url> tone-clod
# or symlink it
ln -s /path/to/tone-clod tone-clod
```

2. The skill will automatically activate when you restart Claude Code or reload your configuration.

## How it works

This skill uses Claude Code's `on-ask-user-question` hook to trigger a notification sound whenever Claude uses the `AskUserQuestion` tool.

The sound played depends on your operating system:
- **macOS**: Plays the "Hero" system sound at 200% volume
- **Linux**: Tries PulseAudio, ALSA, or beep
- **Windows**: Plays the notify.wav system sound
- **Fallback**: Terminal bell character

## Testing

Test the notification sound manually:
```bash
npm test
# or
node play-sound.js
```

## Customization

### Change the volume

Edit `play-sound.js` and adjust the `-v` flag (0.0 to 2.0):

```javascript
// Volume examples:
command = 'afplay -v 1.0 /System/Library/Sounds/Hero.aiff';  // Normal volume
command = 'afplay -v 2.0 /System/Library/Sounds/Hero.aiff';  // 200% (current)
command = 'afplay -v 0.5 /System/Library/Sounds/Hero.aiff';  // Quieter
```

### Change the sound

Edit `play-sound.js` and change the sound file path:

```javascript
// macOS example - change to any .aiff or .wav file
command = 'afplay -v 2.0 /System/Library/Sounds/Ping.aiff';
```

### Available macOS System Sounds

Located in `/System/Library/Sounds/`:
- Basso.aiff
- Blow.aiff
- Bottle.aiff
- Frog.aiff
- Funk.aiff
- Glass.aiff (default)
- Hero.aiff
- Morse.aiff
- Ping.aiff
- Pop.aiff
- Purr.aiff
- Sosumi.aiff
- Submarine.aiff
- Tink.aiff

## License

MIT
