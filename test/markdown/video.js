import cheerio from 'cheerio'
import MarkdownIt from 'markdown-it'
import parseImage from '../../src/markdown/parse_image'
import video from '../../src/markdown/video'

describe('Marpit video plugin', () => {
  const md = () => new MarkdownIt('commonmark').use(parseImage).use(video)

  context('with image syntax whose a video extension', () => {
    it('converts to video element', () => {
      const $ = cheerio.load(md().render('![](video.mp4)'))
      expect($('video')).toHaveLength(1)
    })
  })
})
