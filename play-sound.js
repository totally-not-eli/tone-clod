#!/usr/bin/env node

const { exec } = require('child_process');
const os = require('os');

/**
 * Plays a notification sound based on the operating system
 */
function playNotificationSound() {
  const platform = os.platform();

  let command;

  switch (platform) {
    case 'darwin': // macOS
      // Use afplay with system notification sound
      command = 'afplay /System/Library/Sounds/Glass.aiff';
      break;

    case 'linux':
      // Try paplay (PulseAudio), then aplay (ALSA), then beep
      command = 'paplay /usr/share/sounds/freedesktop/stereo/message.oga 2>/dev/null || aplay /usr/share/sounds/alsa/Front_Center.wav 2>/dev/null || beep 2>/dev/null || echo "\\a"';
      break;

    case 'win32': // Windows
      // Use PowerShell to play system sound
      command = 'powershell -c "(New-Object Media.SoundPlayer \'C:\\Windows\\Media\\notify.wav\').PlaySync();"';
      break;

    default:
      // Fallback: terminal bell
      console.log('\x07');
      return;
  }

  exec(command, (error) => {
    if (error) {
      // Fallback to terminal bell if sound command fails
      console.log('\x07');
    }
  });
}

// Execute if run directly
if (require.main === module) {
  playNotificationSound();
}

module.exports = { playNotificationSound };
