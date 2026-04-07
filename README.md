<div align="center">
  <img src="public/logo.png" alt="Gaslight Logo" width="150"/>
  <h1>Gaslight</h1>
  <p><strong>The Ultimate Stealth Workspace & Privacy Tool for Windows</strong></p>

  <a href="#features">Features</a> • 
  <a href="#installation">Installation</a> • 
  <a href="#usage-guide">Usage Guide</a> • 
  <a href="#why-gaslight">Why Gaslight?</a>
</div>

---

## 🌟 About Gaslight
**Gaslight** is a hyper-optimized, native Windows application designed to give you absolute command over your digital visibility. Whether you need to instantly clean your screen for a presentation, hide sensitive information from prying eyes, or eliminate visual clutter to enter a deep flow state, Gaslight operates silently beneath the surface using native Windows APIs to securely stash your windows.

Unlike clunky alternatives, Gaslight provides a gorgeous, frosted-glass "Smart Switcher" overlay, allowing you to seamlessly manage, view, and restore your hidden applications without breaking your workflow.

## ✨ Core Features
- **🚀 Instant Vanish (Alt+H):** Press a single key to completely wipe an active application from your screen and taskbar. It remains safely running in memory, entirely invisible to the OS.
- **👻 Ghost Mode (Alt+G):** Turn any active window semi-transparent! Perfect for keeping an eye on a video, chat, or background process without it dominating your screen. (Includes an optional "Click-Through" mode to make the window completely intangible).
- **🚨 Panic Button & Decoys (Ctrl+Alt+C):** Someone approaching your desk? Hit the panic button to instantly conceal all visible windows and automatically launch pre-configured "Decoy" files (like Excel sheets, Word docs, or specific applications) to immediately fill your screen with productive-looking work.
- **📱 Smart Switcher Overlay (Hold Alt):** Summon a beautiful, native-feeling Windows overlay (with Mica blur) that displays live, high-fidelity thumbnail snapshots of all your currently hidden windows. Simply click a thumbnail to flawlessly restore it.
- **🛡️ Intelligent Whitelist:** Configure critical applications (like your main IDE or presentation software) to *never* be hidden, ensuring your primary tools remain active even during a panic-clear.

## 📥 Installation

Because Gaslight is built on the modern Windows App SDK as an optimized, framework-dependent binary, installation is incredibly lightweight and seamless.

1. **Download** the latest `Gaslight_Setup.exe` from the [Releases page](#) (or click Download on the hosted website).
2. **Run the installer**. It will automatically extract the necessary files and drop a shortcut onto your Desktop and Start Menu.
3. Launch Gaslight! It will silently sit in your System Tray (the arrow icon near your clock) ready to guard your workflow.

*(Note: Gaslight requires the standard .NET 9 Desktop Runtime, which Windows 11 handles natively).*

## 📖 Usage Guide

Gaslight operates entirely via global system hotkeys. Once the app is running in your system tray, you can use the following commands from *anywhere* in Windows:

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| `Alt + H` | **Hide Active** | Instantly hides the window currently in focus. |
| `Alt + G` | **Toggle Ghost Mode** | Makes the active window semi-transparent (configurable in settings). |
| `Alt + X` | **Restore Last** | Brings back the most recently hidden window. |
| `Ctrl + Alt + C` | **Panic Clear** | Hides *all* visible windows and automatically launches your Decoys. |
| **Hold `Alt`** | **Smart Switcher** | Opens the visual overlay. Click any window thumbnail to restore it. |

*You can customize the `Alt` long-press delay, Ghost Mode opacity, and configure your Whitelists and Decoys by Right-Clicking the Gaslight icon in your System Tray and clicking "Settings".*

## 🎯 Why Gaslight? (SEO & Discoverability)
If you've been searching for a "boss key", "screen hider", "privacy overlay", or a way to "make windows transparent" on Windows 10/11, Gaslight is the modern solution. 
- **Performance:** Written in C# with direct P/Invoke calls to `user32.dll` for zero-latency execution.
- **Aesthetics:** Implements Windows 11 `MicaBackdrop` and modern fluid UI concepts—it looks and feels like it belongs in the OS.
- **Privacy:** 100% local. No telemetry, no tracking, and fully free for personal use.

## 🤝 Support the Developer
Gaslight is provided completely free of charge. If it saved your privacy, helped you focus, or you just love the UI, consider supporting the project!
- [Sponsor on GitHub](#) (Coming Soon)
- [Support via Razorpay / Crypto](#) (Coming Soon)

---
<div align="center">
  <i>Built natively for Windows 10 & Windows 11.</i>
</div>
