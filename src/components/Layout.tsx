import NavBar from "./NavBar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <>{children}</>
    </>
  );
}
