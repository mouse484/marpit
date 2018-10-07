/** @module */

/**
 * Marpit video plugin.
 *
 * Support video element by markdown image syntax.
 *
 * @alias module:markdown/video
 * @param {MarkdownIt} md markdown-it instance.
 */
function video(md) {
  md.inline.ruler2.after('marpit_parse_image', 'marpit_video', ({ tokens }) => {
    for (const t of tokens) {
      if (t.type === 'image') {
        // TODO: Transform image token to video
      }
    }
  })
}

export default video
