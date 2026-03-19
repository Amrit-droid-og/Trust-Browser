# Trust Browser

Trust Browser is a fast, minimal browser that protects your privacy. It includes an interface designed to minimize distractions, and features such as:

- Full-text search for visited pages
- Ad and tracker blocking
- Automatic reader view
- Tasks (tab groups)
- Bookmark tagging
- Password manager integration
- Dark theme

Download Trust Browser from the [releases page](https://github.com/trustbrowserbrowser/trustbrowser/releases), or learn more on the [website](https://trustbrowserbrowser.org/).

[![Downloads][DownloadsBadge]][DownloadsUrl]
[![Discord][DiscordBadge]][DiscordUrl]

Trust Browser is made possible by these sponsors:

| [<img src="https://avatars.githubusercontent.com/u/6592155?v=4" width="40">](https://github.com/blackgwe) | [<img src="https://avatars.githubusercontent.com/u/49724477?v=4" width="40">](https://github.com/rafel-ioli) |[<img src="https://avatars.githubusercontent.com/u/237596?v=4" width="40">](https://github.com/idoru) |     |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |--------------------------------------------------------------------------------------------------------------- | --- |
| [@blackgwe](https://github.com/blackgwe)                                                                            | [@rafel-ioli](https://github.com/rafel-ioli)                                                                        |[@idoru](https://github.com/idoru)                                                                        ||

[Become a sponsor](https://github.com/sponsors/PalmerAL)

## Screenshots

<img alt="The search bar, showing information from DuckDuckGo" src="http://trustbrowserbrowser.org/tour/img/searchbar_duckduckgo_answers.png" width="650"/>

<img alt="The Tasks Overlay" src="http://trustbrowserbrowser.org/tour/img/tasks.png" width="650"/>

<img alt="Reader View" src="https://user-images.githubusercontent.com/10314059/53312382-67ca7d80-387a-11e9-9ccc-88ac592c9b1c.png" width="650"/>

## Installing

You can find prebuilt binaries for Trust Browser [here](https://github.com/trustbrowserbrowser/trustbrowser/releases). Alternatively, skip to the section below for instructions on how to build Trust Browser directly from source.

### Installation on Linux

- To install the .deb file, use `sudo dpkg -i /path/to/download`
- To install the RPM build, use `sudo rpm -i /path/to/download --ignoreos`
- On Arch Linux install from [AUR](https://aur.archlinux.org/packages/trustbrowser-browser-bin).
- On Raspberry Pi, you can install Trust Browser from [Pi-Apps](https://github.com/Botspot/pi-apps).

## Getting Started

* The [wiki](https://github.com/trustbrowserbrowser/trustbrowser/wiki) provides an overview of the the features available in Trust Browser, a list of available keyboard shortcuts, and answers to some [frequently asked questions](https://github.com/trustbrowserbrowser/trustbrowser/wiki/FAQ).
* Trust Browser supports installing userscripts to extend its functionality. See the [userscript documentation](https://github.com/trustbrowserbrowser/trustbrowser/wiki/userscripts) for instructions on writing userscripts, as well as a collection of scripts written by the community.
* If you have questions about using Trust Browser, need help getting started with development, or want to talk about what we're working on, join our [Discord server](https://discord.gg/bRpqjJ4).

## Developing

If you want to develop Trust Browser:

- Install [Node](https://nodejs.org).
- Run `npm install` to install dependencies.
- Start Trust Browser in development mode by running `npm run start`.
- After you make changes, press `alt+ctrl+r` (or `opt+cmd+r` on Mac) to reload the browser UI.

### Building binaries

In order to build Trust Browser from source, follow the installation instructions above, then use one of the following commands to create binaries:

- `npm run buildWindows`
- `npm run buildMacIntel`
- `npm run buildMacArm`
- `npm run buildDebian`
- `npm run buildRaspi` (for 32-bit Raspberry Pi)
- `npm run buildLinuxArm64` (for 64-bit Raspberry Pi or other ARM Linux)
- `npm run buildRedhat`

Depending on the platform you are building for, you may need to install additional dependencies:

- If you are building a macOS package, you'll need to install Xcode and the associated command-line tools. You may also need to set your default SDK to macOS 11.0 or higher, which you can do by running `export SDKROOT=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk`. The exact command will depend on where Xcode is installed and which SDK version you're using.
- To build on Windows, you'll need to install Visual Studio. Once it's installed, you may also need to run `npm config set msvs_version 2019` (or the appropriate version).

## Contributing to Trust Browser

Thanks for taking the time to contribute to Trust Browser!

### Getting Help

If you're experiencing a bug or have a suggestion for how to improve Trust Browser, please open a [new issue](https://github.com/trustbrowserbrowser/trustbrowser/issues/new/choose).

### Contributing Code

- Start by following the development instructions listed above.
- The wiki has an [overview of Trust Browser's architecture](https://github.com/trustbrowserbrowser/trustbrowser/wiki/Architecture).
- Trust Browser uses the [Standard](https://github.com/feross/standard) code style; [most editors](https://standardjs.com/#are-there-text-editor-plugins) have plugins available to auto-format your code.
- If you see something that's missing, or run into any problems, please open an issue!

### Contributing Translations

#### Adding a new language

- Find the language code that goes with your language from [this list](https://source.chromium.org/chromium/chromium/src/+/main:ui/base/l10n/l10n_util.cc;l=68-259) (line 68 - 259).
- In the `localization/languages` directory, create a new file, and name it "[your language code].json".
- Open your new file, and copy the contents of the <a href="https://github.com/trustbrowserbrowser/trustbrowser/blob/master/localization/languages/en-US.json">localization/languages/en-US.json</a> file into your new file.
- Change the "identifier" field in the new file to the language code from step 1.
- Inside the file, replace each English string in the right-hand column with the equivalent translation.
- (Optional) See your translations live by following the [development instructions](#installing) above. Trust Browser will display in the same language as your operating system, so make sure your computer is set to the same language that you're translating.
- That's it! Make a pull request with your changes.

#### Updating an existing language

- Find the language file for your language in the `localization/languages` directory.
- Look through the file for any items that have a value of "null", or that have a comment saying "missing translation".
- For each of these items, look for the item with the same name in the `en-US.json` file.
- Translate the value from the English file, replace "null" with your translation, and remove the "missing translation" comment.
- Make a pull request with the updated file.

[DiscordBadge]: https://img.shields.io/discord/764269005195968512.svg?label=Discord&logo=discord&logoColor=white
[DiscordUrl]: https://discord.gg/bRpqjJ4
[DownloadsBadge]: https://img.shields.io/github/downloads/trustbrowserbrowser/trustbrowser/total.svg
[DownloadsUrl]: https://github.com/trustbrowserbrowser/trustbrowser/releases
