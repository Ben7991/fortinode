import { Container } from "@/components/atoms/grid/Grid";
import Navbar from "@/components/organisms/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Getting started</h1>
      </Container>
    </>
  );
}
