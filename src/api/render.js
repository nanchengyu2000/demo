export default {
  components: {
      'xxx-js': {
          render(createElement) {
              return createElement(
                  'script',
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0',
                      },
                  },
              );
          },
      },
  },
  WIDGET : {
    "CONFIG": {
      "layout": "1",
      "width": 550,
      "height": 250,
      "background": "1",
      "dataColor": "FFFFFF",
      "borderRadius": "5",
      "key": "28cd688d36ef4ae2bffb5a6cd9459522"
    }
  }
}