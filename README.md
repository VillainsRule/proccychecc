<div align="center">

# proccychecc
### the most barebones Titanium Network proxy detector
#### inspired by [olyb's script](https://gist.github.com/BinBashBanana/a1fd7345e2d86e69d5a532f16cbdbdaa)

</div>

<br><br>

<h2 align="center">how it works</h2>

this runs a few checks to detect if a site is a proxy using oversights in the proxy's main code. the checks are as follows:

- GTAG: the existence of a gtag (from a homemade list) on the site's homepage
- UV_CONFIG: the existence of a /uv/uv.config.js file with specific keywords
- RAMMERHEAD: the existence of a /hammerhead.js file with specific keywords
- LIBCURL: the existence of a /libcurl.wasm file with specific keywords

these are incredibly basic checks that can, for the most part, be patched in 5 minutes.<br>
if your site is flagged by GTAG (or uses any other analytics software), your site is incredibly easy to track (remove it).

<h2 align="center">using the repo</h2>

first, clone the repo/cd into the directory/etc.<br>
then, you can use a couple (more soon) commands:

- `bun . gtag` - extracts the gtags from the test URLs
- `bun . check` - checks the test URLs against the 'flags'

you can add your own test URL(s) in [run.js](./src/run.js)

<h5 align="center">made with love by VillainsRule</h5>