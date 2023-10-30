import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaSpotify, FaGoodreads, FaTwitter } from 'react-icons/fa'
import { DiCssdeck } from 'react-icons/di'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size='3rem' /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/firman-alam'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/firmann.alam/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://open.spotify.com/user/21ukddgo4xikipsvkoxkvktja?si=bfa5X1_xQaiMLE6yg67IRQ'>
        <FaSpotify size='2.6rem' />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
