export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602471e037d7b85c86554c1d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n8w1ubhj',
                  apiId: 'c2aff11a-42fd-4221-8baa-cb8bc8cb17a1'
                },
                {
                  buildHookId: '602471e0e7d1196fc25eea64',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-imfyfouh',
                  apiId: '6762cb1c-f42b-43ff-96bd-13a5491482b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KouroshShahbazi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-imfyfouh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
