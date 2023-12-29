import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaSpotify, FaGoodreads, FaTwitter, FaMedium } from 'react-icons/fa'
import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:aladiat046@gmail.com'>
            aladiat046@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learn. Unlearn. Relearn.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/firman-alam'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/al-adiat-firman-alamsyah-279222217/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/firmann.alam/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
          {/* <SocialIcons href='https://open.spotify.com/user/21ukddgo4xikipsvkoxkvktja?si=bfa5X1_xQaiMLE6yg67IRQ&utm_source=whatsapp'>
            <FaSpotify size='2.6rem' />
          </SocialIcons> */}
          {/* <SocialIcons href='https://www.goodreads.com/firmann_alam'>
            <FaGoodreads size='3rem' />
          </SocialIcons> */}
          {/*           
          <SocialIcons href='https://www.goodreads.com/firmann_alam'>
            <FaGoodreads size='3rem' />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@aladiat046">
            <FaMedium size="3rem" />
          </SocialIcons>
          */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
