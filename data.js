const cheerio = require('cheerio');
const axios = require('axios').default;

var data = [];
let url = 'https://www.newegg.ca/CPUs-Processors/Category/ID-34?Tid=6677';

const sendData = async function getData() {
    try {
      const html = await axios.get(url);
      const $ = await cheerio.load(html.data);
      let PCs = [];
      let images = [];
      let titles = [];

      $('.item-cells-wrap .item-cell').each((i, elem) => {
          images.push($(elem).find('img').attr('src'));
          titles.push($(elem).find('a.item-title').text());
      })

      for (var i = 0; i < titles.length; ++i) {
        PCs.push({title: titles[i], image: images[i]});
      }
      return PCs;

    } catch (error) {
      console.error(error);
    }
}

/* sendData().then(PC => {
  PC.map((el) => {
    console.log(el.title);
  })
}) */

module.exports = sendData;