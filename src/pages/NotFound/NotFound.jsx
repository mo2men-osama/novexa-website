import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import Button from '../../components/ui/Button';

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <Section>
        <Container>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginBottom: '1rem' }}>
            404 / PAGE NOT FOUND
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            This page doesn&apos;t exist.
          </h1>
          <p style={{ color: 'var(--color-muted)', maxWidth: '36ch', marginBottom: '2.5rem' }}>
            The URL you followed may be broken or the page may have been removed.
          </p>
          <Link to="/">
            <Button type="button">
              Back to Home <span aria-hidden="true">→</span>
            </Button>
          </Link>
        </Container>
      </Section>
    </main>
  );
}
