module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Recipe',
    sort: { title: 1 }
  },
  fields: {
    add: {
      body: {
        label: 'Body',
        type: 'area',
        options: {
          widgets: {
            'two-column': {}
          }
        }
      },
      extra: {
        label: 'Extra',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [ 'bold', 'italic', 'link' ]
            },
          }
        }
      }
    }
  }
}