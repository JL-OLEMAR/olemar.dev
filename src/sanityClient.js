import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '42ldtbyz',
  dataset: 'production',
  apiVersion: '2019-01-29',
  useCdn: true
})
