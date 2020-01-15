export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e1ec1f45b06084c98fc65ec',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio-jey6usux',
                  apiId: 'f339e836-681e-455b-916c-a3875b7cf70a'
                },
                {
                  buildHookId: '5e1ec1f49b1e25f176194fa2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2-web-f9imr6qx',
                  apiId: 'a8ff9526-7552-4223-8a01-004ff703bc92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hiba-kwareict/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2-web-f9imr6qx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
