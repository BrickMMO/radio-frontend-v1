# Radio Fronent V1

Front end for BrickMMO Radio, started by Shavin Singh and Andrew Barker.

This portion of the app receives the audio stream from icecast, along with data from the `Reporter` CMS. The Reporter CMS is designed for reporters to generate content to be parsed by a `Producer` CMS, which then passes approved reporter submissions to openai for content generation based on the submitted segment. The data represented here is a combination of segment summaries, and the actual audio generated from the prompts, along with musical content.

Imported text data from the Reporter CMS is retrieved in the SegmentData and HostData components, and the audio via the
AudioPlayer component.

---

## Project Stack

This project uses [React](https://react.dev/).

<img src="https://console.codeadam.ca/api/image/react" width="60">

---

## Repository Resources

* [BrickMMO](https://brickmmo.com)
* [CodeAdam](https://codeadam.ca)

<a href="https://brickmmo.com">
<img src="https://brickmmo.com/images/brickmmo-logo-horizontal.jpg" width="300">
</a>
