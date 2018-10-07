/** @module */
const extensions = ['webm', 'ogv', 'mp4']

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
        const { url } = t.meta.marpitImage

        if (url && extensions.some(ext => url.endsWith(`.${ext}`))) {
          t.type = 'marpit_video'
          t.tag = 'video'

          const altAttrIdx = t.attrIndex('alt')
          if (altAttrIdx >= 0) t.attrs.splice(altAttrIdx, 1)
        }
      }
    }
  })
}

export default video
