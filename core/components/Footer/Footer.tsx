import {
  styled,
  Anchor,
  Grid,
  Text,
  EM,
  Flex,
} from '@maximeheckel/design-system';
import Logo from '@core/components/Logo';
import Link from 'next/link';
import React from 'react';
import { templateColumnsMedium } from 'styles/grid';

const FooterBlock = styled('footer', {
  background: 'var(--background)',
  transition: '0.5s',
  width: '100%',
  borderTop: '1px solid var(--border-color)',
});

const FooterContent = styled(Flex, {
  height: 'var(--space-8)',
  width: '100%',
});

// TODO: Make more modular
const Footer = () => (
  <FooterBlock data-testid="footer">
    <Grid gapX={4} templateColumns={templateColumnsMedium}>
      <Flex
        as={Grid.Item}
        col={2}
        css={{
          padding: 'var(--space-5) 0px',
        }}
        direction="column"
        justifyContent="space-evenly"
        gap={6}
      >
        <Grid css={{ width: '100%' }} templateColumns="repeat(3, 1fr)">
          <Grid.Item>
            <Text size={1}>
              <Grid>
                <Link href="/" legacyBehavior passHref>
                  <Anchor discreet>ホーム</Anchor>
                </Link>
                <Link href="/design" legacyBehavior passHref>
                  <Anchor discreet>デザイン</Anchor>
                </Link>
                <Link href="/rss.xml" legacyBehavior passHref>
                  <Anchor discreet>RSS</Anchor>
                </Link>
              </Grid>
            </Text>
          </Grid.Item>
          <Grid.Item>
            <Text size={1}>
              <Grid>
                <Anchor
                  discreet
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Anchor>
                <Anchor
                  discreet
                  href="https://github.com/minouedesu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Anchor>
                <Anchor
                  discreet
                  href=""
                >
                  コーヒーを奢る
                </Anchor>
              </Grid>
            </Text>
          </Grid.Item>
          <Grid.Item>
            <Text size={1}>
              <Grid>
                <Anchor
                  discreet
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ポートフォリオ
                </Anchor>
                <Anchor
                  discreet
                  href="https://www.figma.com/file/uvkUCtxXs7Vvmj58sHh0TE/Maxime's-Public-Roadmap?node-id=0%3A1"
                >
                  ロードマップ
                </Anchor>
                <Anchor
                  discreet
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ニュースレター
                </Anchor>
              </Grid>
            </Text>
          </Grid.Item>
        </Grid>
        <FooterContent alignItems="center" justifyContent="space-between">
          <Text
            as="p"
            css={{ margin: 0 }}
            size="1"
            variant="primary"
            weight="3"
          >
            © {new Date().getFullYear()} Maxime Heckel ——{' '}
            <EM size="1">New York</EM>
          </Text>
          <Logo alt="Maxime Heckel's logo" size={35} />
        </FooterContent>
      </Flex>
    </Grid>
  </FooterBlock>
);

export default Footer;
