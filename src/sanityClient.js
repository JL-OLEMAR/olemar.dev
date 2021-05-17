import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '42ldtbyz',
  dataset: 'production',
  useCdn: true
})
