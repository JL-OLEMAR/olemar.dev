import { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context/AppContext'
import imageUrlFor from '../utils/imageUrlFor'
import { LinkList, ListItem, Icon } from '../shared'

const useSerializers = () => {
  const { state: { icons } } = useContext(AppContext)
  const linkIcon = icons.find((icon) => icon.alt === 'External Link')

  return {
    types: {
      linkList: ({ node }) => {
        const { items } = node

        return (
          <LinkList>
            {items.map((item) => (
              <li key={item._key}>
                <a href={item.href} target='_blank' rel='noreferrer'>
                  <Icon>
                    <img src={linkIcon.url} alt={linkIcon.alt} />
                    <img src={imageUrlFor(item.icon)} alt={item.text} />
                  </Icon>
                  <span className='link--decoration'>{item.text}</span>
                </a>
              </li>
            ))}
          </LinkList>
        )
      },
      iconList: ({ node }) => {
        const { items } = node

        return (
          <ul>
            {items.map((item) => (
              <ListItem key={item._key}>
                <img src={imageUrlFor(item.icon)} alt={item.text} />
                <span>{item.text}</span>
              </ListItem>
            ))}
          </ul>
        )
      }
    },
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark

        return (
          <a
            href={href}
            target='_blank'
            rel='noreferrer'
            className='link--decoration'
          >
            {children}
          </a>
        )
      },
      iconLink: ({ mark, children }) => {
        const { href, icon } = mark

        return (
          <a href={href} target='_blank' rel='noreferrer'>
            <span className='link--decoration'>{children}</span>
            <Icon>
              <img src={linkIcon.url} alt={linkIcon.alt} />
              <img src={imageUrlFor(icon)} alt={children} />
            </Icon>
          </a>
        )
      },
      internalUrl: ({ mark, children }) => {
        const { href } = mark

        return (
          <Link to={href} className='link--decoration'>
            {children}
          </Link>
        )
      }
    }
  }
}

export default useSerializers
