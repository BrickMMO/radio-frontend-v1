* Front end for BrickMMO Radio, started by Shavin Singh and Andrew Barker.

This portion of the app receives the audio stream from icecast, along with data from the 'Reporter' CMS.
The Reporter CMS is designed for reporters to generate content to be parsed by a 'Producer' CMS, which then passes
approved reporter submissions to openai for content generation based on the submitted segment. The data represented here
is a combination of segment summaries, and the actual audio generated from the prompts, along with musical content.

Imported text data from the Reporter CMS is retrieved in the SegmentData and HostData components, and the audio via the
AudioPlayer component.