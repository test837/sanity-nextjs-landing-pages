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
                  buildHookId: '5e36e856d14944d5cc1f0dfe',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y61kjs4k',
                  apiId: 'fd5eae05-be58-499c-8e7c-ba0337319f76'
                },
                {
                  buildHookId: '5e36e85652044e099feed1e0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8yidz2b8',
                  apiId: 'f0c75e00-2892-4f1b-80ac-da769865c0d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/test837/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8yidz2b8.netlify.com', category: 'apps'}
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
