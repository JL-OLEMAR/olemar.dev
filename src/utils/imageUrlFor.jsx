import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../sanityClient.js'

const imageBuilder = imageUrlBuilder(sanityClient)

const imageUrlFor = (source) => imageBuilder.image(source)
export default imageUrlFor
