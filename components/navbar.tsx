import Link from "next/link";
import Container from "./ui/container";
import MainNavbar from "./main-navbar";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-action";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  ).then((res) => {
    const data = res.json();
    return data;
  }
  );
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Xee's STORE</p>
          </Link>
          
          <MainNavbar data={categories} />
          <NavbarActions/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
