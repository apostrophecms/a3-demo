const areaConfig = require('../../../lib/area').basicConfig;

module.exports = {
  options: {
    label: 'Home Page',
    pluralLabel: 'Home Pages'
  },
  fields: {
    add: {
      cta: {
        type: 'area',
        contextual: true,
        max: 1,
        options: {
          widgets: areaConfig
        }
      },
      ctaLinks: {
        type: 'area',
        contextual: true,
        max: 1,
        options: {
          widgets: {
            'cta-links': {}
          }
        }
      },
      main: {
        type: 'area',
        options: {
          expanded: true,
          groups: require('../../../lib/area').fullConfigExpandedGroups
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};
