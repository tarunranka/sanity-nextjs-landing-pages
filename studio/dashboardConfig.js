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
                  buildHookId: '5e94420d57765245678189fd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nhirx95r',
                  apiId: '9f3e0835-923a-4fd0-8260-497265e0c6ad'
                },
                {
                  buildHookId: '5e94420de757e47888262347',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k6f8cdz5',
                  apiId: '22595932-5401-4925-8781-bf1ee33dfbea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarunranka/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k6f8cdz5.netlify.com', category: 'apps'}
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
