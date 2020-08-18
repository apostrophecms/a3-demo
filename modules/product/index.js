module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      price: {
        type: 'string'
      },
      taxes: {
        type: 'string'
      },
      blurb: {
        type: 'area',
        options: {
          widgets: {
            'test1': {},
            '@apostrophecms/rich-text': {
              toolbar: [ 'bold', 'italic', 'link' ]
            }
          }
        }
      }
    },
    groups: {
      priceFields: {
        label: 'Price Fields',
        fields: [ 'price', 'taxes' ]
      },
      basics: {
        label: 'Basics',
        fields: ['blurb']
      }
    }
  },
  components(self, options) {
    return {
      async list(req, data) {
        return {
          products: await self.find(req).limit(data.limit).toArray()
        };
      }
    };
  }
};
