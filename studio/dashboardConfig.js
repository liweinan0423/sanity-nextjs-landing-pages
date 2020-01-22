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
                  buildHookId: '5e27bf0bc631405ccfe038ab',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jyqonog4',
                  apiId: '59747c88-1687-4775-89b1-ab2d0258e6dd'
                },
                {
                  buildHookId: '5e27bf0b8869dd1a04a8e918',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kunpig3v',
                  apiId: 'aa3898e5-785e-47b4-a684-480e11ec2858'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liweinan0423/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kunpig3v.netlify.com', category: 'apps'}
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
